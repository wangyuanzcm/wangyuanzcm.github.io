import React from "react";
import Editor from "../Editor/Editor";
import Countdown from "react-countdown-time";

import "./Layout.scss";
import Diff from "../Diff/Diff";
const options = {
  title: "计算机专业技能-HTML专项练习",
  question: "问一份标准的HTML文档有哪几个必须的HTML标签？",
  type: "[不定项选择题]",
  answer: "",
  totalNum: "10",
  current: "10",
};
const status = [
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
];
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "answer", //答题模式，analyse分析模式
      similar: "0",
    };
  }
  render() {
    const { mode, similar } = this.state;
    const {initTime} = this.props;
    return (
      <div className="nk-main  clearfix" style={{ paddingTop: "70px" }}>
        <div className="module-box subject-box">
          <div className="nowcoder-topic">
            <div className="com-subject-wrap">
              <div className="com-subject-title">{options.title}</div>
              <Countdown
                endTime={new Date(initTime)}
                overText="已经完成每日复习任务"
                onEnd={this.handleCountdownEnd}
              >
                {({ d, h, m, s }) => {
                  return (
                    <a className="progress-time" title="暂停">
                       <i className="ico-time-control"></i>
                      <span
                        data-left="2591828"
                        data-time="172"
                        className="time-text"
                        style={{ fontSize: "20px" }}
                      >
                        还剩{h}时{m}分{s}秒
                      </span>
                     </a>
                  );
                }}
              </Countdown>
            </div>
            <div className="subject-title-box">
              <div className="answer-progress">
                {options.current} / {options.totalNum}
              </div>
              <div className="subject-title" style={{ float: "right" }}>
                {mode==="analyse"?`答案相似率：${similar}%`:null}
              </div>
            </div>
            <div className="subject-main">
              <div className="subject-content">
                <div className="subject-question">{options.question}</div>
                {mode === "answer" ? <Editor /> : <Diff />}
              </div>
            </div>
          </div>
          <div className="subject-action clearfix">
            <div className="subject-opr">
              <span className="subject-opr-item">
                <i className="ico-collect"></i>
                <a className="js-follow nc-req-auth" data-id="15157">
                  收藏本题
                </a>
              </span>
              <span className="subject-opr-item">
                <i className="ico-mark"></i>
                <a
                  className="js-mark nc-req-auth"
                  data-id="15157"
                  data-tid="43763102"
                  data-title="标记该题，着重查看。"
                  data-tips-index="2"
                >
                  标记一下
                </a>
              </span>
            </div>

            <div className="subject-next">
              {mode === "analyse" ? (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.setState({ mode: "answer" });
                  }}
                >
                  重新答题
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.setState({ mode: "analyse" });
                  }}
                >
                  交卷
                </button>
              )}
              <button
                className="btn btn-primary"
                onClick={() => {
                  // this.setState({ mode: "analyse" });
                }}
              >
                下一题
              </button>
            </div>
            <div className="subject-new-tips">* 交卷即可查看全部答案和解析</div>

            <div className="answer-sheet-box open">
              <div className="answer-sheet-type">
                <i className="icon-nc-make-up"></i>
                <span>单选题8道</span>
                <span>不定项选择题2道</span>
              </div>
              <a className="card-unfold">收起答题卡</a>
              <a className="card-fold">展开答题卡</a>
              <ul className="answer-sheet-num clearfix">
                {status.map((item, index) => {
                  return (
                    <li key={"num" + index}>
                      <a className={item ? "answer-done " : "answering-num"}>
                        {index + 1}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
