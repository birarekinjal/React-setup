/* eslint-disable arrow-parens */
/* eslint-disable import/no-duplicates */
/* eslint-disable space-unary-ops */
/* eslint-disable padded-blocks */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */
/* eslint-disable one-var */
/* eslint-disable no-var */
/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/order */
/* eslint-disable import/first */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable eqeqeq */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import { Switch } from "react-router-dom";
import Loader from "./component/Loader.jsx";
import loadable from "@loadable/component";
import PublicRoute from "./router/Public.jsx";
import { connect } from "react-redux";

const Home = loadable(() => import("./container/Home.js"), {
  fallback: <Loader />,
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const oldJwtToken = JSON.parse(localStorage.getItem('token'));
    const oldJwtToken = "my-token";

    const route = (
      <Switch>
        <PublicRoute restricted component={Home} path="/home" exact />
        <Redirect to="/" />
      </Switch>
    );
    return <>{route}</>;
    // return (
    //   <>
    //     {oldJwtToken != ''
    //       ? 'No Error' : route}
    //   </>
    // );
  }
}
const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps)(Main));
