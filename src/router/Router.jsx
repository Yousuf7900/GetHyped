import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../components/Error";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

export default router;