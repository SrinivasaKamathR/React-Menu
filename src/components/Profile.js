import React, { useState, useEffect } from "react";

function Profile({ name }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let id = setInterval(() => {
      console.log("TIMER");
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h2>Profile Funational Component {name}</h2>
      <h3>Funtional Count {count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
}

export default Profile;
