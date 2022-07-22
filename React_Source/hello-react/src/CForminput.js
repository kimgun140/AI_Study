import React, { Component } from "react";
class CFormInput extends Component {
  state = {
    Id: "",
    PassWord: "",
    JuMin1: "",
    JuMin2: "",
    Tel1: "",
    Tel2: "",
    Tel3: "",
  };
  input = React.createRef();
  input1 = React.createRef();
  input2 = React.createRef();
  input3 = React.createRef();
  input4 = React.createRef();
  input5 = React.createRef();
  input6 = React.createRef();

  handlefocus = () => {
    this.input.current.focus();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(
      "id" +
        this.state.Id +
        "\n" +
        "pw" +
        this.state.PassWord +
        "\n" +
        this.state.JuMin1 +
        "-" +
        this.state.JuMin2 +
        "/n" +
        this.state.Tel1 +
        "-" +
        this.state.Tel2 +
        "-" +
        this.state.Tel3
    );

    this.setState({
      Id: "",
      PassWord: "",
      JuMin1: "",
      JuMin2: "",
      Tel1: "",
      Tel2: "",
      Tel3: "",
    });

    this.input.current.focus();
  };

  handleClick1 = () => {
    this.input1.current.focus();
  };
  handleClick2 = () => {
    this.input2.current.focus();
  };
  handleClick3 = () => {
    this.input3.current.focus();
  };
  handleClick4 = () => {
    this.input4.current.focus();
  };
  handleClick5 = () => {
    this.input5.current.focus();
  };
  handleClick6 = () => {
    this.input6.current.focus();
  };
  handleClick7 = () => {
    this.input7.current.focus();
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  handleKeyPress1 = (e) => {
    if (e.key === "Enter") {
      this.handleClick1();
    }
  };

  handleKeyPress2 = (e) => {
    if (e.key === "Enter") {
      this.handleClick2();
    }
  };
  handleKeyPress3 = (e) => {
    if (e.key === "Enter") {
      this.handleClick3();
    }
  };
  handleKeyPress4 = (e) => {
    if (e.key === "Enter") {
      this.handleClick4();
    }
  };
  handleKeyPress5 = (e) => {
    if (e.key === "Enter") {
      this.handleClick5();
    }
  };
  handleKeyPress6 = (e) => {
    if (e.key === "Enter") {
      this.handleClick6();
    }
  };
  render() {
    return (
      <table align="center" border="1">
        <tbody>
          <tr>
            <td width="110">아이디</td>
            <td width="400">
              <input
                type="text"
                name="Id"
                size="30"
                value={this.state.Id}
                placeholder="최소6~최대10, 숫자와알파벳만 사용"
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress1}
                ref={this.input}
              />
            </td>
          </tr>
          <tr>
            <td width="110">비밀번호</td>
            <td width="400">
              <input
                type="Password"
                name="PassWord"
                size="30"
                value={this.state.PassWord}
                placeholder="최소6~최대10, 숫자와알파벳만 사용"
                onChange={this.handleChange}
                ref={this.input1}
                onKeyPress={this.handleKeyPress2}
              />
            </td>
          </tr>
          <tr>
            <td width="110">주민번호</td>
            <td width="400">
              <input
                type="text"
                name="JuMin1"
                size="6"
                maxlength="6"
                value={this.state.JuMin1}
                onChange={this.handleChange}
                ref={this.input2}
                onKeyPress={this.handleKeyPress3}
              />
              -
              <input
                type="text"
                name="JuMin2"
                size="7"
                maxlength="7"
                value={this.state.JuMin2}
                onChange={this.handleChange}
                ref={this.input3}
                onKeyPress={this.handleKeyPress4}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="tel"
                name="Tel1"
                size="3"
                maxlength="3"
                value={this.state.Tel1}
                onChange={this.handleChange}
                ref={this.input4}
                onKeyPress={this.handleKeyPress5}
              />
              -
              <input
                type="tel"
                name="Tel2"
                size="4"
                maxlength="4"
                value={this.state.Tel2}
                onChange={this.handleChange}
                ref={this.input5}
                onKeyPress={this.handleKeyPress6}
              />
              -
              <input
                type="tel"
                name="Tel3"
                value={this.state.Tel3}
                size="4"
                maxlength="4"
                onChange={this.handleChange}
                ref={this.input6}
                onKeyPress={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" align="center">
              <button onClick={this.handleClick} align="center">
                확인
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default CFormInput;
