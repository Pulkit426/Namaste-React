import { Provider } from "react-redux";
import Body from "../Body";
import { fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../utils/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Shimmer loads on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmerUI = body.getByTestId("shimmer-ui");

  expect(shimmerUI.children.length).toBe(10);
});

test("Restaurant Cards loads on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const searchInput = body.getByTestId("search-input");

  fireEvent.change(searchInput, {
    target: {
      value: "wah",
    },
  });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(3);
});
