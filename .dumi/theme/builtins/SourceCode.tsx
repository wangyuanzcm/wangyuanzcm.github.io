import React from 'react';
import type { Language } from 'prism-react-renderer';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { useCopy } from 'dumi/theme';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import 'prismjs/themes/prism.css';
import './SourceCode.less';

export interface ICodeBlockProps {
  code: string;
  lang: Language;
  showCopy?: boolean;
  iframeKey?:string;
}
const styleConfig = {
  width: "100%",
  height: "400px",
};
export default ({ code, lang, showCopy = true }: ICodeBlockProps) => {
  const [copyCode, copyStatus] = useCopy();
  return (
    <div className="__dumi-default-code-block">
      <Highlight {...defaultProps} code={code} language={lang} theme={undefined}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {showCopy && (
              <button
                className="__dumi-default-icon __dumi-default-code-block-copy-btn"
                data-status={copyStatus}
                onClick={() => copyCode(code)}
              />
            )}
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
export const  SourceEditor = ({ code, lang, showCopy = true,iframeKey }: ICodeBlockProps) => {
  const [copyCode, copyStatus] = useCopy();
  return (
    <div className="__dumi-default-code-block">
       <AceEditor
            mode="javascript"
            theme="github"
            {...styleConfig}
            // onChange={this.onChange}
            // value={content}
            name={iframeKey}
            editorProps={{ $blockScrolling: true }}
          />
     
    </div>
  );
};