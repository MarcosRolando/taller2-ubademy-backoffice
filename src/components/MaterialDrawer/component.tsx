import React from "react";
import { SupervisorAccount, School, HowToReg, AttachMoney, BarChart } from "@material-ui/icons";
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { COURSES_ROUTE, REGISTER_ROUTE, USERS_ROUTE, TRANSACTIONS_ROUTE, USER_METRICS_ROUTE, LOGIN_ROUTE } from "../../routePaths";
import logo from '../../ubademy-logo.png';
import { useLogout } from "../../hooks/useLogout";
import './styles.css';

export const MaterialDrawer = () => {
  const logout = useLogout();
  const navigate = useNavigate();

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
              <ListItemIcon><HowToReg/>
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
              <ListItemIcon><School/>
              </ListItemIcon>
              <ListItemText primary='Courses' />
            </ListItem>
          </List>
        </Link>

        <Link className='Link' to={TRANSACTIONS_ROUTE}>
          <List>
            <ListItem button key='Transactions'>
              <ListItemIcon><AttachMoney/>
              </ListItemIcon>
              <ListItemText primary='Transactions' />
            </ListItem>
          </List>
        </Link>

        <Link className='Link' to={USER_METRICS_ROUTE}>
          <List>
            <ListItem button key='User Metrics'>
              <ListItemIcon><BarChart />
              </ListItemIcon>
              <ListItemText primary='Metrics' />
            </ListItem>
          </List>
        </Link>

        <div style={{display: 'flex', flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
          <Button onClick={() => {
            logout();
            navigate(LOGIN_ROUTE);
          }}>
            Log out
          </Button>
        </div>

      </Drawer>
    </div>
  );
}
