import Error from "../components/Error";
import Main from "../layouts/Main";
import CheckoutPage from "../pages/CheckoutPage";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/courses',
        element: <CoursesPage></CoursesPage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
      }
    ]
  }
]);