import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(cleanup);

describe("the controls", () => {
  const cont = render(<Controls />);
  const lockButton = cont.getByTestId("lockButton");
  const openButton = cont.getByTestId("openButton");
  describe("the lock/unlock gate button", () => {
    it("says lock gate when gate is unlocked", () => {
      expect(lockButton).toHaveTextContent(/lock gate/i);
    });
  });
  describe("the open/close button", () => {
    it("says close gate when page is loaded", () => {
      expect(openButton).toHaveTextContent(/close gate/i);
    });
  });
});
