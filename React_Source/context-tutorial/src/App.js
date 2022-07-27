import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./Contexts/color";
import SelectColors from "./components/SelctColor";
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox /> <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
