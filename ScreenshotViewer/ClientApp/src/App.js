import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { ScreenshotDate } from './components/ScreenshotDate';
import { Counter } from './components/Counter';
import { Screenshot } from './components/Screenshot';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={FetchData} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
            <Route path='/date' component={ScreenshotDate} />
            <Route path='/screen/:url' component={ Screenshot}>
            </Route>
      </Layout>
    );
  }
}
