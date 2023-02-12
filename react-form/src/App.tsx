import { useState } from "react";
import "./App.css";
import Overview from "./components/Overview/Overview";

function App() {
  const [text, setText] = useState("");
  const [overviews, setOverviews] = useState<string[]>([]);

  const handleSubmit = () => {
    setOverviews((ov) => [...ov, text]);
    setText("");
    console.log(overviews);
  };
  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} type="text" />
      <button onClick={handleSubmit}>submit</button>
      <Overview overviews={overviews} />
    </div>
  );
}

export default App;
