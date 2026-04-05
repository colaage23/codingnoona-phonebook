import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import usePhonebookStore from "../stores/usePhonebookStore";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const { addContact } = usePhonebookStore();

  const handleAddContact = () => {
    if (name.trim() === "" || phone.trim() === "") {
      alert("이름과 전화번호를 입력해주세요.");
      return;
    }
    addContact(name, phone);
    setName("");
    setPhone("");
    onAddContact?.();
  };

  return (
    <Paper className="panel-card form-card" elevation={0}>
      <Typography variant="h5" className="section-title">
        새 연락처 추가
      </Typography>
      <Typography className="section-description">
        이름과 전화번호를 입력해 연락처를 저장하세요.
      </Typography>

      <Box display="flex" flexDirection="column" gap={2.2} mt={3}>
        <TextField
          id="name"
          fullWidth
          label="이름"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="phone"
          fullWidth
          label="전화번호"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button size="large" variant="contained" onClick={handleAddContact}>
          연락처 추가
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactForm;
