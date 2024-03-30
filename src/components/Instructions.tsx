import { Card, Divider, Paper, Stack, Typography } from "@mui/material";

export default function Instructions() {
    return <>
        <Typography>
            Hi! Welcome to the elevator manager simulator. On the left, there is a visualization of the elevators. On each floor you can order an elevator, choosing whether you plan to go up or down. Each step of the simulation causes the elevators to move one floor in the appropriate direction. "If you have already reached the elevator", you can select the floor you want to go to by clicking on the appropriate elevator in the map on the left. Above, you can peek current states of all elevators following the pattern:
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Paper elevation={3} sx={{ width: "40%" }}>
                <Card>
                    <div style={{ padding: "1%" }}>
                        <Stack direction="column">
                            <Typography textAlign="center" variant="h6">
                                Elevator no. <b>ElevatorID</b>
                            </Typography>
                            <Divider />
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography textAlign="center">
                                    <b>Current floor</b>
                                </Typography>
                                <Typography textAlign="center">
                                    <b>Current direction</b>
                                </Typography>
                                <Typography textAlign="center">
                                    <b>Destination floor</b>
                                </Typography>
                            </div>
                        </Stack>
                    </div>

                </Card>
            </Paper>
        </div>
    </>
}