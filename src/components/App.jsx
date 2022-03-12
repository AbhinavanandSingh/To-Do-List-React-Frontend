import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, setList] = useState([]);

  function addItem(note) {
    setList((prevList) => {
      return [...prevList, note];
    });
  }

  function deleteItem(id) {
    setList((prevList) => {
      return prevList.filter((listItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {list.map((listItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={listItem.title}
            content={listItem.content}
            onDelete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
