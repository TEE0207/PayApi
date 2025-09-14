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


it("checkbox toggles",async ()=>{

    render(<ContactHeroOne />)

    const user = userEvent.setup()
    
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement
    
    expect(checkbox.checked).toBe(false)

    await user.click(checkbox)

   expect(checkbox.checked).toBe(true)

    await user.click(checkbox)

    expect(checkbox.checked).toBe(false)


})


 test('submits form when valid and clears fields', async () => {
    render(<ContactHeroOne />);
    const user = userEvent.setup();
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('Email Address'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Company Name'), 'ACME');
    await user.type(screen.getByPlaceholderText('Title'), 'Manager');
    await user.type(screen.getByPlaceholderText('Message'), 'Hello');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(spy).toHaveBeenCalledWith(
      'Form submitted:',
      expect.objectContaining({
        nameValue: 'John Doe',
        emailValue: 'john@example.com',
        companyNameValue: 'ACME',
        titleValue: 'Manager',
        messageValue: 'Hello'
      })
    );

    expect((screen.getByPlaceholderText('Name') as HTMLInputElement).value).toBe('');
    expect((screen.getByPlaceholderText('Email Address') as HTMLInputElement).value).toBe('');
    spy.mockRestore();
  });


 
})