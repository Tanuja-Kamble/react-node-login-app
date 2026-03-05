import React from "react";

function Welcome({ username }) {

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome {username} 🎉</h1>
      <p>You have successfully logged in.</p>
    </div>
  );

}

export default Welcome;
