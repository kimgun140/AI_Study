// import { Component } from "react";
import { useState } from "react";

//====================
// class EventPractice extends Component {}
// state = {
//   meessage: ''
// }
// //객체 생성자 생성 작업 : 객체를 생성함과 동시에 값을 초기화 시켜주는 과정 ↓
// constructor(props){
//   super(props);//←부모 컴포넌트의 생성자를 호출하는 과정
//   this.handleChange = this.handleChange.bind(this);
//   this.handleClick = this.handleClick.bind(this);
// }
// //상태값을 저장하는 작업: 메시지가 입력되면 그 값을 읽어와서 상태(state)에 저장하는 작업↓
// handleChange(e){
//   this.setState({
//     message: e.target.value
//   });
// }
// handleClick(){
//   alert(this.state.message);
//   this.setState({
//     message:''
//   });
// }
//   render() {
//   return (
//     <div>
//       <h1>이벤트연습</h1>
//       <input
//         type="text"
//         name="message"
//         placeholder="입력플리즈"
//         value={this.state.message}
//         onChange={this.handleChange}
//       />
//       <button onClick={this.handleClick}>확인</button>
//     </div>

//   );
// }
// class EventPractice extends Component {
//   state = {
//     message: ''
//   }
//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value
//     });
//   }
//   handleCick = () => {
//     alert(this.state.message);
//     this.setState({
//       message: ''
//     });
//   }
//   render() {
//     return (
//       <div><h1>이벤트 연습</h1>
//       <input
//       type= 'text'
//       name='message'
//       placeholder= '아무거나 입력플리즈'
//       value={this.state.message}
//       onChange={this.handleChange}/>
//       <button onClick={this.handleCick}>확인</button>
//       </div>
//     )
//   }
// }
//=====================

//================p.136===============

// class EventPractice extends Component {
//   state = {
//     Id:'',
//     username:'',
//     message: '',

//   }
//   handleChange = (e) => {
//     this.setState({
//      [e.target.name]:e.target.value
//     });
//   }
//   handleClick = () => {
//     alert(this.state.message + ':' + this.state.message + ':' + this.state.Id);
//     this.setState({
//       username:'',
//       message: '',
//       Id: ''
//     });
//   }
//   handleKeyPress = (e) => {
//     if(e.key === 'Enter'){
//       this.handleCick();
//     }
//   }
//   render() {
//     return (
//       <div><h1>이벤트 연습</h1>
//       <input
//       type= 'text'
//       name='Id'
//       placeholder= '아이디 입력플리즈'
//       value={this.state.Id}
//       onChange={this.handleChange}/>

//       <input
//       type= 'text'
//       name='username'
//       placeholder= '사용자명'
//       value={this.state.username}
//       onChange={this.handleChange}/>

//        <input
//       type= 'text'
//       name='message'
//       placeholder= '아무거나 입력플리즈'
//       value={this.state.message}
//       onChange={this.handleChange}
//       onKeyPress={this.handleKeyPress}/>

// <button onClick={this.handleCick}>확인</button>
//       </div>
//     )
//   }
// }

//==================p.138====================

// const EventPractice = () => {
//   const[username, setUsername] = useState('');
//   const[message, setMessage] = useState('');
//   const onChangeUsername = e => setUsername(e.target.value);
//   const onChangeMessage = e => setMessage(e.target.value);
//   const onClick = () =>{
//     alert(username + ':' + message);
//     setUsername('');
//     setMessage('');
//   };
//   const onKeyPress = e => {
//     if (e.key === 'Enter')
//     onClick()
//   }
//   return(
//   <div>
//     <h1>이벤트연습</h1>
//     <input
//     type="text"
//     name="username"
//     placeholder= "사용자명"
//     value={username}
//     onChange={onChangeUsername}></input>

//   <input
//     type="text"
//     name="message"
//     placeholder= "아무거나"
//     value={message}
//     onChange={onChangeMessage}
//     onKeyPress={onKeyPress}></input>
//   <button onClick={onClick}>확인</button>
//   </div>
// )
// };

//==================================p.139==============

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form 내용을 이자리에 복사한 뒤
      [e.target.name]: e.target.value, //원하는 값을 씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      ></input>

      <input
        type="text"
        name="message"
        placeholder="아무거나"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
