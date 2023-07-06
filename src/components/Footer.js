import React from "react";
import Alert from "react-bootstrap/Alert";

function Header() {
  return (
    <footer className="footer">
      <Alert bg="info">
        <Alert.Link href="https://github.com/saveetha17">GitHub</Alert.Link>
        <Alert.Link href="">LinkedIn</Alert.Link>
      </Alert>
    </footer>
  );
}

export default Header;
