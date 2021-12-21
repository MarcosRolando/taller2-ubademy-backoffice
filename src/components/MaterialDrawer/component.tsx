import React from "react";
import { SupervisorAccount } from "@material-ui/icons";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { COURSES_ROUTE, REGISTER_ROUTE, USERS_ROUTE, TRANSACTIONS_ROUTE, USER_METRICS_ROUTE } from "../../routePaths";
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

        <Link className='Link' to={TRANSACTIONS_ROUTE}>
          <List>
            <ListItem button key='Transactions'>
              <ListItemIcon><SupervisorAccount/>
              </ListItemIcon>
              <ListItemText primary='Transactions' />
            </ListItem>
          </List>
        </Link>

        <Link className='Link' to={USER_METRICS_ROUTE}>
          <List>
            <ListItem button key='User Metrics'>
              <ListItemIcon><SupervisorAccount/>
              </ListItemIcon>
              <ListItemText primary='UserMetrics' />
            </ListItem>
          </List>
        </Link>

      </Drawer>
    </div>
  );
}
