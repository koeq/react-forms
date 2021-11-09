import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleEmail = e => {
    console.log(e.target);
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleTextarea = e => {
    setTextarea(e.target.value);
  };

  return (
    <div className="App">
      <div className="form">
        <form>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleEmail}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handlePassword}
            required
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <div style={{ marginTop: "3vh" }} className="tex-area">
        <textarea
          name="text-area"
          value={textarea}
          placeholder="Enter text here..."
          onChange={handleTextarea}
        ></textarea>
      </div>
      <div style={{ marginTop: "3vh" }} className="select"></div>
    </div>
  );
}

export default App;
