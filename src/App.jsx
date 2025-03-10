import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./OtherComponent/RootLayout"
import HomePage from "./Home/HomePage"
import PricingPage from "./Pricing/PricingPage"
import AboutPage from "./About/AboutPage"
import ContactPage from "./Contact/ContactPage"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={<RootLayout />}>

     <Route path="/" element={<HomePage /> } />

     <Route path="/pricing" element={<PricingPage />} />

     <Route path="/about" element={<AboutPage />} />

     <Route path="/contact" element={<ContactPage />} />


       
    </Route>
  ))
  

  return (
    <div>
      <RouterProvider router={router} />

    </div>
       
  )
}

export default App
