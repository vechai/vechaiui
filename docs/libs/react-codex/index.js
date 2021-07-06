import * as React from "react";
import { ClipBoardButton } from "@components/clip-board-button";

import { fromTextarea } from "../codex";

const editorOptions = [
  "tabSize",
  "insertSpaces",
  "keyBindingFn",
  "enableAutocompletion",
];

export default class Editor extends React.Component {
  static defaultProps = {
    keyBindingFn: () => null,
    tabSize: 2,
    insertSpaces: true,
    enableAutocompletion: [],
    highlight: () => null,
    onChange: () => null,
    readOnly: false,
    lineNumber: false,
  };

  state = {
    highlighted: null,
  };

  componentDidMount() {
    this.initEditor();

    this._editor.on("change", this.handleChange);
    this._editor.on("scroll", this.syncScroll);
    this.hydrate(true);
  }

  componentDidUpdate(prev) {
    const props = this.props;

    for (let i = 0; i < editorOptions.length; i++) {
      const option = editorOptions[i];
      if (props[option] !== prev[option]) {
        this._editor.setOption(option, props[option]);
      }
    }

    if (props.value !== prev.value) {
      this.hydrate();
    }

    if (props.lineNumber !== prev.lineNumber) {
      this.hydrate();
    }
  }

  componentWillUnmount() {
    if (this._editor) this._editor.dispose();
  }

  initEditor = () => {
    if (this._input.current) {
      this._input.current.blur();
      this._editor = fromTextarea(this._input.current);
      this.handleOptions();
    }
  };

  handleChange = (editor, data) => {
    this.props.onChange(editor, data);
    this.setState({
      highlighted: this.props.highlight({
        code: editor.getValue(),
        lineNumber: this.props.lineNumber,
        language: this.props.language,
        editor: this._editor,
        showClipBoard: false,
      }),
    });
    this.syncScroll();
  };

  handleOptions = () => {
    const availableOptions = this._editor.$options;
    editorOptions.forEach((option) => {
      if (availableOptions[option])
        this._editor.setOption(option, this.props[option]);
    });
  };

  hydrate = (init) => {
    const editorVal = this._editor.getValue();
    if (this.props.value !== editorVal) {
      if (init) {
        this._editor.forceUpdate(this.props.value);
      } else {
        this._editor.edit((editBuilder) => {
          editBuilder.replace(this.props.value, 0, editorVal.length);
        });
      }
      
      this.setState({
        highlighted: this.props.highlight({
          code: this.props.value,
          lineNumber: this.props.lineNumber,
          language: this.props.language,
          editor: this._editor,
          showClipBoard: false,
        }),
      });
    }
  };

  syncScroll = () => {
    if (
      this._highlight.current.clientWidth === 0 &&
      this._highlight.current.clientHeight === 0
    ) {
      return;
    }

    this._highlight.current.scrollTop = this._input.current.scrollTop;
    this._highlight.current.scrollLeft = this._input.current.scrollLeft;
  };

  _input = React.createRef();

  _highlight = React.createRef();

  render() {
    const {
      style,
      value,
      lineNumber,
      showClipBoard,
      lineWrap,
      className,
      language,
      readOnly,
    } = this.props;
    const { highlighted } = this.state;

    const lineWrapStyle = lineWrap
      ? {
          overflowX: "hidden",
          whiteSpace: "pre-wrap",
          wordBreak: "keep-all",
          overflowWrap: "break-word",
        }
      : {};

    const contentStyle = {
      paddingLeft: "1.5rem",
      paddingRight: "3rem",
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
      ...(lineNumber && {
        paddingLeft: "3.5rem",
      }),
    };

    return (
      <div style={{ ...styles.container, ...style }} className={className}>
        <textarea
          ref={this._input}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          autoFocus={false}
          spellCheck={false}
          data-gramm={false}
          readOnly={readOnly}
          style={{
            ...styles.editor,
            ...styles.textarea,
            ...lineWrapStyle,
            ...contentStyle,
          }}
        />
        <pre
          ref={this._highlight}
          aria-hidden={true}
          className={`language-${language} relative`}
          style={{
            ...styles.editor,
            ...styles.highlight,
            ...lineWrapStyle,
            ...contentStyle,
          }}
          {...(typeof highlighted === "string"
            ? { dangerouslySetInnerHTML: { __html: highlighted + "<br />" } }
            : { children: highlighted })}
        />
        {showClipBoard && (
          <ClipBoardButton
            style={{
              top: "24px",
            }}
            value={this._editor?.getValue?.() || value}
            className="absolute z-10 opacity-0 top-6 right-4 group-hover:opacity-100"
          />
        )}
      </div>
    );
  }
}

const styles = {
  container: {
    position: "relative",
    // textAlign: "left",
    boxSizing: "border-box",
    padding: 0,
    // overflow: "hidden",
    width: "100%",
    display: "flex",
    flexFlow: "column",
  },
  textarea: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 1,
    color: "inherit",
    cursor: "text",
    whiteSpace: "pre",
    resize: "none",
    outline: "none",
    overflowY: "hidden",
    overflowX: "auto",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTextFillColor: "transparent",
  },
  highlight: {
    position: "relative",
    pointerEvents: "none",
    flex: "1",
    overflow: "hidden",
    maxHeight: "100%",
    // font: "inherit",
    // fontFeatureSettings: "inherit",
    // fontOpticalSizing: "inherit",
  },
  editor: {
    margin: 0,
    border: 0,
    background: "none",
    boxSizing: "border-box",
    display: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontVariantLigatures: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit",
    tabSize: "inherit",
    textIndent: "inherit",
    textRendering: "inherit",
    textTransform: "inherit",
    // wordBreak: "keep-all",
    // overflowWrap: "break-word",
  },
};
