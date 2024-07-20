import ReactDOM from "react-dom/client";
import "./index.css"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Ourcycle from "./components/Ourcycle/Ourcycle";
import News from "./components/News/News";
import { Analytics } from "@vercel/analytics/react"


const Applayout= () =>{
    return(
        <>
            <Header></Header>
            <Landing></Landing>
            <Body></Body>
            <Outlet></Outlet>
            <Footer></Footer>
            <Analytics></Analytics>
        </>
    )
}
const Home = ()=>{
    return (
        <>
        <Header></Header>
        <Landing></Landing>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}
const approuter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout></Applayout>,
        
    },
    {
        path:"/home",
        element:<Home></Home>,
        children:[
            {
                path:"/home/contact",
                element:<Contact></Contact>
            },
            {
                path:"/home/cycle",
                element:<Ourcycle></Ourcycle>
            },
            {
                path:"/home/news",
                element:<News></News>
            },
            {
                path:"/home/about",
                element:<About></About>
            }
        ]
    }
    
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}></RouterProvider>)