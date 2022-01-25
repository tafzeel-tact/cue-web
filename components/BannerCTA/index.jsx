import React from "react";
import TimeTag from "../TimeTag";
import styled from "styled-components";
import { PoppinsNormalWhite24px, PoppinsNormalPinkSwan16px, ValignTextMiddle } from "../../styledMixins";


function BannerCTA(props) {
  const { className } = props;

  return (
    <BannerCTA1 className={`banner-cta ${className || ""}`}>
      <OverlapGroup className="overlap-group">
        <CardTitle className="card-title">
          <TimeTag />
          <Title className="title">Ka se Kitab 18- Balbeer Punj in conversation with Himanshu Bajpai</Title>
        </CardTitle>
        <Button
          className="button"
          src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/button@2x.svg"
        />
        <ShareInformation className="share-information">
          <Share className="share">
            <Title1 className="title-1">Share</Title1>
            <Icons className="icons">
              <Iconoirfacebook
                className="iconoirfacebook"
                src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/iconoir-facebook@2x.svg"
              />
              <Iconoirtwitter
                className="iconoirtwitter"
                src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/iconoir-twitter@2x.svg"
              />
              <Iconoirtwitter
                className="akar-iconslink-chain"
                src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/akar-icons-link-chain@2x.svg"
              />
            </Icons>
          </Share>
          <PoweredByCue className="powered-by-cue">
            <Title2 className="title-2">Powered by</Title2>
            <Icon
              className="icon"
              src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/icon@2x.svg"
            />
          </PoweredByCue>
        </ShareInformation>
      </OverlapGroup>
    </BannerCTA1>
  );
}

const BannerCTA1 = styled.div`
  position: absolute;
  height: 462px;
  top: 17px;
  left: 808px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 446px;

  &.banner-cta.banner-cta-1 {
    top: 264px;
    left: 34px;
  }
`;

const OverlapGroup = styled.div`
  width: 504px;
  margin-top: -23px;
  display: flex;
  flex-direction: column;
  padding: 50px 48px;
  align-items: center;
  min-height: 520px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/bg-card@2x.svg);
  background-size: 100% 100%;
`;

const CardTitle = styled.div`
  width: 397px;
  position: relative;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 148px;
`;

const Title = styled.h1`
  ${PoppinsNormalWhite24px}
  width: 397px;
  min-height: 100px;
  margin-top: 24px;
  text-align: center;
  letter-spacing: 1.44px;
  line-height: 31.9px;
`;

const Button = styled.img`
  width: 264px;
  height: 96px;
  margin-top: 14px;
  margin-right: 12px;
`;

const ShareInformation = styled.div`
  width: 157px;
  margin-top: 46px;
  margin-right: 10.1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 104px;
`;

const Share = styled.div`
  width: 139px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 56px;
`;

const Title1 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPinkSwan16px}
            width: 106px;
  height: 23px;
  text-align: center;
  letter-spacing: 0.96px;
`;

const Icons = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 139px;
`;

const Iconoirfacebook = styled.img`
  width: 26px;
  height: 25px;
`;

const Iconoirtwitter = styled.img`
  width: 26px;
  height: 25px;
  margin-left: 31px;
`;

const PoweredByCue = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  min-width: 157px;
`;

const Title2 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPinkSwan16px}
            width: 104px;
  height: 24px;
  letter-spacing: 0.96px;
`;

const Icon = styled.img`
  width: 46px;
  height: 16px;
  margin-left: 7px;
`;

const OverlapGroup1 = styled.div`
  .banner-cta.banner-cta-1 & {
    background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/bg-card-1@2x.svg);
  }
`;

export default BannerCTA;
