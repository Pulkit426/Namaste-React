import { fireEvent, render, waitFor, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import ResMenu from "../ResMenu";
import Header from "../Header";
import { MENU_DATA } from "../../utils/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Cart updates on adding food items", async () => {
  const body = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
          <ResMenu />
        </Provider>
      </StaticRouter>
    )
  );

  await waitFor(() => expect(body.getByTestId("res-menu")));

  const addBtn = body.getAllByTestId("add-btn");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[3]);

  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 2");
});
