import React from "react";
import BannerImage from "../BannerImage";
import BannerCTA from "../BannerCTA";
import styled from "styled-components";


function FloatingCTA(props) {
  const { bannerImageProps, bannerCTAProps } = props;

  return (
    <FloatingCTA1>
      <BannerContainer>
        <BannerImage src={bannerImageProps.src} className={bannerImageProps.className} />
        <BannerCTA className={bannerCTAProps.className} />
      </BannerContainer>
    </FloatingCTA1>
  );
}

const FloatingCTA1 = styled.div`
  margin-left: 61px;
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  min-width: 514px;
`;

const BannerContainer = styled.div`
  width: 514px;
  height: 726px;
  position: relative;
`;

export default FloatingCTA;
