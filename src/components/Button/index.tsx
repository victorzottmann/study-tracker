import React from "react";

const Button = () => {
  const isActive = false;

  const styles = {
    backgroundColor: isActive ? "green" : "red",
  };

  return <button style={styles}>Button</button>;
};

export default Button;
