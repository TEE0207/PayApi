import React from "react"
import {render, screen} from "@testing-library/react"
import ContactHeroOne from "../Contact/ContactHeroOne";
import "@testing-library/jest-dom"


describe( "ContactHeroOne", () => {


    it("should render inputs and submit button", () => {

        render(<ContactHeroOne />)

          const inboxBoxes =  screen.getAllByRole('textbox')

          expect(inboxBoxes.length).toBe(5)

    })


})