import GeneralLayout from "../layouts/GeneralLayout";
import AdminLayout from "../layouts/AdminLayout";

/* Importamos los pages */
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound/NotFound";
import Contact from "../pages/Contact";

const routesAdmin = [
	{ 
		path: "/admin", 
		Layout: AdminLayout, 
		component: AdminHome,
	},
	{ 
		path: "/admin/login", 
		Layout: AdminLayout, 
		component: AdminSignIn,
	},
];

/* Ruta home, notfound */
const routesGeneral = [
	{ 
		path: "/home", 
		Layout: GeneralLayout, 
		component: Home,
	},
	{ 
		path: "/admin/contact", 
		Layout: GeneralLayout, 
		component: Contact, 
	},
];

/* Ruta Not Found */
const routesNotFound = [
	{
		path: "*",
		Layout: GeneralLayout,
		component: NotFound,	
	},
];

const projectRoutes = [...routesAdmin, ...routesGeneral, ...routesNotFound];
export default projectRoutes;
