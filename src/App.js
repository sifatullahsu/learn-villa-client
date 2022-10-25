import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { router } from './router/router';

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
