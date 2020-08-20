/*BASE*/
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { HashRouter,Switch, Route} from 'react-router-dom';
import './static/css/reset.css';
/*redux store */
import { Provider } from 'react-redux'
import store from './store'
/*IMPORT COMPONENT*/
import Home from './routes/Home';
/*RENDER*/
class app extends Component {
    render() {
        return (<Provider store={store}>
            <HashRouter>
                <main>
                   <Switch>
                       <Route path="/home" component={Home}></Route>
                   </Switch>
                </main>
            </HashRouter>

        </Provider>);
    }
}
export default app;
