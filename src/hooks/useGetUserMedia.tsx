import { useEffect, useRef, useState } from "react";

export default function GetUserMedia() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState("");

  const boxStyles = {
    backgroundColor: "pink",
    width: "200px",
    height: "auto",
  };

  useEffect(() => {
    const playVideos = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };

    playVideos();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track: { stop: () => any }) => track.stop());
      }
    };
  }, []);

  const takePicture = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const context = canvasRef.current.getContext("2d");

      let canvasHeight;
      let canvasWidth;

      canvasRef.current.height = videoRef.current.videoWidth;
      canvasHeight = canvasRef.current.height;

      canvasRef.current.width = videoRef.current.videoHeight;
      canvasWidth = canvasRef.current.width;

      context.drawImage(videoRef.current, 0, 0, canvasHeight, canvasWidth);

      const dataURL =
        canvasRef.current && canvasRef.current.toDataURL("image/png");

      setPhoto(dataURL ?? "");
    }
  };

  return (
    <>
      <div style={boxStyles}>
        <video ref={videoRef} width="640" height="480" autoPlay>
          <track
            kind="captions"
            src="captions.vtt"
            srcLang="en"
            label="English captions"
            default
          />
        </video>
      </div>
      <button onClick={takePicture}>Take Picture</button>
      <div>
        <canvas ref={canvasRef} style={{ display: "none" }} />
        {photo && (
          <div>
            <h2>Captured Photo</h2>
            <img src={photo} alt="Captured" />
          </div>
        )}
      </div>
    </>
  );
}
