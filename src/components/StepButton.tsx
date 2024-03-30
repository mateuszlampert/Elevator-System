import { Button } from "@mui/material";
import RedoIcon from '@mui/icons-material/Redo';

export default function StepButton(params: { handleStep: (() => void) }) {
    return <>
        <Button variant="contained" style={{ background: "black", color: "white" }} endIcon={<RedoIcon />} onClick={(_ => {
            params.handleStep()
        })}>
            Simulation step
        </Button>
    </>
}