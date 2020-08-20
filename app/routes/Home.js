import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Router, Switch } from "react-router";
import styles from '../static/css/home.css';


import Jiaoben from './haha/Jiaoben';
import Write from './haha/Write';
import Wangzhan from './haha/Wangzhan';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 'pay'
        }
    }
    handleClick = ev => {
        this.setState({
            current: ev.key
        });
    }
    render() {
        return (<section className={styles.home_body}>
            <p className={styles.home_tab}>
                <span>网站</span>
                <span>文章</span>
                <span>脚本</span>
            </p>
            <Router>
                <Switch>
                    <Route path="/home" exact component={Write}></Route>
                    <Route path="/home/wangzhan" component={Wangzhan}></Route>
                    <Route path="/home/jiaoben" component={Jiaoben}></Route>
                </Switch>
            </Router>
        </section>)
    }
}

export default Home;
