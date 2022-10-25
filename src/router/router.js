import Error from "../components/Error";
import { coursesLoader } from "../dataLoader/coursesLoader";
import { getCourse } from "../dataLoader/getCourse";
import Main from "../layouts/Main";
import BlogPage from "../pages/BlogPage";
import CheckoutPage from "../pages/CheckoutPage";
import CoursesPage from "../pages/CoursesPage";
import FaqPage from "../pages/FaqPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import SingleCoursePage from "../pages/SingleCoursePage";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/courses',
        element: <CoursesPage></CoursesPage>,
        loader: () => coursesLoader()
      },
      {
        path: '/courses/:id',
        element: <SingleCoursePage></SingleCoursePage>,
        loader: ({ params }) => getCourse(params.id)
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
      },
      {
        path: '/faq',
        element: <FaqPage></FaqPage>
      },
      {
        path: '/blog',
        element: <BlogPage></BlogPage>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  }
]);