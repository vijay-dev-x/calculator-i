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
              // readonly
              style={{ textAlign: "center" }}
              type="button"
              value="AC"
              onClick={(e) => {
                setNum("");
              }}
            />
            <input
              type="button"
              value="DL"
              onClick={(e) => {
                setNum(num.slice(0, -1));
              }}
            />
            <input
              readonly
              type="button"
              value="%"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              className="orange"
              value="/"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
          </div>
          <div className="row">
            <input
              readonly
              type="button"
              value="7"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              value="8"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              value="9"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              value="*"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
          </div>
          <div className="row">
            <input
              readonly
              type="button"
              value="4"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              value="5"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              value="6"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              className="orange"
              value="-"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
          </div>
          <div className="row">
            <input
              readonly
              type="button"
              value="1"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              value="2"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              value="3"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              value="+"
              className="orange"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
          </div>
          <div className="row orangeee">
            <input
              readonly
              type="button"
              value="0"
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
              value="."
              onClick={(e) => {
                setNum(num + e.target.value);
              }}
            />
            <input
              readonly
              type="button"
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
