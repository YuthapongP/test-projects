import React, { useState } from "react";

const ReadAsText = () => {
  const [binaryContent, setBinaryContent] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      setBinaryContent(event.target.result);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {binaryContent && (
        <pre style={{ whiteSpace: "pre-wrap" }}>{binaryContent}</pre>
      )}
    </div>
  );
};

export default ReadAsText;

// import React, { useState } from "react";

// const FileReaderExampleBinary = () => {
//   const [binaryContent, setBinaryContent] = useState("");

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();

//     reader.onload = (event) => {
//       setBinaryContent(event.target.result);
//     };

//     reader.readAsBinaryString(file);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       {binaryContent && (
//         <pre style={{ whiteSpace: "pre-wrap" }}>{binaryContent}</pre>
//       )}
//     </div>
//   );
// };

// export default FileReaderExampleBinary;

