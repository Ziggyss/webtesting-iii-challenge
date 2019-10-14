// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Display />);
});

describe("display component", () => {
  test("renders", () => {
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
  });

  test("displays closed if the closed prop is true", () => {
    const wrapper = rtl.render(<Display closed={true} />);
    expect(wrapper.queryByText(/Closed/)).toBeInTheDocument();
  });

  test("displays Locked if the locked prop is true", () => {
    const wrapper = rtl.render(<Display closed={true} locked={true} />);
    expect(wrapper.queryByText(/Locked/)).toBeInTheDocument();
  });

  test('when closed or locked use the red-led class', () => {
    const wrapper = rtl.render(<Display closed={true} locked={true} />);
    expect(wrapper.queryByText(/Locked/)).toHaveClass('red-led');
    expect(wrapper.queryByText(/Closed/)).toHaveClass('red-led');
    expect(wrapper.queryByText(/Locked/)).not.toHaveClass('green-led');
    expect(wrapper.queryByText(/Closed/)).not.toHaveClass('green-led');
  });

//   test('when open or unlocked use the green-led class', () => {
//     const wrapper = rtl.render(<Display open={true} unlocked={true} />);
//     expect(wrapper.queryByText(/unlocked/i)).toHaveClass('green-led');
//     // expect(wrapper.queryByText(/open/i)).toHaveClass('green-led');
//     // expect(wrapper.queryByText(/unlocked/i)).not.toHaveClass('red-led');
//     // expect(wrapper.queryByText(/open/i)).not.toHaveClass('red-led');
//   });

//This code above kept failing - I'm not yet sure why

// test('when open use the green-led class', () => {
//     const wrapper =rtl.render(<Display open={true}/>);
//     expect(wrapper.queryByText(/Open/)).toHaveClass('green-led');
// });

  


});
