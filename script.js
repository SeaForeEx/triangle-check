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
        setResult(
        "This is a triangle! Keep rollin', rollin', rollin', rollin', WHAT?!");

      } else {
        setResult(
        "This is not a triangle! It's just one of those days, when you don't wanna do math!");

      }
    } else {
      setResult(
      "Please enter positive numbers for all three sides. Always keep it positive when you ride with Tha Bizkit!");

    }
  };

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, "Fred Durst's Triangle Inequality Theorem"), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("img", {
      src: "https://homework.study.com/cimages/multimages/16/tri3159113594440164328.png",
      alt: "triangle with sides a, b, and c",
      className: "triangle-img" })), /*#__PURE__*/


    React.createElement("div", { className: "side-inputs" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("input", {
      type: "number",
      placeholder: "Side a",
      value: sideA,
      onChange: e => {
        setSideA(e.target.value);
        setResult("");
      },
      className: "side-input" })), /*#__PURE__*/


    React.createElement("div", null, /*#__PURE__*/
    React.createElement("input", {
      type: "number",
      placeholder: "Side b",
      value: sideB,
      onChange: e => {
        setSideB(e.target.value);
        setResult("");
      },
      className: "side-input" })), /*#__PURE__*/


    React.createElement("div", null, /*#__PURE__*/
    React.createElement("input", {
      type: "number",
      placeholder: "Side c",
      value: sideC,
      onChange: e => {
        setSideC(e.target.value);
        setResult("");
      },
      className: "side-input" }))), /*#__PURE__*/



    React.createElement("button", {
      onClick: handleTriangle,
      disabled: !sideA || !sideB || !sideC,
      className: "submit-button" }, "Check"), /*#__PURE__*/



    React.createElement("div", { className: "result" }, result)));


};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(TriangleInequality, null));