import React, { useState } from "react";
import { InputBase, Box, Button, styled, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
    &> *{
        
        margin: 20px 20px 20px 0;
        
    }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.6;
    width: 300px;
    max-width: 256px;
    padding-right 25px;
    
  }

  & > div > input[type="color"] {
        width: 30px;
        height: 30px;
        position: relative;
        bottom: -10px;
  }

  & > Span{
    font-size: 10px;
    position: relative;
    right: 40px;
  }
`;

const Error = styled(Typography)`
  background: red;
  color: #fff;
  width: 50%;
  padding: 10px;
`;

const defaultObj = {
  id: 0,
  title: "",
  details: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

interface ICreateNoteProps {
  addNotes: (note: NoteObject) => void;
}

export const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObject>(defaultObj);
  const [error, setError] = useState<string>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) {
      setError("");
    }

    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onCreateNote = () => {
    if (!note.title && !note.details) {
      setError("All Fields Are Mandatory");
      return;
    }
    addNotes({ ...note, id: uuid() });
    setNote(defaultObj);
  };

  const TITLE_LIMIT = 30;
  const DETAILS_LIMIT = 50;

  return (
    <>
      <Container>
        <InputBase
          placeholder="title"
          onChange={(e) => onValueChange(e)}
          name="title"
          value={note.title}
          inputProps={{
            maxLength: TITLE_LIMIT,
          }}
        />
        <Box component="span">
          {note.title.length} / {TITLE_LIMIT}
        </Box>
        <InputBase
          placeholder="Details"
          onChange={(e) => onValueChange(e)}
          name="details"
          value={note.details}
          inputProps={{
            maxLength: DETAILS_LIMIT,
          }}
        />
        <Box component="span">
          {note.details.length} / {DETAILS_LIMIT}
        </Box>
        <InputBase
          type="color"
          defaultValue="#f5f5f5"
          onChange={(e) => onValueChange(e)}
          name="color"
        />

        {error && <Error>{error}</Error>}
      </Container>
      <Button
        variant="outlined"
        sx={{ marginTop: "10px" }}
        onClick={() => onCreateNote()}
      >
        Create
      </Button>
    </>
  );
};
