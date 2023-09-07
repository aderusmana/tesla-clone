import React from "react";
import { styled } from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <div className="App">
      <Container>
        <Section
          title="Model S"
          description="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg="model-s.jpg"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg="model-y.jpg"
        />
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg="model-x.jpg"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg="model-3.jpg"
        />
        <Section
          title="Solar Panels"
          description="Schedule a Virtual Consultation"
          leftBtn="Order Now"
          rightBtn="Learn More"
          backgroundImg="solar-panel.jpg"
        />
        <Section
          title="Accessories"
          description=""
          leftBtn="Shop Now"
          rightBtn=""
          backgroundImg="accessories.jpg"
        />
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
