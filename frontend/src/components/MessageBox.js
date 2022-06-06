import React from "react";
import { Alert } from "react-bootstrap";

function MessageBox(props) {
    return (
      <Alert key="danger}" variant="danger">
      {props.children}!
      </Alert>
    );
  }
  
  export default MessageBox;