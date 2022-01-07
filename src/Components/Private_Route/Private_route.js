import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UseAuth from '../../Hook/useAuth';

const Private_route = ({children, ...rest}) => {
    
    
    const {user}=UseAuth();

   

    return (
       <div>
            <Route
            {...rest}
            render={({location})=>user.email?children:<Redirect
            to={{
                 pathname:'/singIn',
                state:{from:location}
        }}
            ></Redirect>}>
        </Route>
       </div>
    );
};

export default Private_route; 