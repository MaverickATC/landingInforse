import React, { useRef, useState } from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';
import Header from '../Header/Header';
import { Modal } from '../Modal/Modal';

const BannerSection = styled.div`
  position: relative;
  display: flex;
  max-width: 1200px;
  margin: 80px auto 0;
  padding-top: 120px;

  @media (max-width: 1200px) {
    width: calc(100% - 100px);
    margin: 80px 50px 0;
    padding-top: 80px;
  }

  @media (max-width: 1024px) {
    width: calc(100% - 100px);
    margin: 80px 50px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding-top: 0;
    margin: 80px auto 0;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;

    & > * {
      text-align: center;
    }
  }
`;

const BannerBackgroundImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 45vw;
`;

const BannerPhoneImg1 = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 1200px) {
    width: 170px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const BannerPhoneImg2 = styled.img`
  position: absolute;
  top: 200px;
  right: 200px;

  @media (max-width: 1200px) {
    width: 210px;
    top: 150px;
    right: 100px;
  }

  @media (max-width: 768px) {
    position: initial;
    width: 45%;
    margin: 50px auto;
  }
`;

const BannerTextBig = styled.div`
  font-family: 'Gotham Pro Bold';
  font-weight: bold;
  font-size: 80px;
  letter-spacing: -0.1em;
  color: #242424;

  @media (max-width: 1200px) {
    font-size: 66px;
  }

  @media (max-width: 768px) {
    font-size: 45px;
  }
`;

const BannerTextNormal = styled.div`
  font-size: 30px;
  line-height: 113.7%;
  letter-spacing: -0.1em;
  color: #000000;
  margin: 30px 0 23px;

  @media (max-width: 1200px) {
    font-size: 24px;
  }
`;

const ModalButton = styled.button`
  width: fit-content;
  font-size: 18px;
  line-height: 17px;
  text-transform: uppercase;
  text-decoration: none;
  color: #f2f2f2;
  padding: 23px 72px 20px;
  background: linear-gradient(90deg, #B71E32 0%, #202020 102%);
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const SendButton = styled.button`
width: fit-content;
  font-size: 18px;
  line-height: 17px;
  text-transform: uppercase;
  text-decoration: none;
  color: #f2f2f2;
  padding: 23px 72px 20px;
  background: linear-gradient(90deg, #B71E32 0%, #202020 102%);
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CaptionText = styled.h1`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Gotham Pro Bold';
  font-size: 60px;
  font-weight: bold;
  line-height: 83.7%;
  letter-spacing: -0.1em;
  color: #242424;
  text-align: center;
  ${props => props.alignLeft ? `text-align: left;` : ''}
  margin: 45px auto;
  z-index: 2;
  ${props => props.underline ? `
    &::after {
      content: '';
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #B71E32 0%, #202020 102%);
      border-radius: 15px;
    }
  ` : ''}

  @media (max-width: 768px) {
    font-size: 45px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const BoxTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 83.7%;
  letter-spacing: -0.1em;
  text-align: center;
  color: #242424;
  padding: 16px 0 10px;
`;

const BoxDespText = styled.div`
  width: 83%;
  font-size: 20px;
  line-height: 111.2%;
  text-align: center;
  letter-spacing: -0.1em;
  color: #000000;
`;

const VideoBackground = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: initial;
  }
`;

const PlayerButton = styled.div`
  width: 158px;
  height: 158px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(31, 31, 31, 0.3) 32.32%, rgba(183, 30, 50, 0.3) 74.62%), #B71E32;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;

    img {
      width: 30px;
      margin-left: 8px;
    }
  }
`;

const BackgroundEllipse2 = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
`;

const BackgroundEllipse3 = styled.div`
  position: absolute;
  top: 275px;
  right: 200px;

  @media (max-width: 768px) {
    top: 300px;
    right: 0px;
  }
`;

const BackgroundEllipse4 = styled.div`
  position: absolute;
  top: 200px;
  right: 0;
`;

const SliderItem = styled.div`
  outline: none;
  display: flex;
  justify-content: center;

  img {
    width: 380px;
    margin: 0 auto;

    @media (max-width: 1440px) {
      width: 320px;
    }

    @media (max-width: 1200px) {
      width: 280px;
    }

    @media (max-width: 1024px) {
      width: 300px;
    }

    @media (max-width: 768px) {
      width: 60%;
    }
  }
`;

const SlideNavigator = styled.div`
  display: flex;
  align-items: center;
  padding-left: calc((100% - 1200px) / 2);
  margin-top: 50px;
  z-index: 1;

  @media (max-width: 1200px) {
    padidng: 0;
    margin: 50px 0 0 50px;
  }

  @media (max-width: 768px) {
    margin: 50px auto;
  }
`;

const PrevButton = styled.div`
  transform: rotate(180deg);
  margin: -4px 10px 0 0;
  cursor: pointer;
`;

const NextButton = styled.div`
  margin-top: 4px;
  cursor: pointer;
`;

const BoxAvatarImg = styled.img`
  margin-top: -50px;
`;

const BoxNameText = styled.div`
  font-size: 30px;
  font-weight: bold;
  line-height: 111.2%;
  text-align: center;
  letter-spacing: -0.1em;
  color: #242424;
  padding-top: 16px;
`;

const BoxRoleText = styled.div`
  font-size: 20px;
  line-height: 111.2%;
  text-align: center;
  letter-spacing: -0.1em;
  color: #000000;
`;

const BoxQuoteText = styled.div`
  font-size: 60px;
  font-weight: bold;
  line-height: 83.7%;
  letter-spacing: -0.1em;
  color: #B71E32;
  padding-top: 28px;
`;

const BoxText = styled.div`
  font-size: 20px;
  line-height: 111.2%;
  text-align: center;
  letter-spacing: -0.1em;
  color: #242424;
  padding: 0 50px;
`;

const FormContainerWrapper = styled.div`
  @media (max-width: 1024px) {
    width: 80%;
    margin: 50px auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 50px auto;
  }
`;

const GetFreeFormBackground = styled.img`
  width: calc(100% - 590px);
  height: auto;
  margin-left: auto;

  @media (max-width: 1200px) {
    width: calc(100% - 450px);
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 50vw;
  }
`;

const MediumText = styled.div`
  font-size: 30px;
  line-height: 83.7%;
  text-align: center;
  letter-spacing: -0.1em;
  color: #242424;
  margin-bottom: 15px;
`;

const Row = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FormContainer = styled.form`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 50px;
  
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
  color: #000000;
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

const LinksBox = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -100px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const bannerBgImg = require('../../assets/images/banner_background.png');
const bannerPhoneImg1 = require('../../assets/images/banner_phone_bg1.png');
const bannerPhoneImg2 = require('../../assets/images/banner_phone_bg2.png');
const videoBgImg = require('../../assets/images/video_background.png');
const videoPlayerIcon = require('../../assets/images/play.svg');
const getFreeFormBgImg = require('../../assets/images/get_free_form_bg.png');
const userIcon = require('../../assets/images/icon_user.svg');
const emailIcon = require('../../assets/images/icon_email.svg');
const footerBgImg = require('../../assets/images/footer_background.png');
const skypeIcon = require('../../assets/images/social_skype.svg');
const telegramIcon = require('../../assets/images/social_telegram.svg');
const whatsappIcon = require('../../assets/images/social_whatsapp.svg');
const slideImage1 = require('../../assets/images/slide_project1.png');
const slideImage2 = require('../../assets/images/slide_project2.png');
const slideImage3 = require('../../assets/images/slide_project3.png');
const arrowIcon = require('../../assets/images/icon_arrow_right.png');

function Home() {
  const who_we_are_data = [
    {
      icon: require('../../assets/images/whoweare_team-line.svg'),
      title: 'Team of experienced developers.',
      desp: 'We develop the best solutions with the help of modern technologies and our profound experience.',
    },
    {
      icon: require('../../assets/images/whoweare_circle.svg'),
      title: 'A full cycle of mobile app development.',
      desp: 'We are creating applications from scratch till you get a completed product on AppStore and Google Play available for the end-user.',
    },
    {
      icon: require('../../assets/images/whoweare_carbon.svg'),
      title: 'Cross-platform development',
      desp: 'You will get the app for both iOS and Android platforms.',
    },
    {
      icon: require('../../assets/images/whoweare_hands.svg'),
      title: '5 years on the market of Internet solutions.',
      desp: 'Mobile development is our core specialization.',
    },
    {
      icon: require('../../assets/images/whoweare_support.svg'),
      title: 'Support after release.',
      desp: 'We will provide full support even after your app will go live.',
    },
    {
      icon: require('../../assets/images/whoweare_check.svg'),
      title: 'We are creating custom solutions',
      desp: 'Our experienced team will implement your best ideas and turn them into value.',
    },
  ];

  const customer_trust_us_data = [
    {
      avatar: require('../../assets/images/miroslav_olar.png'),
      name: 'Miroslav Olar',
      role: 'owner of Should I Answer app',
      text: 'That was great cooperation. App is working really good',
    },
    {
      avatar: require('../../assets/images/volodymyr_zhyhaylo.png'),
      name: 'Volodymyr Zhyhaylo',
      role: 'owner of Speakly app',
      text: 'I had an idea and those guys do it in the app.',
    },
    {
      avatar: require('../../assets/images/yuri_kam.png'),
      name: 'Yuri Kam',
      role: 'owner of Story Swiper app',
      text: 'Perfect job! That was fast and design is great.',
    },
  ];

  const you_need_us_data = [
    {
      icon: require('../../assets/images/youneedus_hand.svg'),
      alt: 'youneedus_hand',
      text: 'To increase sales, giving customers the opportunity to place orders directly without opening a browser.',
    },
    {
      icon: require('../../assets/images/youneedus_smile.svg'),
      alt: 'youneedus_smile',
      text: 'To create a positive image in the eyes of the target audience since every self-respecting company finds specialists to create a user-friendly application for a smartphone.',
    },
    {
      icon: require('../../assets/images/youneedus_eye.svg'),
      alt: 'youneedus_eye',
      text: 'To facilitate the search for products in the online store and counseling at the selection stage.',
    },
    {
      icon: require('../../assets/images/youneedus_time.svg'),
      alt: 'youneedus_time',
      text: 'To keep customers updated on new products, promotions, optimize personal account management, etc.',
    },
  ];

  const sliderSettings = {
    arrows: false,
    centerMode: false,
    dots: false,
    infinite: false,
    slidesToShow: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: false,
          dots: false,
          infinite: false,
          slidesToShow: 3,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          dots: false,
          infinite: false,
          slidesToShow: 2,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          dots: false,
          infinite: false,
          slidesToShow: 1,
          initialSlide: 0,
        }
      }
    ]
  };

  let sliderRef = useRef();

  //state to show modal
  const [modalShow, setModalShow] = useState(false);

  const toggleModal = () => {
    const newState = !modalShow;
    setModalShow(newState);
  }

  //mail send
  const sendHandler = (name, contactNumber) => {
    const templateParams = {
      "name": name,
      "contact": contactNumber
    }

    emailjs.send('default_service', 'template_JuSrrHAw', templateParams, 'user_HuJgJTYaS22UkmTiUftN0')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message sent')
      }, function (error) {
        console.log('FAILED...', error);
      });
  }
  // form validation
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    const inputData = { ...data };
    sendHandler(inputData.name, inputData.contactNumber)
    reset({
      touched: false
    });
  }

  return (
    <>
      {modalShow ? (<Modal show={modalShow} click={toggleModal}/>):
      (<>
      <Header click={toggleModal}/>
      <div className='home'>
        <BannerBackgroundImg src={bannerBgImg} alt={'banner'} />
        <BannerSection>
          <BannerContent>
            <BannerTextBig>Nunc euismod facilisi volutpat, amet.</BannerTextBig>
            <BannerTextNormal>Faucibus feugiat proin odio vel pharetra ullamcorper ultrices mauris, ut. Elementum.</BannerTextNormal>
            <ModalButton onClick={toggleModal}>Let's talk</ModalButton>
          </BannerContent>

          <BannerPhoneImg1 src={bannerPhoneImg1} alt={'phone1'} />
          <BannerPhoneImg2 src={bannerPhoneImg2} alt={'phone2'} />
        </BannerSection>

        <Element name='about'>
          <Section className='who-we-are' id="1">
            <CaptionText>Who we are.</CaptionText>
            <BoxContainer className='who-we-are-content'>
              {who_we_are_data.map((dataItem, index) => {
                return (
                  <Box className='box' key={index}>
                    <img src={dataItem.icon} alt={dataItem.title} />
                    <BoxTitle>{dataItem.title}</BoxTitle>
                    <BoxDespText>{dataItem.desp}</BoxDespText>
                  </Box>
                );
              })}
            </BoxContainer>
          </Section>
        </Element>
        <Element name='howItWorks'>
          <Section>
            <VideoBackground src={videoBgImg} alt={'video'} />
            <VideoContainer className='video-player'>
              <PlayerButton>
                <img src={videoPlayerIcon} alt={'play'} />
              </PlayerButton>
            </VideoContainer>
          </Section>
        </Element>

        <Element name='projects'>
          <Section className='our_projects'>
            <CaptionText>Our projects</CaptionText>
            <BackgroundEllipse2 className='bg-ellipse2' />
            <BackgroundEllipse3 className='bg-ellipse3' />
            <Slider ref={slider => (sliderRef = slider)} {...sliderSettings} className='slider-container'>
              <SliderItem>
                <img src={slideImage1} alt={'slide1'} />
              </SliderItem>
              <SliderItem>
                <img src={slideImage2} alt={'slide2'} />
              </SliderItem>
              <SliderItem>
                <img src={slideImage3} alt={'slide3'} />
              </SliderItem>
              {/* <SliderItem>
                <img src={slideImage4} alt={'slide4'} />
              </SliderItem>
              <SliderItem>
                <img src={slideImage5} alt={'slide5'} />
              </SliderItem>
              <SliderItem>
                <img src={slideImage6} alt={'slide6'} />
              </SliderItem>
              <SliderItem>
              </SliderItem> */}
            </Slider>
            <SlideNavigator>
              <PrevButton onClick={() => sliderRef.slickPrev()}>
                <img src={arrowIcon} alt={'prev'} />
              </PrevButton>
              <NextButton onClick={() => sliderRef.slickNext()}>
                <img src={arrowIcon} alt={'next'} />
              </NextButton>
            </SlideNavigator>
          </Section>
        </Element>

        <Section className='customer_trust_us'>
          <CaptionText>Customer trust us.</CaptionText>
          <BoxContainer className='box-container'>
            <BackgroundEllipse4 className='bg-ellipse4' />
            {customer_trust_us_data.map((dataItem, index) => {
              return (
                <Box className='box' key={index}>
                  <BoxAvatarImg src={dataItem.avatar} alt={dataItem.name} />
                  <BoxNameText>{dataItem.name}</BoxNameText>
                  <BoxRoleText>{dataItem.name}</BoxRoleText>
                  <BoxQuoteText>"</BoxQuoteText>
                  <BoxText>{dataItem.text}</BoxText>
                </Box>
              );
            })}
          </BoxContainer>
        </Section>
        <Section className='you_need_us'>
          <CaptionText alignLeft>You need us.</CaptionText>
          <BoxContainer className='box-container'>
            {you_need_us_data.map((dataItem, index) => {
              return (
                <Box className='box' key={index}>
                  <img src={dataItem.icon} alt={dataItem.alt} />
                  <BoxText className='box-text'>{dataItem.text}</BoxText>
                </Box>
              );
            })}
          </BoxContainer>
        </Section>

        <Element name="contacts">
          <Section className='get_free'>
            <FormContainerWrapper>
              <MediumText>Got a project in mind?</MediumText>
              <Row>
                <CaptionText underline>Get free</CaptionText>
                <CaptionText>expert advice</CaptionText>
              </Row>

              <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>
                <InputItemContainer>
                  <InputItem
                    placeholder={'Name'}
                    name="name"
                    ref={register({
                      required: true
                    })}
                  />
                  <InputItemIcon src={userIcon} alt={'user'} />
                </InputItemContainer>

                <InputItemContainer>
                  <InputItem
                    placeholder={'Skype/Whatsapp/E-mail'}
                    name="contactNumber"
                    ref={register({
                      required: true
                    })}
                  />
                  <InputItemIcon src={emailIcon} alt={'email'} />
                </InputItemContainer>

                <SendButton type="submit">Let's talk</SendButton>
              </FormContainer>
            </FormContainerWrapper>

            <GetFreeFormBackground src={getFreeFormBgImg}></GetFreeFormBackground>
          </Section>
        </Element>

        <Section className='footer'>
          <img src={footerBgImg} alt={'footer'} />
          <LinksBox>
            <Link href='/'>
              <img src={skypeIcon} alt={'skype'} />
            </Link>
            <Link href='/'>
              <img src={telegramIcon} alt={'telegram'} />
            </Link>
            <Link href='/'>
              <img src={whatsappIcon} alt={'whatsapp'} />
            </Link>
          </LinksBox>
        </Section>
      </div>
      </>)}
    </>
  );
}

export default Home;
