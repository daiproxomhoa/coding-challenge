import { ThemeProvider } from "@emotion/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "jest-circus";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ShareLinkDialog from ".";
import RootProvider from "../../provider/RootProvider";
import { THEME } from "../../theme";

const Dialog = () => (
  <Router>
    <RootProvider>
      <ThemeProvider theme={THEME}>
        <ShareLinkDialog open={true} onClose={() => {}} />
      </ThemeProvider>
    </RootProvider>
  </Router>
);

describe("Share Link", () => {
  it("check validate", async () => {
    render(<Dialog />);
    const shareBtnSubmit = screen.getByRole("button", { name: /Share/i });
    fireEvent.click(shareBtnSubmit);
    await screen.findByText("Trường bắt buộc");
    const snackBarText = screen.getByText(/Trường bắt buộc/i);
    expect(snackBarText).toBeInTheDocument();
  });
});
