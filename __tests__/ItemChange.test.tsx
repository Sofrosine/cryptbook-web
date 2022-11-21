import { render } from "@testing-library/react";
import ItemChange from "components/ItemChange";
import React from "react";

describe("Testing ItemChange", () => {
  test("should render component", () => {
    const { getByTestId } = render(<ItemChange value={"20"} />);
    const element = getByTestId("item-change");

    expect(element).toBeTruthy();
  });

  test("should render component with negative value", () => {
    const { getByTestId } = render(<ItemChange value={"-20"} />);
    const element = getByTestId("item-change");

    expect(element).toBeTruthy();
  });

  test("should render component with loading", () => {
    const { getByTestId } = render(<ItemChange loading />);
    const element = getByTestId("item-change-loader");

    expect(element).toBeTruthy();
  });
});
