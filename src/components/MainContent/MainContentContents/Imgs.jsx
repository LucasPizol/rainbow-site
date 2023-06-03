import React, { useEffect, useState } from "react";

const images = [
  "https://i.ibb.co/P1BpkV8/350238045-989853022036059-7048192525351636862-n.jpg",
  "https://i.ibb.co/hC2Q6Xc/image.png",
  "https://i.ibb.co/HV3Z5xz/image.png",
  "https://i.ibb.co/dfWLHqW/image.png",
];

const Imgs = () => {
  const [content, setContent] = useState(images[0]);
  const [counter, setCounter] = useState(1);

  const changeContent = (i) => {
    setContent(images[i]);
  };

  setTimeout(() => {
    counter === images.length - 1 ? setCounter(0) : setCounter(counter + 1);
    changeContent(counter);
  }, 3000);

  return (
    <div className="main-content-img-div">
      <img className="main-content-img" src={content} />
      <div className="circle-1"></div>
      <div className="circle-2"></div>
    </div>
  );
};

export default Imgs;
