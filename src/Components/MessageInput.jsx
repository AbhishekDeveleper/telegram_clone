import React from "react";
import { TextField, Button } from "@mui/material";

const MessageInput = () => {
  const handleSendMessage = () => {
    // Logic to send a message
  };

  return (
    <div className="message-input">
      <TextField variant="outlined" fullWidth placeholder="Type a message..." />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
