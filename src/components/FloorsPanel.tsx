import { Typography, Stack, Divider, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Elevator } from "../algorithm/Elevator";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function FloorsPanel(params: { open: boolean, elevator: Elevator, floorsNumber: number, setOpen: ((a: boolean) => void), handleAddFloorToStopAt: ((elevator: Elevator, floor: number) => void) }) {
    const [open, setOpen] = useState<boolean>(params.open);

    useEffect(() => {
        setOpen(params.open);
    }, [params.open]);

    return <>
        <>
            <Dialog open={open}>
                <DialogTitle textAlign="center">
                    Floor selection panel for elevator no. {params.elevator.elevatorId}
                </DialogTitle>
                <DialogContent>
                    <Typography textAlign="center">
                        Select floor you want to go...
                    </Typography>
                    <Stack spacing={3}>
                        <Divider />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "50%" }}>
                                {[...Array(params.floorsNumber)].map((_, i) => (
                                    <Button size="large" onClick={(() => params.handleAddFloorToStopAt(params.elevator, i))}>
                                        <Typography variant="h6" color="black">
                                            {i}
                                        </Typography>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(() => {
                        params.setOpen(false)
                        setOpen(false)
                    })}>
                        Close
                    </Button>
                    <Button autoFocus onClick={(() => {
                        setOpen(false)
                        params.setOpen(false)
                    })}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    </>
}