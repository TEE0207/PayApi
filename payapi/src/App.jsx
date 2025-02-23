import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./OtherComponent/RootLayout"
import HomePage from "./Home/HomePage"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

     <Route path="/" element={<HomePage /> } />
       
    </Route>
  ))
  

  return (
    <div>
      <RouterProvider router={router} />

    </div>
       
  )
}

export default App
