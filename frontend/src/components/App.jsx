import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState(undefined);

  const addComment = async (newComment) => {
    const options = {
      url: "/addComment",
      method: "POST",
      data: {
        comment: newComment.content
      }
    }
    const { data } = await axios(options)
    getComments()
    return data
  }

  const getComments = async () => {
    const options = {
      url: "/getComments",
      method: "GET"
    }
    const { data } = await axios(options)
    setNotes(data ? data : [])
  }

  if(!notes) {
    getComments()
  }

  return (
    <div>
      <Header />
      <div className="container" >
        <CreateArea onAdd={addComment} />
        <div>
          {notes && notes.length ?
            notes.map((noteItem, index) => {
              return (
                <Note
                  key={index + 1}
                  id={index + 1}
                  comment={noteItem.comment}
                />
              );
            })
            : "Não há comentários cadastrados"
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

