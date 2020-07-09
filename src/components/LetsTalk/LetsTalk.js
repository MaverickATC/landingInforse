import React, { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
`;

const LogoImgBox = styled.img`
  position: absolute;
  top: 28px;
  left: 46px;
`;

const CrossIconBox = styled.a`
  position: absolute;
  top: 49px;
  right: 49px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainerWrapper = styled.div`
`;

const FormContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 150px auto 0;
  
  @media (max-width: 1024px) {
    width: 60%;
    margin: 50px auto;
  }

  @media (max-width: 768px) {
    width: 60%;
    margin: 50px auto;
  }
`;

const InputItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;

  &::after {
    position: absolute;
    bottom: -10px;
    content: '';
    width: 100%;
    height: 1px;
    background: #242424;
  }
`;

const InputItem = styled.input`
  width: calc(100% - 100px);
  font-size: 20px;
  line-height: 111.2%;
  letter-spacing: -0.1em;
  color: #333333;
  background: transparent;
  border: none;
  outline: none;

  &::placeholder {
    font-size: 18px;
    color: #828282;
  }
`;

const InputItemIcon = styled.img`
  margin: 0 30px 0 auto;
`;

const Button = styled.div`
  width: fit-content;
  font-size: 18px;
  line-height: 17px;
  text-transform: uppercase;
  color: #f2f2f2;
  text-align: center;
  padding: 23px 72px 20px;
  background: linear-gradient(90deg, #B71E32 0%, #202020 102%);
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  @media (max-width: 576px) {
    width: 100%;
    padding: 23px 0 20px;
  }
`;

const MediumTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: 30px;
  line-height: 83.7%;
  text-align: center;
  letter-spacing: -0.1em;
  color: #333333;
  margin: 0 auto;

  &::after {
    content: '';
    width: 195px;
    height: 4px;
    background: linear-gradient(90deg, #B71E32 0%, #202020 102%);
    border-radius: 15px;
    margin-top: 5px;
  }
`;

const BigTextBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Gotham Pro Bold';
  font-weight: bold;
  font-size: 60px;
  line-height: 83.7%;
  text-align: center;
  letter-spacing: -0.1em;
  color: #333333;
  margin-top: 20px;

  ${props => props.underline ? `
    &::after {
      content: '';
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #B71E32 0%, #202020 102%);
      border-radius: 15px;
      margin-top: 12px;
    }
  ` : ''}
`;

const LogoImg = require('../../assets/images/logo.png');
const crossIcon = require('../../assets/images/icon_cross.png');
const userIcon = require('../../assets/images/icon_user_black.svg');
const emailIcon = require('../../assets/images/icon_email_black.svg');

function LetsTalk() {
  const [isSuccessful, setIsSuccessful] = useState(false);

  return (
    <MainContainer className='lets_talk_page'>
      <LogoImgBox src={LogoImg} alt={'logo'} />
      <CrossIconBox href={'/'}>
        <img src={crossIcon} alt={'cross'} />
      </CrossIconBox>
      
      <ContentWrapper>
        {!isSuccessful ? 
          (<FormContainerWrapper>
            <MediumTextBox>Got a project in mind?</MediumTextBox>
            <BigTextBox>Get free expert advice</BigTextBox>

            <FormContainer>
              <InputItemContainer>
                <InputItem placeholder={'Username'} />
                <InputItemIcon src={userIcon} alt={'user'} />
              </InputItemContainer>

              <InputItemContainer>
                <InputItem placeholder={'Skype/Whatsapp/E-mail'} />
                <InputItemIcon src={emailIcon} alt={'email'} />
              </InputItemContainer>
              
              <Button onClick={() => setIsSuccessful(true)}>Let's talk</Button>
            </FormContainer>
          </FormContainerWrapper>) : (
            <BigTextBox underline style={{ width: 566 }}>We are going to contact you very soon.</BigTextBox>
          )}
      </ContentWrapper>
    </MainContainer>
  );
}

export default LetsTalk;
