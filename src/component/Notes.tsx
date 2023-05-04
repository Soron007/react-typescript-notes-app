import React from "react";
import { Box, Typography } from "@mui/material";
import { Note } from "./Note";
import { NoteObject } from "../models/note";

interface INotesProps {
  notes: NoteObject[];
  deleteNote: (id: number) => void;
}

export const Notes: React.FC<INotesProps> = ({ notes, deleteNote }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          mt: 5,
        }}
      >
        Notes
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </Box>
    </Box>
  );
};
