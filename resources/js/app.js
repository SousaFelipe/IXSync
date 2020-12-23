import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Admin from './pages/Admin'
import Caixa from './pages/Caixa'



class App extends React.Component {



    constructor (props) {
        super (props)
    }



    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={ Login } />
                    <Route path='/admin' component={ Admin } />
                    <Route path='/caixa' component={ Caixa } />
                </Switch>
            </BrowserRouter>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'))
