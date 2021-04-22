import React from "react";
import Countdown from "react-countdown-time";
import Question from "../Question";
const stringSimilarity = require("string-similarity");
import {createComents} from '../../api';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "answer", //答题模式，analyse分析模式
      similar: "0",
      // content: "",//用户每次的答题内容
      current: 0,
      editStatus: new Map(),
    };
  }
  onChange = (content) => {
    const { current, editStatus } = this.state;
    this.setState({
      editStatus: editStatus.set(current, content),
    });
  };
  compare() {
    const { datalist } = this.props;
    const { current, editStatus } = this.state;
    const answer = datalist[current].body;
    const similarity = stringSimilarity.compareTwoStrings(
      answer,
      editStatus.get(current)
    );
    this.setState({ similar: (similarity * 100).toFixed(2) });
  }
  collect = async () => {
    const { datalist } = this.props;
    const { current, editStatus } = this.state;
    const number = datalist[current].number;
    if (editStatus.has(current)) {
      const body = editStatus.get(current);
      let res = await createComents(number, { body });
      console.log(res, "res");
    }
  };
  render() {
    const { mode, similar, current, editStatus } = this.state;
    const { datalist, initTime } = this.props;
    return (
      <div className="nk-main  clearfix" style={{ paddingTop: "70px" }}>
        <div className="module-box subject-box">
          <div className="nowcoder-topic">
            <div className="com-subject-wrap">
              <div className="com-subject-title">代码练习</div>
              <Countdown
                endTime={new Date(initTime)}
                overText={
                  <a className="progress-time" title="暂停">
                    已经完成每日复习任务
                  </a>
                }
                onEnd={() => {}}
              >
                {({ d, h, m, s }) => {
                  return (
                    <a className="progress-time" title="暂停">
                      {/* <i className="ico-time-control"></i> */}⏰
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
                {current + 1} / {datalist.length}
              </div>
              <div className="subject-title" style={{ float: "right" }}>
                {mode === "analyse" ? `答案相似率：${similar}%` : null}
              </div>
            </div>
            <div className="subject-main">
              <div className="subject-content">
                <Question
                  infos={datalist[current]}
                  mode={mode}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <div className="subject-action clearfix">
            <div className="subject-opr">
              <span
                className="subject-opr-item"
                onClick={this.collect}
                style={{ cursor: "pointer" }}
              >
                <i className="ico-collect"></i>
                <a className="js-follow nc-req-auth">收藏本题</a>
              </span>
              {/* <span className="subject-opr-item">
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
              </span> */}
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
                    this.compare();
                  }}
                >
                  交卷
                </button>
              )}
              {current < datalist.length - 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.setState({ current: current + 1 });
                  }}
                >
                  下一题
                </button>
              ) : null}
            </div>
            <div className="subject-new-tips">* 交卷即可查看全部答案和解析</div>

            <div className="answer-sheet-box open">
              <div className="answer-sheet-type">
                <i className="icon-nc-make-up"></i>
                {/* <span>单选题8道</span>
                <span>不定项选择题2道</span> */}
              </div>
              <a className="card-unfold">收起答题卡</a>
              <a className="card-fold">展开答题卡</a>
              <ul className="answer-sheet-num clearfix">
                {datalist.map((item, index) => {
                  return (
                    <li key={"num" + index}>
                      <a
                        className={
                          editStatus.has(index) ? "answer-done " : "answering-num"
                        }
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.setState({ current: index });
                        }}
                      >
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
