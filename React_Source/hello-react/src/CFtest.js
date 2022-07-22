class FormInput extends Component {
  state = {
    id: "",
    password: "",
    jumin1: "",
    jumin2: "",
    tel1: "",
    tel2: "",
    tel3: "",
  };
  onChange = (e) => {
    setTimeout(() => console.log(e), 500);
    this.setState({ [e.targetname]: e.target.value });
    // console.log(e.target.name, ":",e.target.value);
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name == "id") {
        this.input_pw.focus();
      } else if (e.target.name == "pw") {
        this.input_Jumin1.focus();
      } else if (e.target.name == "Jumin1") {
        this.input_Jumin2.focus();
      } else if (e.target.name == "Jumin2") {
        this.input_tel1.focus();
      } else if (e.target.name == "tel1") {
        this.input_tel2.focus();
      } else if (e.target.name == "tel2") {
        this.input_tel3.focus();
      } else if (e.target.name == "tel3") {
        this.input_btns.focus();
      }
    }
  };
  onClick = () => {
    alert(
      `아이디:${id}
        비밀번호:${pw}
        주민번호:${jumin1} ,  ${jumin2}   
        전화번호:${tel1}${tel2}${tel3}
        `
    );
    this.setState({
      id: "",
      pw: "",
      jumin1: "",
      jumin2: "",
      tel1: "",
      tel2: "",
      tel3: "",
    });
  };
  render() {
    return (
      <div>
        <center>
          <h1>회원가입</h1>
        </center>
        <table align="center" border="1">
          <tr>
            <td>아이디</td>
            <td>
              <input
                size="10"
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
              ></input>
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                size="10"
                type="password"
                name="pw"
                placeholder="비밀번호"
                value={this.state.id}
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
              ></input>
            </td>
          </tr>
          <tr>
            <td>아이디</td>
            <td>
              <input
                size="10"
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
              ></input>
            </td>
          </tr>
          <tr>
            <td>아이디</td>
            <td>
              <input
                size="10"
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
              ></input>
            </td>
          </tr>
          <tr>
            <td>아이디</td>
            <td>
              <input
                size="10"
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
              ></input>
            </td>
          </tr>
          <tr>
            <td>아이디</td>
            <td>
              <input
                size="10"
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
              ></input>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
