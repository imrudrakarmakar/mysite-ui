import React from 'react';
import './AccessControl.css';
import ActionCenter from '../ActionCenter/ActionCenter';
import TableContent from '../TableContent/TableContent';
import TableData from '../TableData/TableData';
import TableDataContent from '../TableDataContent/TableDataContent';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AccessControl() {
    return (
        <div>
            <Router>
            <div className="accesscontrol__main">
                <ActionCenter />
                <Switch>
                    <Route exact path="/tabledatacontent">
                        <TableDataContent />
                    </Route>
                    <Route exact path="/accesscontrol">
                        <TableContent />
                        <TableData />
                    </Route>
                </Switch>
            </div>
            </Router>
        </div>
    )
}

export default AccessControl;
