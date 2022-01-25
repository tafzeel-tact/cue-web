import React from "react";
import styled from "styled-components";


function Menu() {
  return (
    <Menu1>
      <Logo src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/logo-1@2x.svg" />
      <Group38186>
        <Googleplaya1b4ed6211c913 src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/googleplay-a1b4ed6211c9--1--3@2x.svg" />
        <Appstore6f955d329ad713 src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/appstore-6f955d329ad7--1--3@2x.svg" />
      </Group38186>
      <Support src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/support@2x.svg" />
    </Menu1>
  );
}

const Menu1 = styled.div`
  height: 84px;
  display: flex;
  padding: 0 211px;
  align-items: center;
  min-width: 1680px;
  background-color: #00000033;
`;

const Logo = styled.img`
  width: 100px;
  height: 35px;
  margin-top: 1px;
`;

const Group38186 = styled.div`
  margin-left: 720px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 374px;
`;

const Googleplaya1b4ed6211c913 = styled.img`
  width: 176px;
  height: 52px;
`;

const Appstore6f955d329ad713 = styled.img`
  width: 176px;
  height: 52px;
  margin-left: 23px;
`;

const Support = styled.img`
  width: 25px;
  height: 24px;
  margin-left: 39px;
  margin-top: 6px;
`;

export default Menu;
