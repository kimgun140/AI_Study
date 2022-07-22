import { Component } from "react";

class LifeCyleSample extends Component {
    state = {
        number: 0,
        color: null,
    }
    myRef = null; //myRef를 설덩할 부분
    constructor(props){
        super(props);
        console.log('constructor');
    }
    static getDerivedStateFromProps(nextProps, PrevState){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== PrevState.color){
            return {color: nextProps.color};
        }
        return null;
    }
    componentDidMount(){
        console.log('componentDidmount');
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpadte', nextProps, nextState);
        //숫자의 마지막자리가 4면 리렌더링하지 않습니다.
        return nextState.number % 10 !==4;
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handleClick= () => {
        this.setState({
            number: this.state.number + 1
        });
        getSnapshotBeforeUpdate(PrevProps,PrevState) {
            console.log('getsnapshotBeforeUpdate');
            if(prevProps.color !== this.props.color){
                return this.myRef.style.color;
            }
            return null;
        }
        componentDidUpdate(prevProps.PrevState,snapshot){
            console.log('componentDidUpdate', PrevProps, PrevState)
            if(snapshot){
                console.log('업데이트되기 직전 색상:',snapshot);
            }
        }
        this.render( {
            console.log('render');
        })
    }
}