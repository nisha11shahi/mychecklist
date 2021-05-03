import React from "react";

const Footer = () => {
  const styles = {
    root: {
      backgroundColor: "#333",
      color: "#fff",
      padding: 10,
      position: "fixed",
      bottom: 0,
      width: "100%",
      textAlign: "right",
    },
  };

  return <div style={styles.root}>Copyright &copy; Nisha Shahi 2021</div>;
};

export default Footer;
