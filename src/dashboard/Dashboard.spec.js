import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(cleanup);

describe("control button click functions", () => {
  const dash = render(<Dashboard />);
  const lockButton = dash.getByTestId("lockButton");
  const openButton = dash.getByTestId("openButton");
  const lockDisplay = dash.getByTestId("lock");
  const openDisplay = dash.getByTestId("open");
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
  describe("the lock/unlock display", () => {
    it("changes to red when gate is locked", () => {
      fireEvent.click(openButton);
      fireEvent.click(lockButton);
      expect(lockDisplay).toHaveClass("red-led");
    });
    it("says locked when gate is locked", () => {
      fireEvent.click(openButton);
      fireEvent.click(lockButton);
      expect(lockDisplay).toHaveTextContent(/locked/i);
    });
  });
  describe("the open/closed display", () => {
    it("changes to red when closed", () => {
      fireEvent.click(openButton);
      expect(openDisplay).toHaveClass("red-led");
    });
    it("says closed when gate is closed", () => {
      fireEvent.click(openButton);
      expect(openDisplay).toHaveTextContent(/closed/i);
    });
  });
});
