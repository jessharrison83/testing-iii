import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

afterEach(cleanup);

describe("the display component", () => {
  const disp = render(<Display />);
  const lockButton = disp.getByTestId("lock");
  const openButton = disp.getByTestId("open");
  describe("the lock button", () => {
    it("is green at pageload", () => {
      expect(lockButton).toHaveClass("green-led");
    });
    it("says unlocked at page load", () => {
      expect(lockButton).toHaveTextContent(/unlocked/i);
    });
  });
  describe("the open button", () => {
    it("is green at pageload", () => {
      expect(openButton).toHaveClass("green-led");
    });
    it("says open at page load", () => {
      expect(openButton).toHaveTextContent(/open/i);
    });
  });
});
