
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import W1A1CueDetail from "./components/W1A1CueDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|w1-a1-cue-detail)">
          <W1A1CueDetail
            bannerImageProps={w1A1CueDetailData.bannerImageProps}
            creatorsProps={w1A1CueDetailData.creatorsProps}
            aboutProps={w1A1CueDetailData.aboutProps}
            floatingCTAProps={w1A1CueDetailData.floatingCTAProps}
            termsConditionsProps={w1A1CueDetailData.termsConditionsProps}
            footerProps={w1A1CueDetailData.footerProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const bannerImage1Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/ka-se-kitab--balbir-punj-1@1x.png",
};

const creatorsData = {
    title: "Creators",
};

const aboutData = {
    title: "About cue",
};

const bannerImage2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/ka-se-kitab--balbir-punj-1-1@1x.png",
    className: "banner-image-1",
};

const bannerCTA2Data = {
    className: "banner-cta-1",
};

const floatingCTAData = {
    bannerImageProps: bannerImage2Data,
    bannerCTAProps: bannerCTA2Data,
};

const termsConditionsData = {
    termsConditions: "Terms & Conditions",
};

const footerData = {
    joinCue: "Join cue",
    blog: "Blog",
    faqs: "FAQs",
    termsConditions: "Terms & Conditions",
    privacyPolicy: "Privacy policy",
    place: "Contact",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis donec nunc commodo quis interdum. Ultricies cras porta risus in vel lacinia tellus ligula augue. Ullamcorper egestas in enim gravida. At amet ornare convallis posuere sed porta. Eu molestie malesuada aliquet mi sed sed in. Turpis morbi viverra proin elit.",
    x2021CueAllRightsReserved: "© 2021 CUE. All Rights Reserved",
};

const w1A1CueDetailData = {
    bannerImageProps: bannerImage1Data,
    creatorsProps: creatorsData,
    aboutProps: aboutData,
    floatingCTAProps: floatingCTAData,
    termsConditionsProps: termsConditionsData,
    footerProps: footerData,
};

