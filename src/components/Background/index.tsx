import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import "./Background.css";

export const getImage = async () => {
  try {
    const res = await axios.get(
      `https://source.unsplash.com/1920x1080/?landscape/sig=123`
    );
    return res.request.responseURL;
  } catch (err) {
    return { errorMessage: "network error" };
  }
};

function BackgroundImage() {
  const [imgURL, setImgURL] = useState<string>("");
  useLayoutEffect(() => {
    (async () => {
      try {
        const img = await getImage();
        setImgURL(img);
      } catch {
        setImgURL("./default-background.jpg");
      }
    })();
  }, []);

  return <img className="background_img" src={imgURL} alt="background" />;
}

export default BackgroundImage;
