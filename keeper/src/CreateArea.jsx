import react, { useState } from "react";
function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function HandleChange(event) {
    const { name, value } = event.target;
    setnote((prevnote) => {
      return {
        ...prevnote,
        [name]: value
      };
    });
  }
  function SubmitNote(event) {
    props.onAdd(note);
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="title"
          onChange={HandleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={HandleChange}
          value={note.content}
          placeholder="Take a note ....."
          cols="30"
          rows="10"
        ></textarea>
      </form>
    </div>
  );
}
export default CreateArea;
