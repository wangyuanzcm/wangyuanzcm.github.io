import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import "./index.scss";
function onChange(newValue) {
  console.log("change", newValue);
}

const styleConfig = {
  width:"100%",
  height:"500px",
}
export default class Editor extends React.Component {
  render() {
    return (
        <AceEditor
        mode="javascript"
        theme="github"
        {...styleConfig}
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}