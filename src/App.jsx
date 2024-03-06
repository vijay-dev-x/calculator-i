import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  return (
    <>
      <div className="calculator">
        <div className="container ">
          <div className="input ">
            <input type="text" value={num} />
          </div>
          <div className="row gray">
            <input
              type="text"
              value="AC"
              onClick={(e) => {
                setNum("");
              }}
            />
            <input
              type="text"
              value="DL"
              onClick={(e) => {
                setNum(num.slice(0, -1));
              }}
            />
            <input
              type="text"
              value="%"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              className="orange"
              value="/"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
          </div>
          <div className="row">
            <input
              type="text"
              value="7"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              value="8"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              value="9"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              value="*"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
          </div>
          <div className="row">
            <input
              type="text"
              value="4"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              value="5"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              value="6"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              className="orange"
              value="-"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
          </div>
          <div className="row">
            <input
              type="text"
              value="1"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              value="2"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              value="3"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              value="+"
              className="orange"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
          </div>
          <div className="row orangeee">
            <input
              type="text"
              value="0"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              value="."
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              type="text"
              value="="
              onClick={() => {
                setNum(eval(num));
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
