import React, { useState } from "react";

function CreateArea(props) {
  const [create, setCreate] = useState({
    title: "",
    content: ""
  });

  function handleCreate(event) {
    const { name, value } = event.target;

    setCreate((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }

  function onSubmit(event) {
    props.onAdd(create);
    setCreate({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleCreate}
          name="title"
          value={create.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleCreate}
          name="content"
          value={create.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
