import React from "react";
import { MaterialDrawer } from "../MaterialDrawer/component";
import './styles.css';

export const MyWindow = ({ children }: any) => {
  return (
    <div className='MyWindow'>
      <div className='Drawer'>
        <MaterialDrawer />
      </div>
      <div className='Children'>
        {children}
      </div>
    </div>
  );
}
