import React from "react";

function importAllImages(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAllImages(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

export default images;
