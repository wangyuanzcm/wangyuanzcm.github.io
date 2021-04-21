import React from "react";
import AceEditor from "react-ace";
import ReactDiffViewer from "react-diff-viewer";
import { LRUCache } from "../../utils";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

const styleConfig = {
  width: "100%",
  height: "400px",
};
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      questionId: null,
    };
  }
  static getDerivedStateFromProps(props, state) {
    const { infos } = props;
    if (infos.id !== state.questionId) {
      let cacheContent = LRUCache.get(infos.id)||"";
      return { content:cacheContent, questionId: infos.id };
    }
    return null;
  }
  onChange = (args) => {
    const { infos } = this.props;
    LRUCache.put(infos.id, args);
    this.setState({ content: args });
    this.props.onChange(args);
  };
  render() {
    const { infos, mode } = this.props;
    const { content } = this.state;
    console.log(content,'content')
    console.log(infos.body,"infos.body")
    return (
      <>
        <div className="subject-question">{infos.title}</div>
        {mode === "answer" ? (
          <AceEditor
            mode="javascript"
            theme="github"
            {...styleConfig}
            onChange={this.onChange}
            value={content}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
        ) : (
          <ReactDiffViewer
            oldValue={infos.body}
            newValue={content}
            splitView={true}
          />
        )}
      
      </>
    );
  }
}
