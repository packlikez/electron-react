import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './src/Home';
import Answers from "./src/Answer";


// import electron from 'electron'
// import * as electron from 'electron'


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/answer/:text">
                    <Answers/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
