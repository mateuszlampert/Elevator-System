import { Stack, IconButton, Typography } from "@mui/material";
import { ElevatorSystem } from "../algorithm/ElevatorSystem";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Order } from "../algorithm/Order";
import { useState } from "react";
import FloorsPanel from "./FloorsPanel";
import { Elevator } from "../algorithm/Elevator";


export default function Management(params: { elevatorSystem: ElevatorSystem, handlePickup: ((a: Order) => void), handleAddFloorToStopAt: ((elevator: Elevator, floor: number) => void) }) {
    const [elevatorId, setElevatorId] = useState<number>(0)
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "80%" }}>
                <table>
                    {[...Array(params.elevatorSystem.floorsNumber)].map((_, floor) => (
                        <tr key={floor}>
                            <td>
                                <div style={{ background: "black", width: "80px", height: "80px", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Typography>
                                        {params.elevatorSystem.floorsNumber - 1 - floor}
                                    </Typography>
                                </div>
                            </td>
                            {params.elevatorSystem.elevators.map((elevator, id) => (
                                <td
                                    key={id}
                                    onClick={(elevator.currentFloor === params.elevatorSystem.floorsNumber - 1 - floor) ?
                                        (() => {
                                            setElevatorId(elevator.elevatorId)
                                            setOpen(true)
                                        }) : undefined
                                    }
                                >
                                    <div style={{
                                        background: elevator.currentFloor === (params.elevatorSystem.floorsNumber - 1 - floor) ? "black" : "white",
                                        width: "80px",
                                        height: "80px"
                                    }} />
                                </td>
                            ))}
                            <td style={{ background: "white" }}>
                                <Stack direction="column">
                                    <IconButton onClick={(() => {
                                        params.handlePickup({ orderFloor: params.elevatorSystem.floorsNumber - 1 - floor, orderDirection: 1 })
                                    })}>
                                        <ArrowUpwardIcon />
                                    </IconButton>
                                    <IconButton onClick={(() => {
                                        { params.handlePickup({ orderFloor: params.elevatorSystem.floorsNumber - 1 - floor, orderDirection: -1 }) }
                                    })}>
                                        <ArrowDownwardIcon />
                                    </IconButton>
                                </Stack>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <FloorsPanel elevator={params.elevatorSystem.elevators[elevatorId]} open={open} floorsNumber={params.elevatorSystem.floorsNumber} setOpen={setOpen} handleAddFloorToStopAt={params.handleAddFloorToStopAt} />
        </>
    );
}