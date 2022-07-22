import { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /*앞 코드에는 비구조화 할당 문법을 사용했습니다. 
    다음코드오ㅠㅏ 같은 의미입니다.
    const scrollHeight = this.box.scrollHeight
    const scrollheight = this.box.clientHeight */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background:
        "linear-gradient(white, red, orange, yellow, green, blue, indigo, purple, black,white, red, orange, yellow, green, blue, indigo, purple, black,white, red, orange, yellow, green, blue, indigo, purple, black,white, red, orange, yellow, green, blue, indigo, purple, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
export default ScrollBox;
