import ToggleButton from "react-toggle-button";
import logo from "./logo.svg";
import "./App.css";
let pswrd = document.getElementById("pswrd");
let toggleBtn = document.getElementById("toggleBtn");

let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let digit = document.getElementById("number");
let specialChar = document.getElementById("special");
let minLength = document.getElementById("length");

function checkPassword(data) {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  if (lower.test(data)) {
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
  }

  if (upper.test(data)) {
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
  }

  if (number.test(data)) {
    digit.classList.add("valid");
  } else {
    digit.classList.remove("valid");
  }

  if (special.test(data)) {
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
  }

  if (length.test(data)) {
    minLength.classList.add("valid");
  } else {
    minLength.classList.remove("valid");
  }
}

const onClick = (e) => {
  if (pswrd.type === "password") {
    pswrd.setAttribute("type", "text");
    toggleBtn.classList.add("hide");
  } else {
    pswrd.setAttribute("type", "password");
    toggleBtn.classList.remove("hide");
  }
};
function App() {
  return (
    <div class="box">
      <div class="inputBox">
        <input
          type="password"
          id="pswrd"
          placeholder="password"
          onkeyup="checkPassword(this.value)"
        />
        <ToggleButton id="toggleBtn" onClick={onClick}></ToggleButton>
      </div>
      <div class="validation">
        <ul>
          <li id="lower">At least one lowercase character</li>
          <li id="upper">At least one uppercase character</li>
          <li id="number">At least one number</li>
          <li id="special">At least one special character</li>
          <li id="length">At least 8 character</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
