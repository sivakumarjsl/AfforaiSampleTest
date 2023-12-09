import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import LandingPage from './LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "us",
    element: <div>About</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
