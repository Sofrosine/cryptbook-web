import { fireEvent, render } from "@testing-library/react";
import Table from "components/Table";
import { DUMMY_MARKET_DATA } from "data";
import React from "react";

describe("Testing Table", () => {
  test("should render component", () => {
    const { getByTestId } = render(
      <Table loading={false} data={DUMMY_MARKET_DATA} />
    );
    const element = getByTestId("main-table");

    expect(element).toBeTruthy();
  });

  test("should render loader component", () => {
    const { getByTestId } = render(
      <Table loading data={DUMMY_MARKET_DATA} />
    );
    const element = getByTestId("main-table");

    expect(element).toBeTruthy();
  });

  test("should select option week", () => {
    const { getByTestId, getAllByTestId } = render(
      <Table loading={false} data={DUMMY_MARKET_DATA} />
    );
    const selectElement = getByTestId("main-table-select");

    fireEvent.change(selectElement, { target: { value: "week" } });

    const options = getAllByTestId("main-table-option");

    expect((options[1] as HTMLOptionElement).selected).toBeTruthy();
  });

  test("should select option month", () => {
    const { getByTestId, getAllByTestId } = render(
      <Table loading={false} data={DUMMY_MARKET_DATA} />
    );
    const selectElement = getByTestId("main-table-select");

    fireEvent.change(selectElement, { target: { value: "month" } });

    const options = getAllByTestId("main-table-option");

    expect((options[2] as HTMLOptionElement).selected).toBeTruthy();
  });

  test("should select option year", () => {
    const { getByTestId, getAllByTestId } = render(
      <Table loading={false} data={DUMMY_MARKET_DATA} />
    );
    const selectElement = getByTestId("main-table-select");

    fireEvent.change(selectElement, { target: { value: "year" } });

    const options = getAllByTestId("main-table-option");

    expect((options[3] as HTMLOptionElement).selected).toBeTruthy();
  });
});
