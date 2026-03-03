
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import NewCard from "./components/newCard/NewCard";
import Card from "./components/Card/Card";



export default function App() {

   
const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    { path: "product/:id", element: <ProductDetails /> },
    { path: "card", element: <NewCard /> }
  ]
}])
  

  return (
    <>
      
     <RouterProvider router={router}/>
     
    </>
  )
}

