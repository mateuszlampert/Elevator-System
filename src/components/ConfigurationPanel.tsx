import { Button, Paper, Slider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import TopBar from "./TopBar";


export default function ConfigurationPanel() {
    const [elevators, setElevators] = useState(2)
    const [floors, setFloors] = useState(20)

    return <>
        <TopBar />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Paper sx={{ padding: "5%", width: "60%" }}>
                <Stack direction="column" spacing={4}>
                    <Typography textAlign="center" variant="h6">
                        Hi! Welcome to elevator system simulator :)
                    </Typography>
                    <Typography textAlign="center">
                        Enter number of elevators below:
                    </Typography>

                    <Slider sx={{ color: "black" }} defaultValue={2} min={1} max={16} valueLabelDisplay="auto" onChange={(_, newValue) => {
                        if (typeof newValue === 'number') {
                            setElevators(newValue);
                        }
                    }} />

                    <Typography textAlign="center">
                        Enter number of floors below:
                    </Typography>

                    <Slider sx={{ color: "black" }} defaultValue={20} min={2} max={50} valueLabelDisplay="auto" onChange={(_, newValue) => {
                        if (typeof newValue === 'number') {
                            setFloors(newValue);
                        }
                    }} />

                    <Button variant="contained" sx={{ color: "white", background: "black" }} onClick={(_ => {
                        console.log(`New simulation created with e, f = ${elevators}, ${floors}`)
                    })} href={`simulation/${elevators}/${floors}`}>
                        Create new simulation
                    </Button>
                </Stack>
            </Paper>
        </div>
    </>
}