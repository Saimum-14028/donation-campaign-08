import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Donation from "./Donation";
import Statistics from "./Statistics";
import DonationDetails from "./DonationDetails";

const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
            },
            {
                path : "/donation",
                element : <Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/homecards/:id",
                element : <DonationDetails></DonationDetails>,
                loader:()=>fetch('/data.json')
            }
        ]

    }
])

export default myCreatedRoute;