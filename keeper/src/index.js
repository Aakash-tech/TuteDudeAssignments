import react from "react";
import reactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./styles.css";
import notes from "./notes";

import CreateArea from "./CreateArea";
function createNote(notes) {
  return (
    <Note key={notes.key} title={notes.title} content={notes.content}></Note>
  );
}
reactDOM.render(
  <div>
    <Header></Header>
    <CreateArea />
    {notes.map(createNote)}
    <Footer />
  </div>,
  document.getElementById("root")
);
