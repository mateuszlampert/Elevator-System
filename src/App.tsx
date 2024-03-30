import { useState } from 'react';
import './App.css'
import { ElevatorSystem } from './algorithm/ElevatorSystem';
import ConfigurationPanel from './components/ConfigurationPanel';
import Management from './components/Management';
import { Order } from './algorithm/Order';
import StepButton from './components/StepButton';
import { Elevator } from './algorithm/Elevator';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
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
