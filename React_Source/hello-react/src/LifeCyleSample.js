import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null; // ref를 설정하는 부분
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  //컴포넌트를 만들고 첫 런더링을 다 마친후 실행
  componentDidMount() {
    console.log("componentDidMount");
  }
  //props 또는 state를 변경했을때 호출
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    //숫자의 마지막 자리가 4면 리렌더링 하지않습니다.
    return nextState.number % 10 !== 4;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("Before update color:", snapshot);
    }
  }
  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>plus</button>
      </div>
    );
  }
}

export default LifeCycleSample;