const { useState } = React;

const TriangleInequality = () => {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [sideC, setSideC] = useState("");
  const [result, setResult] = useState("");

  const handleTriangle = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);

    if (a > 0 && b > 0 && c > 0) {
      if (a + b > c && a + c > b && b + c > a) {
        let triangleType;
        
        // Use a tolerance check to handle floating-point math safely
        const isRight = Math.abs(c * c - (a * a + b * b)) < 0.0001;
        
        if (isRight) {
          triangleType = "right";
        } else if (c * c < a * a + b * b) {
          triangleType = "acute";
        } else {
          triangleType = "obtuse";
        }
        setResult(
          `This is a ${triangleType} triangle! Keep rollin', rollin', rollin', rollin', WHAT?!`
        );
      } else {
        setResult(
          "This is not a triangle! It's just one of those days, when you don't wanna do math!"
        );
      }
    } else {
      setResult(
        "Please enter positive numbers for all three sides. Always keep it positive when you ride with Tha Bizkit!"
      );
    }
  };

  return (
    <>
      <div className="title">Fred Durst's Triangle Inequality Theorem</div>
      <div>
        <img
          src="https://homework.study.com/cimages/multimages/16/tri3159113594440164328.png"
          alt="triangle with sides a, b, and c"
          className="triangle-img"
        />
      </div>
      <div className="side-inputs">
        <div>
          <input
            type="number"
            placeholder="Side a"
            value={sideA}
            onChange={(e) => {
              setSideA(e.target.value);
              setResult("");
            }}
            className="side-input"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Side b"
            value={sideB}
            onChange={(e) => {
              setSideB(e.target.value);
              setResult("");
            }}
            className="side-input"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Side c"
            value={sideC}
            onChange={(e) => {
              setSideC(e.target.value);
              setResult("");
            }}
            className="side-input"
          />
        </div>
      </div>
      <button
        onClick={handleTriangle}
        disabled={!sideA || !sideB || !sideC}
        className="submit-button"
      >
        Check
      </button>
      <div className="result">{result}</div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TriangleInequality />);
