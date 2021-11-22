import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { describe } from "jest-circus";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import RootProvider from "./provider/RootProvider";
import { THEME } from "./theme";
const FullApp = () => (
  <Router>
    <RootProvider>
      <ThemeProvider theme={THEME}>
        <App />
      </ThemeProvider>
    </RootProvider>
  </Router>
);

describe("Auth action", () => {
  it("SingUp success", async () => {
    render(<FullApp />);
    const signUpBtn = screen.getByRole("button", { name: /Đăng ký/i });
    fireEvent.click(signUpBtn);

    const userNameField = screen.getByPlaceholderText(/Nhập tài khoản/i);
    const passWordField = screen.getByPlaceholderText(/Nhập mật khẩu/i);
    fireEvent.change(userNameField, { target: { value: "admin" } });
    fireEvent.change(passWordField, { target: { value: "admin" } });
    const submitButton = screen.getByTestId("register-btn");
    fireEvent.click(submitButton);
    await screen.findByText("Đăng ký thành công");
    const snackBarText = screen.getByText(/Đăng ký thành công/i);
    expect(snackBarText).toBeInTheDocument();
  });

  it("Login success", async () => {
    render(<FullApp />);
    const signUpBtn = screen.getByRole("button", { name: /Đăng nhập/i });
    fireEvent.click(signUpBtn);
    const userNameField = screen.getByPlaceholderText(/Nhập tài khoản/i);
    const passWordField = screen.getByPlaceholderText(/Nhập mật khẩu/i);
    fireEvent.change(userNameField, { target: { value: "admin" } });
    fireEvent.change(passWordField, { target: { value: "admin" } });
    const submitButton = screen.getByTestId("login-btn");
    fireEvent.click(submitButton);
    await screen.findByText("Đăng nhập thành công");
    const snackBarText = screen.getByText(/Đăng nhập thành công/i);
    expect(snackBarText).toBeInTheDocument();
  });

  it("Share", async () => {
    render(<FullApp />);
    const shareBtn = screen.getByRole("button", { name: /Share Video/i });
    fireEvent.click(shareBtn);
    const linkField = screen.getByPlaceholderText(/Nhập link muốn share/i);
    fireEvent.change(linkField, {
      target: { value: "https://www.youtube.com/watch?v=6Qac2hCXmlY" },
    });
    const shareBtnSubmit = screen.getByRole("button", { name: /Share/i });
    fireEvent.click(shareBtnSubmit);
    await screen.findByText("Share video thành công");
    const snackBarText = screen.getByText(/Share video thành công/i);
    expect(snackBarText).toBeInTheDocument();
  });
});
