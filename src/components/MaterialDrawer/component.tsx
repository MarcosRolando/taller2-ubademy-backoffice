import React from "react";
import { AccountCircle, SupervisorAccount } from "@material-ui/icons";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { COURSES_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, USERS_ROUTE } from "../../routePaths";
import logo from '../../ubademy-logo.png';
import './styles.css';

export const MaterialDrawer = () => {
  return (
    <div className='MaterialDrawer'>
      <Drawer 
        variant='permanent' anchor='left'
        PaperProps={{
          sx: { width: "15%" },
        }}
      >
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


        <Link className='Link' to={USERS_ROUTE}>
          <List>
            <ListItem button key='Users'>
              <ListItemIcon><SupervisorAccount/>
              </ListItemIcon>
              <ListItemText primary='Users' />
            </ListItem>
          </List>
        </Link>

        <Link className='Link' to={COURSES_ROUTE}>
          <List>
            <ListItem button key='Courses'>
              <ListItemIcon><SupervisorAccount/>
              </ListItemIcon>
              <ListItemText primary='Courses' />
            </ListItem>
          </List>
        </Link>

      </Drawer>
    </div>
  );
}
