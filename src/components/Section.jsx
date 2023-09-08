import React from "react";
import { Fade } from "react-awesome-reveal";
import { styled } from "styled-components";

const Section = ({ title, description, leftBtn, rightBtn, backgroundImg }) => {
  return (
    <Wrap backgroundimg={backgroundImg}>
      <Fade triggerOnce duration={1000} direction="down">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade triggerOnce duration={1000} direction="down">
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtn}</LeftButton>
            {rightBtn && <RightButton>{rightBtn}</RightButton>}
          </ButtonGroup>
          <DownArrow src="./images/down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/${(props) => props.backgroundimg}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  &:hover {
    background-color: rgba(60, 60, 60, 0.8);
  }
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin-bottom: 40px;
`;

const Buttons = styled.div``;
