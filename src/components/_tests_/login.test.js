import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login";

describe("When login is ok", () => {
  test("Should error message apear", async () => {
    render(<Login></Login>);

    userEvent.type(screen.getByPlaceholderText("E-mail"), "");
    userEvent.type(screen.getByPlaceholderText("Senha"), "");

    userEvent.click(screen.getByRole("button"));

    const message = await screen.findAllByText("Campo obrigatório");

    expect(message).toBeTruthy();
  });
});
