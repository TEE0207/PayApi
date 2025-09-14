import {  render, screen} from "@testing-library/react"
import ContactHeroOne from "../Contact/ContactHeroOne";
import userEvent from "@testing-library/user-event";



import "@testing-library/jest-dom"


describe( "ContactHeroOne", () => {


    it("should render inputs and submit button", () => {

        render(<ContactHeroOne />)

          const inboxBoxes =  screen.getAllByRole('textbox')

          expect(inboxBoxes.length).toBe(5)

    })


it("shows validation errors when submitting empty form", async () => {

  render(<ContactHeroOne />);

  const user = userEvent.setup();

  // click submit button
  await user.click(screen.getByRole("button", { name: /submit/i }));

  // expect an error to appear
  expect(screen.getAllByText(/This field can't be empty/i)).toHaveLength(5);
});

it("validates email format", async () => {

    render(<ContactHeroOne />)

    const user = userEvent.setup()

    const inputEmail = screen.getByPlaceholderText("Email Address")

    await user.type(inputEmail, "not-an email")

    const clickButton = screen.getByRole("button", {name : /submit/i})

    await user.click(clickButton)

    const errorMessage = screen.getByText(/Enter a valid email address/i)

    expect(errorMessage).toBeInTheDocument()
})


 
})