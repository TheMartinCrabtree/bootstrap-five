import React from "react";
import { Carousel } from "./components/carousel";

const carouselData = [
  {
    id: "101",
    imgData: {
      srcData: "https://via.placeholder.com/800x400",
      altData: "First slide",
    },
    textData: {
      headingText: "First slide label",
      bodyText: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    linkData: {},
  },
  {
    id: "102",
    imgData: {
      srcData: "https://via.placeholder.com/800x400",
      altData: "Second slide",
    },
    textData: {
      headingText: "Second slide label",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    linkData: {},
  },
  {
    id: "103",
    imgData: {
      srcData: "https://via.placeholder.com/800x400",
      altData: "Third slide",
    },
    textData: {
      headingText: "Third slide label",
      bodyText:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    linkData: {},
  },
];

function App() {
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Carousel carouselData={carouselData} />
    </div>
  );
}

export default App;
