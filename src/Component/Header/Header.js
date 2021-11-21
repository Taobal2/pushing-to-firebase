import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdOutlineCreateNewFolder, MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigation>
          <Nav to="/">
            <Icon to="/Base">
              <AiFillHome />
            </Icon>
            <span>Home</span>
          </Nav>
          <Nav to="/">
            <Icon>
              <MdOutlineCreateNewFolder />
            </Icon>
            <span>Create</span>
          </Nav>
          <Nav to="/settings">
            <Icon>
              <AiFillSetting />
            </Icon>
            <span>Settings</span>
          </Nav>
        </Navigation>
        <Space />
        <Avatar>
          <Nav to="/">
            <Icon>
              <MdLogin />
            </Icon>
            <span>Login</span>
          </Nav>
        </Avatar>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Space = styled.div`
  flex: 1;
`;

const Avatar = styled.div`
  margin-right: 30px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
  width: 150px;
  border-radius: 3px;
  font-size: 19px;
  font-weight: bold;
  letter-spacing: 1px;
  justify-content: center;
  align-items: center;
  transition: all 400ms;
  margin-left: 20px;
  color: white;

  :hover {
    background-color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
  }
`;

const Icon = styled.div`
  margin: 0 10px;
  font-size: 20px;
  margin-top: 5px;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  margin: 0 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: coral;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
