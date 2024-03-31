import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ElevatorIcon from '@mui/icons-material/Elevator';

export default function TopBar() {
    return (
        <AppBar position="fixed" sx={{ background: "black" }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    href="/"
                >
                    <ElevatorIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    ElevatorManager
                </Typography>
            </Toolbar>
        </AppBar>
    );
}