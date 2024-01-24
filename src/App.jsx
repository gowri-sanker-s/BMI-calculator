import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState("-");
  const [color, setColor] = useState("white");
  const [display, setDisplay] = useState("none");


  const calculateBMI = () => {
    const BMI = (weight / Math.pow(height, 2)) * Math.pow(10, 4);
    setBMI(BMI.toFixed(2));
    colorCalculate(BMI);
  };

  
  const colorCalculate = (BMI) => {
    BMI ? setDisplay("block") : setDisplay("none");
    if (BMI < 16 || BMI > 35) {
      setColor("red");
    } else if (BMI < 17 || BMI > 30) {
      setColor("pink");
    } else if (BMI < 18.5) {
      setColor("yellow");
    } else if (BMI > 18.5 && BMI < 25) {
      setColor("green");
    }
  };
  return (
    <div className="main-app">
      <h1>BMI Calculator</h1>
      <article>
        <input
          type="number"
          placeholder="Input your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Input your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <button onClick={calculateBMI}>Calculate</button>
        <div
          className="colorIndicator"
          style={{
            backgroundColor: color,
            transition: "0.3s ease",
            display: display,
          }}
        >
          <p>{BMI}</p>
        </div>
      </article>
    </div>
  );
}

export default App;
