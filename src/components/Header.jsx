import React, { useState } from "react";
import { styled } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const toggleBurgerMenu = () => {
    setIsOpenBurger(!isOpenBurger);
  };

  const closeBurgerMenu = () => {
    setIsOpenBurger(false);
  };

  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <div>
      <Container>
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <Menu>
          {cars.map((car) => (
            <a key={car} href={`${car}`}>
              {car}
            </a>
          ))}
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>

          <CustomMenu onClick={toggleBurgerMenu} />
        </RightMenu>
        <BurgerNav show={isOpenBurger}>
          <CloseWrapper>
            <CustomClose onClick={closeBurgerMenu} />
          </CloseWrapper>
          <>
            {cars.map((car) => (
              <a key={car} href="#">
                <li>
                  <a href={`${car}`}>{car}</a>
                </li>
              </a>
            ))}

            <li>
              <a href="#">Used Inventory</a>
            </li>
            <li>
              <a href="#">Trade - In</a>
            </li>
            <li>
              <a href="#">CyberTruck</a>
            </li>
            <li>
              <a href="#">Roadster</a>
            </li>
            <li>
              <a href="#">Semi</a>
            </li>
            <li>
              <a href="#">Charging</a>
            </li>
            <li>
              <a href="#">Utilities</a>
            </li>
            <li>
              <a href="#">Existing Inventory</a>
            </li>
          </>
        </BurgerNav>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(GiHamburgerMenu)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.show ? "0" : "-300px")};
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: right 0.5s ease; /* Add a transition for animation */
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(MdClose)`
  font-size: 20px;
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
