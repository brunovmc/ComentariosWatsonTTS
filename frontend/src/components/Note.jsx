import React from "react";
import HearingIcon from "@material-ui/icons/Hearing";
import axios from "axios";

function Note(props) {
  const playAudio = async (text, id) => {
    const response = await axios({
      url: "http://localhost:3000/watsonTTS",
      method:"POST",
      data: {
        text: text,
        id: id
      }
    })
    window.audio = new Audio();
    window.audio.src = `${id}.wav`;
    window.audio.play();
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.comment}</p>
      <button onClick={() => playAudio(props.comment, props.id)}>
        <HearingIcon />
      </button>
    </div>
  );
}

export default Note;
