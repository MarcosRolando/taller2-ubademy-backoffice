import { AccountCircle, SupervisorAccount } from "@material-ui/icons";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PROFILE_ROUTE, REGISTER_ROUTE } from "../routePaths";
import logo from '../ubademy-logo.png';
import '../styles/Drawer.css';

const MaterialDrawer = () => {
  return (
    <Drawer variant='permanent' anchor='left'>
      <div style={{display: 'flex', alignSelf:'center', margin: '1.5em 0 0.5em 0'}}>
        <img src={logo} alt='ubademy-logo' style={{display:'flex', alignSelf:'center', height:'80%'}}/>
      </div>
      <Link className='Link' to={PROFILE_ROUTE}>
        <List>
          <ListItem button key='Profile'>
            <ListItemIcon><AccountCircle/>
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
        </List>
      </Link>
      <Link className='Link' to={REGISTER_ROUTE}>
        <List>
          <ListItem button key='Register Admin'>
            <ListItemIcon><SupervisorAccount/>
            </ListItemIcon>
            <ListItemText primary='Register an admin' />
          </ListItem>
        </List>
      </Link>
    </Drawer>
  );
}

export default MaterialDrawer;