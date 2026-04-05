import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import usePhonebookStore from "../stores/usePhonebookStore";

const ContactList = ({ searchTerm }) => {
  const { phonebook } = usePhonebookStore();

  const filteredPhonebook = phonebook.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  return (
    <Paper className="panel-card list-card" elevation={0}>
      <Box className="list-header">
        <Typography variant="h5" className="section-title">
          연락처 목록
        </Typography>
        <Typography className="section-description">
          {phonebook.length}명 중 {filteredPhonebook.length}명 표시 중
        </Typography>
      </Box>

      {filteredPhonebook.length === 0 ? (
        <Box className="empty-state">
          <Typography>
            {phonebook.length === 0
              ? "아직 등록된 연락처가 없습니다."
              : "검색 결과가 없습니다."}
          </Typography>
        </Box>
      ) : (
        <Box className="contact-items">
          {filteredPhonebook.map((contact, index) => (
            <Box
              key={`${contact.name}-${contact.phone}-${index}`}
              className="contact-item"
            >
              <Box className="contact-avatar">{contact.name.slice(0, 1)}</Box>
              <Box className="contact-info">
                <Typography className="contact-name">{contact.name}</Typography>
                <Typography className="contact-phone">
                  {contact.phone}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default ContactList;
