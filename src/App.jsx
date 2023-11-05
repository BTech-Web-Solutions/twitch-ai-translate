import "./App.css";
import { useState, useEffect } from "react";
import { data } from "./data/countries";
import Dropdown from "./components/Dropdown";
import logo from "../public/2048.png";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [countries, setCountries] = useState(data);

  useEffect(() => {
    if (from && to) {
      console.log(`De ${from} para ${to}`);
    }
  }, [from, to]);

  useEffect(() => {}, []);

  // useEffect(() => {
  //   const apiFetch = async () => {
  //     const response = await fetch("https://flagcdn.com/en/codes.json")
  //       .then((res) => res.json())
  //       .then((json) => json);
  //     setCountries(response);
  //   };

  //   apiFetch();
  // }, []);

  return (
    <>
      <div className="card">
        <img src={logo} alt="" width={84} />
        <h1>Live Chat Translator</h1>
        <p>Talk to your favorite streamer in their own language!</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          <div className="dropdown-container">
            <span>From:</span>

            <Dropdown
              fromOrTo="from"
              value={from}
              setFrom={setFrom}
              apiCountries={countries}
            />
          </div>

          <div className="dropdown-container">
            <span>To:</span>

            <Dropdown
              fromOrTo="to"
              value={to}
              setTo={setTo}
              apiCountries={countries}
            />
          </div>
        </div>

        {from && to ? (
          <button
            onClick={() => {
              setIsTranslating(!isTranslating);
            }}
          >
            {isTranslating ? "Stop translating" : "Start translating"}
          </button>
        ) : (
          <button disabled>Start translating</button>
        )}
      </div>
    </>
  );
}

export default App;
