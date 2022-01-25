import React from "react";
import Menu from "../Menu";
import BannerImage from "../BannerImage";
import BannerCTA from "../BannerCTA";
import Creators from "../Creators";
import About from "../About";
import FloatingCTA from "../FloatingCTA";
import TermsConditions from "../TermsConditions";
import Footer from "../Footer";
import styled from "styled-components";
import "./W1A1CueDetail.css";

function W1A1CueDetail(props) {
  const { bannerImageProps, creatorsProps, aboutProps, floatingCTAProps, termsConditionsProps, footerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="w1-a1-cue-detail screen">
        <FlexCol>
          <Menu />
          <BannerContainer>
            <BannerImage src={bannerImageProps.src} />
            <BannerCTA />
          </BannerContainer>
        </FlexCol>
        <FlexRow>
          <FlexCol1>
            <Creators title={creatorsProps.title} />
            <About title={aboutProps.title} />
          </FlexCol1>
          <FloatingCTA
            bannerImageProps={floatingCTAProps.bannerImageProps}
            bannerCTAProps={floatingCTAProps.bannerCTAProps}
          />
        </FlexRow>
        <FlexCol2>
          <TermsConditions termsConditions={termsConditionsProps.termsConditions} />
          <Footer {...footerProps} />
        </FlexCol2>
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 1680px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 604px;
`;

const BannerContainer = styled.div`
  width: 1254px;
  height: 496px;
  position: relative;
  margin-top: 24px;
`;

const FlexRow = styled.div`
  height: 795px;
  position: relative;
  margin-top: 80px;
  margin-left: 28px;
  display: flex;
  align-items: flex-end;
  min-width: 1294px;
`;

const FlexCol1 = styled.div`
  width: 719px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 795px;
`;

const FlexCol2 = styled.div`
  width: 1680px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 474px;
`;

export default W1A1CueDetail;
