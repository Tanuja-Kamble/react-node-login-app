import React from "react";
import Login from "./Login";
import Welcome from "./Welcome";

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");

  return (
    <div>
      {isLoggedIn ? (
        <Welcome username={username} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;