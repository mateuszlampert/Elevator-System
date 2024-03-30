import { Card, Divider, Paper, Stack, Typography } from "@mui/material";
import { Elevator } from "../algorithm/Elevator";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';

export default function ElevatorPanel(params: { elevator: Elevator }) {
    return <>
        <Paper elevation={3}>
            <Card>
                <div style={{ padding: "1%" }}>
                    <Stack direction="column">
                        <Typography textAlign="center" variant="h6">
                            Elevator no. {params.elevator.elevatorId}
                        </Typography>
                        <Divider />
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <Typography variant="h6">
                                {params.elevator.currentFloor}
                            </Typography>
                            {params.elevator.currentDirection == 1 ? <ArrowUpwardIcon /> :
                                (params.elevator.currentDirection == -1 ? <ArrowDownwardIcon /> :
                                    <MultipleStopOutlinedIcon style={{ transform: "rotate(90deg)" }} />)}
                            <Typography variant="h6">
                                {params.elevator.destinationFloor}
                            </Typography>
                        </div>
                    </Stack>
                </div>

            </Card>
        </Paper>
    </>
}