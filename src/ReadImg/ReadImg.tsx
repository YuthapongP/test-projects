// import React, { useState } from "react";

// export default function ReadImg() {
//   const [dataUrl, setDataUrl] = useState(null); // State to store image data URL

//   function submitHandle(e) {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       const url = event.target.result;
//       setDataUrl(url); // Set the data URL in state
//     };

//     reader.readAsDataURL(file); // Read file as Data URL
//   }

//   return (
//     <div>
//       {dataUrl && (
//         <img src={dataUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
//       )}

//       <form>
//         <label htmlFor="images">Choose an image:</label>
//         <input type="file" id="images" name="images" onChange={submitHandle} />
//       </form>
//     </div>
//   );
// }

// const fileInput = document.getElementById('upload');  // Assuming an input element with id="upload"

// fileInput.addEventListener('change', function(event) {
//   const file = event.target.files[0];  // Get the first selected file (assuming single file selection)
//   const reader = new FileReader();

//   reader.onload = function(e) {
//     const dataUrl = e.target.result;  // This is the data URL representation of the file contents
//     // Use the data URL as needed, e.g., display an image:
//     const img = document.createElement('img');
//     img.src = dataUrl;
//     document.body.appendChild(img);
//   };

//   // Read the file as data URL
//   reader.readAsDataURL(file);
// });

import React, { useState } from "react";

export default function ReadImg() {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleSubmit = (e) => {
    const files = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const urlPreview = event?.target.result;

      setPreviewUrl(urlPreview);
    };

    reader.readAsDataURL(files);
  };

  return (
    <div>
      <div>
        {previewUrl && <img width={"300px"} src={previewUrl} alt="images" />}
      </div>
      <form>
        <div className="hello">
          <input
            type="file"
            id="images"
            className="images"
            onChange={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
