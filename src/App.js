import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = e => {
    console.log(e.target);
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };

  return (
    <div className="App">
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
  );
}

export default App;
