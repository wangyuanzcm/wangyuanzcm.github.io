import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout/Layout";
import {getInitTime} from "./utils"
import "./index.scss";


class App extends React.Component {
  render() {
    const initTime = getInitTime();
    return (
      <div className="container">
        <div className="nowcoder-header js-nowcoder-header">
          <div className="header-main clearfix"></div>
        </div>
        <Layout initTime={initTime}/>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
