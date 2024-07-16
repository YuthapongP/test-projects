import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Dropzone from "react-dropzone";
import { Button } from "@chakra-ui/react";

const ImageCropper = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);
  const [listCroppedImages, setListCroppedImages] = useState<string[]>([]);

  const onDrop = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  };

  const storeCroppedImage = (croppedImg) => {
    setListCroppedImages((prev) => [...prev, croppedImg]);
    console.log("Cropped Image Stored:", croppedImg);
  };

  const cropImage = () => {
    const cropper = cropperRef.current.cropper;
    const croppedImg = cropper.getCroppedCanvas().toDataURL();
    setCroppedImage(croppedImg);
    storeCroppedImage(croppedImg); // Store the cropped image
    setImage(null); // Clear the state after storing the image
    setCroppedImage(null); // Clear the cropped image state
  };

  return (
    <div>
      <Dropzone onDrop={onDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            style={{
              border: "2px dashed #ccc",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <input {...getInputProps()} />
            {image ? (
              <p>Drag and drop or click to replace image</p>
            ) : (
              <p>Drag and drop or click to upload image</p>
            )}
          </div>
        )}
      </Dropzone>
      {image && (
        <div>
          <Cropper
            ref={cropperRef}
            src={image}
            style={{ height: 400, width: "100%" }}
            // Cropper.js options
            aspectRatio={16 / 9}
            guides={false}
          />
          <Button onClick={cropImage} colorScheme="blue" mt={4}>
            Crop Image
          </Button>
        </div>
      )}
      <div>
        {listCroppedImages.map((img) => (
          <img src={img} width={"100px"} alt="crop" />
        ))}
      </div>
    </div>
  );
};

export default ImageCropper;
