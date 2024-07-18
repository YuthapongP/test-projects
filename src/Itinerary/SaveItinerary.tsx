import React from "react";

export const SaveAsTextButton = ({ data }) => {
  const saveDataAsText = () => {
    const dataString = JSON.stringify(data, null, 2);
    const textBlob = new Blob([dataString], { type: "text/plain" });

    const url = URL.createObjectURL(textBlob);

    const downloader = document.createElement("a");
    downloader.download = "YourItinerary.txt";
    downloader.href = url;
    document.body.appendChild(downloader);
    downloader.click();
    document.body.removeChild(downloader);

    URL.revokeObjectURL(url);
  };

  return <button onClick={saveDataAsText}>Save as Text File</button>;
};
