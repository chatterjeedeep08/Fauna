import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function Navbar(){
    const [loginText, setLoginText] = useState("Login");

    const handleLogin = () => {
        loginText==="Login" ? setLoginText("Logout") : setLoginText("Login");
    }
    return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Fauna
            </Typography>
            <Button color="inherit">Report</Button>
            <Button color="inherit">Adoption</Button>
            <Button color="inherit">Healthcare</Button>
            <Button color="inherit" onClick={handleLogin}>{loginText}</Button>
            <Avatar alt="Remy Sharp" src="/fauna/public/logo192.png" />
        </Toolbar>
    </AppBar>
    );
}

export default Navbar;