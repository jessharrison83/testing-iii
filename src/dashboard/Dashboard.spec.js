import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(cleanup);

describe("control button click functions", () => {
  const dash = render(<Dashboard />);
  const lockButton = dash.getByTestId("lockButton");
  const openButton = dash.getByTestId("openButton");
  describe("the lock/unlock button", () => {
    it("toggles between locked and unlocked when button is clicked", () => {
      fireEvent.click(openButton);
      fireEvent.click(lockButton);
      expect(lockButton).toHaveTextContent(/unlock gate/i);
    });
  });
  describe("the open/close button", () => {
    it("toggles between open and close gate when button is clicked", () => {
      fireEvent.click(openButton);
      expect(openButton).toHaveTextContent(/open gate/i);
    });
  });
});
