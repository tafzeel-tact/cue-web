import React from "react";
import styled from "styled-components";


function BannerImage(props) {
  const { src, className } = props;

  return (
    <BannerImage1
      className={`banner-image ${className || ""}`}
      style={{ backgroundImage: `url(${src})` }}
    ></BannerImage1>
  );
}

const BannerImage1 = styled.div`
  position: absolute;
  width: 882px;
  height: 496px;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;

  &.banner-image.banner-image-1 {
    width: 514px;
    height: 289px;
  }
`;

export default BannerImage;
