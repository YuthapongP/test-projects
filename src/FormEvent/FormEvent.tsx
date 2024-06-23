import React, { useState } from "react";

export default function FormEvent() {
  const [textSubstring, setTextSubstring] = useState("");

  const handleSelect = (e) => {
    const textArea = e.target;
    const newText = textArea.value.substring(
      textArea.selectionStart,
      textArea.selectionEnd
    );

    setTextSubstring(newText);
  };

  //   const handleCopy = (event) => {
  //     setTimeout(() => {
  //       const _text = event.clipboardData.getData("text");

  //       console.log(_text);
  //     }, 1000);
  //   };

  const handleCopy = (event) => {
    const copiedText = event.clipboardData.getData("text");
    if (copiedText) {
      console.log("Copied text:", copiedText);
    } else {
      console.log("No text copied");
    }
  };
  return (
    <div>
      <div onCopy={handleCopy} id="nicky">
        <div>Try copying this text by selecting and using Ctrl+C / Cmd+C.</div>
      </div>
      {/* <input type="text" name="firstName" id="firstName" />
      <textarea
        name="description"
        id="description"
        cols={30}
        rows={10}
        onSelect={handleSelect}
      ></textarea>
      <div>{textSubstring && <div>{textSubstring}</div>}</div> */}
    </div>
  );
}
