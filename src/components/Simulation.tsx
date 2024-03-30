import { useState } from "react";
import { Elevator } from "../algorithm/Elevator";
import { ElevatorSystem } from "../algorithm/ElevatorSystem";
import { Order } from "../algorithm/Order";
import Management from "./Management";
import StepButton from "./StepButton";
import ElevatorPanelsGrid from "./ElevatorPanelsGrid";
import TopBar from "./TopBar";
import { Button, Stack } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Instructions from "./Instructions";

export default function Simulation(params: { elevators: number, floors: number }) {
    const [elevatorsSystem, setElevatorsSystem] = useState<ElevatorSystem>(new ElevatorSystem(params.floors, params.elevators))
    const [_, setActionsCounter] = useState<number>(0);

    const handlePickup = (order: Order) => {
        elevatorsSystem.pickup(order);
        setActionsCounter((actionsCounter) => actionsCounter + 1);
    }

    const handleStep = () => {
        elevatorsSystem.step();
        setActionsCounter((actionsCounter) => actionsCounter + 1);
    }

    const handleAddFloorToStopAt = (elevator: Elevator, floor: number) => {
        elevator.addFloorToStopAt(floor);
        setActionsCounter((actionsCounter) => actionsCounter + 1);
    }

    return <>
        <TopBar />
        <div style={{ marginTop: "80px", display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "flex-start" }}>
            <Management elevatorSystem={elevatorsSystem} handlePickup={handlePickup} handleAddFloorToStopAt={handleAddFloorToStopAt} />

            <Stack spacing={2} sx={{ width: '40%', display: "flex", justifyContent: 'center' }}>
                <ElevatorPanelsGrid elevators={elevatorsSystem.elevators} />
                <StepButton handleStep={handleStep} />
                <Button variant="contained" style={{ background: "black", color: "white" }} endIcon={<RestartAltIcon />} onClick={() => setElevatorsSystem(new ElevatorSystem(params.floors, params.elevators))}>
                    Restart simulation
                </Button>
                <Instructions />
            </Stack>
        </div>
    </>
}