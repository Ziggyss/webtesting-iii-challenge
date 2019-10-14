
import Dashboard from './Dashboard';
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

describe("display component", () => {
  test("renders", () => {
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
  });
});

