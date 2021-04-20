import React ,{Suspense}from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import {getInitTime} from "./utils"
import "./index.scss";

import { fetchProfileData } from "./api";

const resource = fetchProfileData();

function ProfilePage() {
  return (
    <Suspense
      fallback={<h1>Loading profile...</h1>}
    >
      <App />
    </Suspense>
  );
}
class App extends React.Component {
  render() {
    const datalist = resource.datalist.read();
    const initTime = getInitTime();
    return (
      <div className="container">
        <div className="nowcoder-header js-nowcoder-header">
          <div className="header-main clearfix"></div>
        </div>
        <Layout datalist={datalist} initTime={initTime}/>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<ProfilePage />, mountNode);
