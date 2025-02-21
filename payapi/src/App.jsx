import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./OtherComponent/RootLayout"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>


    </Route>
  ))
  

  return (
    <div>
      <RouterProvider router={router} />

    </div>
       
  )
}

export default App
