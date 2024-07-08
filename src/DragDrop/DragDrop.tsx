import { ChangeEvent, DragEvent, useRef, useState } from "react";
import "./DragDrop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import cats from "../assets/catFoot.png";

const FileUploader = () => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [url, setUrl] = useState<string[]>([]);
  const [collectedUrls, setCollectedUrls] = useState<string[]>([]);
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imgUrl = e?.target?.result as string;

        setUrl((prevUrls) => [...prevUrls, imgUrl]);
      };

      reader.readAsDataURL(file); // Read file as data URL (base64)
    });
  };

  const handleDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDrop = (event: {
    preventDefault: () => void;
    dataTransfer: { files: any };
  }) => {
    console.log("dropped!");
    event.preventDefault();
    setDragging(false);

    const files = event.dataTransfer.files;
    console.log(files, "files");
    const urlsArray: string[] = [];

    for (let index = 0; index < files.length; index++) {
      const reader = new FileReader();
      const file = files[index];

      reader.onload = (e) => {
        const imgUrl = e.target.result;
        urlsArray.push(imgUrl);

        // Check if all files have been processed
        if (urlsArray.length === files.length) {
          setUrl((prevUrls) => [...prevUrls, ...urlsArray]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (idx: number) => {
    setUrl((prev) => prev.filter((_, index) => index !== idx));
  };

  const handleDragStart = (event: DragEvent<HTMLDivElement>, imgUrl: never) => {
    event.stopPropagation();
    const img = new Image();

    img.width = 10; // Set the width of the custom image
    img.height = 10;

    img.src = "../src/assets/catFoot.png";

    // img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    event.dataTransfer.setDragImage(img, 2, 3);
    // console.log(imgUrl);
    event.dataTransfer.setData("text/plain", imgUrl);
  };

  const handleDropOnCollector = (event: {
    preventDefault: () => void;
    dataTransfer: { getData: (arg0: string) => any };
  }) => {
    event.preventDefault();
    const imgUrl = event.dataTransfer.getData("text/plain");
    setCollectedUrls((prev) => [...prev, imgUrl]);
    setUrl((prev) => {
      const toRemove = prev.filter((item) => item !== imgUrl);

      return [...toRemove];
    });
  };

  const handleDropOnCollector2 = (event: {
    preventDefault: () => void;
    dataTransfer: { getData: (arg0: string) => any };
  }) => {
    event.preventDefault();
    const imgUrl = event.dataTransfer.getData("text/plain");
    setUrl((prev) => [...prev, imgUrl]);
    setCollectedUrls((prev) => {
      const toRemove = prev.filter((item) => item !== imgUrl);

      return [...toRemove];
    });
  };

  const giveBackElement = (imgUrl: string) => {
    setUrl((prev) => {
      return [...prev, imgUrl];
    });

    setCollectedUrls((prev) => {
      const toRemove = prev.filter((item) => item !== imgUrl);
      return [...toRemove];
    });
  };

  return (
    <>
      <div
        className={`file-uploader ${dragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <div className="icon-container">
          <FontAwesomeIcon icon={faCloud} className="icon" />
        </div>
        <input
          type="file"
          id="fileInput"
          multiple
          style={{ display: "none" }}
          ref={inputRef}
          onChange={handleFileInputChange}
        />
      </div>

      <div className="image-container">
        {url.map((imgUrl, index) => (
          <div
            key={index}
            className="image-box"
            draggable
            onDragStart={(e) => handleDragStart(e, imgUrl)}
            onClick={() => handleRemove(imgUrl)}
          >
            <img src={imgUrl} alt={`Image ${index}`} width="100%" />
          </div>
        ))}
      </div>

      <div
        className="drop-zone"
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDropOnCollector2}
      >
        Drop here to return images
      </div>

      <div
        className="drop-zone"
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDropOnCollector}
      >
        Drop here to collect
      </div>

      <div className="image-container">
        {collectedUrls.map((imgUrl: string, index: number) => (
          <div
            key={index as unknown as number}
            className="image-box"
            draggable
            onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
              handleDragStart(e, imgUrl)
            }
            // onDragEnter={() => handleDragEnter}
            // onDragLeave={() => handleDragLeave}
            // onDragOver={() => handleDragOver}
            onDrop={(e) => handleDrop}
            // onClick={() => giveBackElement(imgUrl)}
          >
            <img src={imgUrl} alt={`Collected img ${index}`} width="100px" />
          </div>
        ))}
      </div>
    </>
  );
};

export default FileUploader;
