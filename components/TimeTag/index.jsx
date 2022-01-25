import React from "react";
import styled from "styled-components";
import { PoppinsNormalWhite16px, ValignTextMiddle } from "../../styledMixins";


function TimeTag() {
  return (
    <TimeTag1>
      <Address>08 Aug 21&nbsp;&nbsp; l&nbsp;&nbsp; 09:30 PM</Address>
    </TimeTag1>
  );
}

const TimeTag1 = styled.div`
  display: flex;
  padding: 0 16px;
  align-items: flex-start;
  min-width: 229px;
  background-color: var(--black-2);
  border-radius: 20.48px;
`;

const Address = styled.p`
  ${ValignTextMiddle}
  ${PoppinsNormalWhite16px}
            height: 24px;
  min-width: 197px;
  text-align: center;
  letter-spacing: 0.96px;
`;

export default TimeTag;
