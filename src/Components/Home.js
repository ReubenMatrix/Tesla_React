import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home(props) {
  return (
    <Container>
      <Section title="Model S" description="Order Online For Touchless Delivery" backgroundimg="model-s.jpg" leftbutton="Custom Order" rightbutton="existing inventory"/>
      <Section title="Model 3" description="Order Online For Touchless Delivery" backgroundimg="model-3.jpg" leftbutton="Custom Order" rightbutton="existing inventory"/>
      <Section title="Model X" description="Order Online For Touchless Delivery" backgroundimg="model-x.jpg" leftbutton="Custom Order" rightbutton="existing inventory"/>
      <Section title="Model Y" description="Order Online For Touchless Delivery" backgroundimg="model-y.jpg" leftbutton="Custom Order" rightbutton="existing inventory"/>
      <Section title="Lowest Cost Solar Panels in America" description="Money-back guarantee" backgroundimg="solar-panel.jpg" leftbutton="Order now" rightbutton="Learn more"/>
      <Section title="Accessories" description="" backgroundimg="accessories.jpg" leftbutton="Shop Now"/>
    </Container>
  )
};

const Container = styled.div`
   height: 100vh;
`;

export default Home;

