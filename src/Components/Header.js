import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/car/carSlice';
function Header() {

  const [burgerStatus, setBurgerStatus]=useState(false);
  const cars=useSelector(selectCars)
  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt=''/>
      </a>

      <Menu>
        {cars && cars.map((car, index)=>(
          <a key={index} href='#'>{car}</a>
        ))}
      </Menu>

      <RightMenu>
         <a href='#' >Shop</a>
         <a href='#' >Account</a>
         <a href='#' onClick={()=>setBurgerStatus(true)} >Menu</a>

      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Fleet</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Commercial Energy</a></li>

      </BurgerNav>
  

    </Container>
  )
}
const CloseWrapper=styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose=styled(CloseIcon)``;

const BurgerNav=styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   background: white;
   width: 300px;
   z-index: 16;
   list-style: none;
   padding: 20px;
   display: flex;
   flex-direction: column;
   text-align: start;
   transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
   transition: transform 0.2s ease-in;
   li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a{
      font-weight: 600;
    }
   }
`;

const RightMenu=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }


`;

const Container=styled.div`
   z-index: 1;
   min-height: 60px;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
   top: 0;
   left: 0;
   right: 0;
`;

const Menu=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

export default Header
