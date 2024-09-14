import "./App.css";
import ThemeSwitch from "./components/ThemeSwitch";
import NotFound from "./pages/NotFound";
import SingleWebinar from "./pages/SingleWebinar";
import Webinar from "./pages/Webinar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <Webinar /> },
  { path: "/webinar/:id", element: <SingleWebinar /> },
  { path: "*", element: <NotFound /> },
]);
function App() {
  return (
    <div className="App dark:bg-[#151A22]">
      <RouterProvider router={router} />
      <ThemeSwitch />
    </div>
  );
}

export default App;
