import React from "react";
import Alert from "react-bootstrap/Alert";

function Header() {
  return (
    <footer className="footer">
      <Alert bg="info">
        <Alert.Link href="https://github.com/saveetha17">GitHub</Alert.Link>
        <br />
        <Alert.Link href="https://linkedin.com/in/saveethakathiravan/">
          LinkedIn
        </Alert.Link>
      </Alert>
    </footer>
  );
}

export default Header;
