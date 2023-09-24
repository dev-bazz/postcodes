import { createBrowserRouter } from "react-router-dom";
import Home from "../App";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

export default routes;
