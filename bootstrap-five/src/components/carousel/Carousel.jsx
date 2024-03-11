import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";

const Wrapper = styled.div`
  max-width: 1920px;
  max-height: 1080px;
`;

const Carousel = (props) => {
  const { carouselData } = props;

  const _renderItems = (dataArr) => {
    return dataArr.map((cardData) => {
      const { imgData, textData, linkData, id } = cardData;
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
    <Wrapper>
      <BootstrapCarousel>
        {carouselData && _renderItems(carouselData)}
      </BootstrapCarousel>
    </Wrapper>
  );
};

export default Carousel;
