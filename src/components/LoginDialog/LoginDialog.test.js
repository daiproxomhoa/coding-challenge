import { ThemeProvider } from "@emotion/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "jest-circus";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginDialog from ".";
import RootProvider from "../../provider/RootProvider";
import { THEME } from "../../theme";

const Dialog = () => (
  <Router>
    <RootProvider>
      <ThemeProvider theme={THEME}>
        <LoginDialog open={true} onClose={() => {}} />
      </ThemeProvider>
    </RootProvider>
  </Router>
);

describe("Login Dialog", () => {
  it("check validate", async () => {
    render(<Dialog />);
    let snackBarText;
    const usernameField = screen.getByPlaceholderText(/Nhập tài khoản/i);
    fireEvent.change(usernameField, {
      target: { value: "admin" },
    });
    const LoginBtnSubmit = screen.getByTestId("login-btn");
    fireEvent.click(LoginBtnSubmit);
    await screen.findByText("Trường bắt buộc");
    snackBarText = screen.getByText(/Trường bắt buộc/i);
    expect(snackBarText).toBeInTheDocument();
    const passField = screen.getByPlaceholderText(/Nhập mật khẩu/i);
    fireEvent.change(passField, {
      target: { value: "admin" },
    });
    fireEvent.change(usernameField, {
      target: { value: "" },
    });
    fireEvent.click(LoginBtnSubmit);
    await screen.findByText("Trường bắt buộc");
    snackBarText = screen.getByText(/Trường bắt buộc/i);
    expect(snackBarText).toBeInTheDocument();
    fireEvent.change(passField, {
      target: { value: "admin" },
    });
    fireEvent.change(usernameField, {
      target: { value: "admin" },
    });
    fireEvent.click(LoginBtnSubmit);
    await new Promise(function (resolve, reject) {
      return setTimeout(resolve, 200);
    });
    expect(() => screen.getByText(/Trường bắt buộc/i)).toThrow(
      "Unable to find an element"
    );
  });
});
