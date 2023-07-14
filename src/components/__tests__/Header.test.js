import { Provider } from "react-redux";
import Header from "../Header";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { LOGO_URL } from "../../utils/constants";

test("Logo should load on rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />{" "}
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");
  expect(logo.src).toBe(LOGO_URL);
});

test("Cart should have 0 items on rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />{" "}
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0");
});

test("Login button should be there on rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />{" "}
      </Provider>
    </StaticRouter>
  );

  const loginBtn = header.getByTestId("login-btn");
  expect(loginBtn.innerHTML).toBe("Login");
});
