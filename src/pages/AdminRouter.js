import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AdminHome from './AdminHome'
import AdminLogin from './AdminLogin'
import AdminWriteBlog from './AdminWriteBlog'

export default class AdminRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <Switch>
                <Route exact path="/admin" component={AdminHome}></Route>
                <Route path="/admin/login" component={AdminLogin}></Route>
                <Route path="/admin/write" component={AdminWriteBlog}></Route>
            </Switch>
        </div >;
    }

}