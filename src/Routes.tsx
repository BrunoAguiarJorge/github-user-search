import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Form from './Pages/Form';


const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search" >
                <Form />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;