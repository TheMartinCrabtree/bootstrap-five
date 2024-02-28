import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import CarouselItem from "./CarouselItem";

/*
const carouselData = [
  {
    imgData:{
      srcData: "https://via.placeholder.com/800x400",
      altData: "First slide"
    },
    textData:{
      headingText: "First slide label",
      bodyText: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    linkData:{}
  },
];
*/

const Carousel = (props) => {
  const { carouselData } = props;

  const _renderItems = (dataArr) => {
    return dataArr.map((cardData) => {
      const { imgData, textData, linkData } = cardData;
      return (
        <BootstrapCarousel.Item>
          {imgData && imgData.srcData && (
            <img
              className="d-block w-100"
              src={imgData.srcData}
              alt={imgData.altData}
            />
          )}
          <BootstrapCarousel.Caption>
            <h3>{textData.headingText}</h3>
            <p>{textData.bodyText}</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      );
    });
  };

  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <BootstrapCarousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />

        <BootstrapCarousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
        />

        <BootstrapCarousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};

export default Carousel;
