import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundimg, leftbutton, rightbutton}) {
  return (
    <Wrap bgImage={backgroundimg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>


      <Buttons>
        <Fade bottom>
          <ButtonGroup>

            <TopButton>
              {leftbutton}
            </TopButton>

            {rightbutton &&
              <BottomButton>
                {rightbutton}
              </BottomButton>
            }

          </ButtonGroup>
        </Fade>
        <DownArrow src='/images/down-arrow.svg' />
      </Buttons>
    </Wrap>



  )
}

const Buttons=styled.div``;

const DownArrow=styled.img`
   height: 40px;
   overflow-x: hidden;
   animation: animateDown infinite 1.5s;
`;

const ButtonGroup=styled.div`
   display: flex;
   @media (max-width: 768px){
    flex-direction: column;
   }
`;

const TopButton=styled.div`
   background-color: rgba(23, 26, 32, 0.8);
   height: 40px;
   width: 256px;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 6px;
   opacity: 0.85;
   text-transform: uppercase;
   font-size: 12px;
   cursor: pointer;
   margin-bottom: 12px;
   margin: 8px;
`;

const BottomButton=styled(TopButton)`
   opacity: 0.65;
   background-color: white;
   color: black;
`



const Wrap=styled.div`
   
   height: 100vh;
   width: 100vw;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-image: url('./images/model-3.jpg');
   display:flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   background-image: ${props => `url("/images/${props.bgImage}")`}
`;

const ItemText=styled.div`
  padding-top: 15vh;
  text-align: center;
`;
export default Section
