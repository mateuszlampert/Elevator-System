import ConfigurationPanel from './components/ConfigurationPanel';
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Simulation from './components/Simulation';


const SimulationRouter = () => {
  const { elevators, floors } = useParams();

  return <Simulation elevators={parseInt(elevators!)} floors={parseInt(floors!)} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ConfigurationPanel />
  },
  {
    path: "/simulation/:elevators/:floors",
    element: <SimulationRouter />
  }
]);

export default function App() {
  return <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
}
