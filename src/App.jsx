import { useState } from "react";
import "./App.css";
import { Box, Grid, TextField, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleContactAdded = () => {
    setSearchTerm("");
  };

  return (
    <div className="App">
      <Box className="search-box">
        <TextField
          fullWidth
          label="이름으로 검색"
          placeholder="예: 김민수"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <ContactForm onAddContact={handleContactAdded} />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <ContactList searchTerm={searchTerm} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
