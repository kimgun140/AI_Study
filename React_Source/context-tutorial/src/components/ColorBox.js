import { useContext } from "react";
import ColorContext from "../Contexts/color";
const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <>
        <div
          style={{
            width: "640px",
            height: "64px",
            background: state.color,
          }}
        />
        <div
          style={{
            width: "320px",
            height: "32px",
            background: state.subcolor,
          }}
        />{" "}
        <div
          style={{
            width: "640px",
            height: "64px",
            background: state.color,
          }}
        />
        <div
          style={{
            width: "320px",
            height: "32px",
            background: state.subcolor,
          }}
        />{" "}
        <div
          style={{
            width: "640px",
            height: "64px",
            background: state.color,
          }}
        />
        <div
          style={{
            width: "320px",
            height: "32px",
            background: state.subcolor,
          }}
        />
      </>
    </>
  );
};

export default ColorBox;
