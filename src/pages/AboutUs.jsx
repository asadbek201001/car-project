import React from "react";
import styled from "styled-components";

//components
import Header from "../components/Header";


//images
import Video from "../assets/video.png";
import SImg from "../assets/img.png";
import Phone from "../assets/phone2.png";
import AppStore from "../assets/AppStore.png";
import GooglePlay from "../assets/GooglePlay.png";
import Car2 from "../assets/car2.png";




const MainCtn = styled.div`
 width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
  flex-direction: column;
  background-color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
`;

const PageWrapper = styled.div`
  width: 1296px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;


const AboutCtn = styled.div`
width: 100%;
height: 300px;
display: flex;
align-content: center;
justify-content: center;
  align-items: center;
  text-align: center;
gap: 10px;
flex-direction: column;

h1 {
    font-size: 50px;
}
h3 {
    font-weight: 400;
    color: #7c7c7c;
}
strong {
    font-weight: 600;
}
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
}
.breadcrumb h3,
.breadcrumb strong {
  margin: 0;
  padding: 0;
  display: inline-block;
}
`;

const WhereCtn = styled.div`
width: 100%;
height: 350px;
display: flex;
align-items: center;
justify-content: space-evenly;

`;

const WhereCtnText = styled.div`
width: 350px;
height: 300px;
display: flex;
flex-direction: column;
gap: 18px;
h2 {
    font-weight: 600;
}
h1 {
    font-weight: 650;
    font-size: 45px;
}
p {
    font-weight: 300;
}
`;



const ImageCtn = styled.div`

`;

const KCtn = styled.div`
width: 100%;
height: 300px;
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const KCtnText = styled.div`
width: 300px;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
h1 {
    font-size: 55px;
    color: #5937E0;
}
h2 {
    font-weight: 500;
}

`;


const AfterK = styled.div`
width: 100%;
height: 669px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const LeftImage = styled.div`
  img {
    width: 520px;
    border-radius: 20px;
  }
`;

const RightList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 480px;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const Number = styled.div`
  width: 36px;
  height: 36px;
  min-width: 36px;
  flex-shrink: 0;
  background-color: #5c2dee;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 17px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  p {
    font-size: 15px;
    color: #555;
    line-height: 1.5;
  }
`;

const DownloadCtn = styled.div`
  width: 1296px;
  height: 380px;
  background: #5937E0;
  border-radius: 35px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  overflow: hidden;
`;

const PhoneMockup = styled.div`
  img {
    width: 290px;
    transform: translateY(-40px);
  }
`;

const PhoneMockupSecond = styled.div`
  img {
    width: 360px;
    transform: translateY(-10px);
  }
`;

const DownloadText = styled.div`
  width: 480px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 18px;

  span {
    font-size: 14px;
    opacity: 0.8;
  }

  h1 {
    font-size: 45px;
    font-weight: 700;
  }

  p {
    font-size: 15px;
    opacity: 0.8;
    line-height: 1.5;
  }
`;

const StoreButtons = styled.div`
  display: flex;
  gap: 18px;

  img {
    width: 160px;
    cursor: pointer;
  }
`;

const ReviewsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  gap: 50px;
  
  
`;

const ReviewsTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const ReviewsCards = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  justify-content: space-between;
`;

const ReviewCard = styled.div`
  width: 360px;
  height: 330px;
  background: #ffffff;
  border-radius: 22px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
`;

const Quote = styled.div`
  font-size: 40px;
  margin-top: 20px;
  color: #5937E0;
`;

const ReviewText = styled.p`
  padding: 0 20px;
  margin-top: 10px;
  color: #444;
  font-size: 14px;
`;

const ReviewerBox = styled.div`
  background: #5937E0;
  padding: 25px 0;
  color: white;
  margin-top: auto;
`;

const ReviewerImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin: auto;
  margin-bottom: 10px;
`;

const FAQContainer = styled.div`
  width: 1296px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

const FAQTitle = styled.h1`
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const FAQItem = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 12px rgba(0,0,0,0.07);
  cursor: pointer;
`;

const FAQHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
`;

const ToggleIcon = styled.div`
  font-size: 20px;
`;

const FAQContent = styled.p`
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.5;
  color: #444;
`;

export default function About() {
    return (
        <>
            <Header />

            <MainCtn>
                <PageWrapper>
                    <AboutCtn>
                        <h1>About Us</h1>
                        <div className="breadcrumb">
                            <h3>Home</h3>
                            <strong>/ About Us</strong>
                        </div>
                    </AboutCtn>


                    <WhereCtn>
                        <WhereCtnText>
                            <h1>Where every <br /> drive feels <br /> extraordinary</h1>
                        </WhereCtnText>
                        <WhereCtnText>
                            <h2>Variety Brands</h2>
                            <p>Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio</p>
                            <h2>Maximum Freedom</h2>
                            <p>Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in</p>
                        </WhereCtnText>
                        <WhereCtnText>
                            <h2>Awesome Suport</h2>
                            <p>Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit</p>
                            <h2>flexibility on the go</h2>
                            <p>Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl</p>
                        </WhereCtnText>
                    </WhereCtn>

                    <ImageCtn>
                        <img src={Video} alt="" />
                    </ImageCtn>
                    <KCtn>
                        <KCtnText>
                            <h1>20k+</h1>
                            <h2>Happy customers</h2>
                        </KCtnText>
                        <KCtnText>
                            <h1>540+</h1>
                            <h2>Count of cars</h2>

                        </KCtnText>
                        <KCtnText>
                            <h1>25+</h1>
                            <h2>Years of experince</h2>

                        </KCtnText>
                    </KCtn>

                    <AfterK>
                        <LeftImage>
                            <img src={SImg} alt="section" />
                        </LeftImage>

                        <RightList>
                            <Item>
                                <Number>1</Number>
                                <TextBlock>
                                    <h3>Erat at semper</h3>
                                    <p>Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...</p>
                                </TextBlock>
                            </Item>

                            <Item>
                                <Number>2</Number>
                                <TextBlock>
                                    <h3>Urna nec vivamus risus duis arcu</h3>
                                    <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida...</p>
                                </TextBlock>
                            </Item>

                            <Item>
                                <Number>3</Number>
                                <TextBlock>
                                    <h3>Lobortis euismod imperdiet tempus</h3>
                                    <p>Viverra scelerisque mauris et nullam molestie et...</p>
                                </TextBlock>
                            </Item>

                            <Item>
                                <Number>4</Number>
                                <TextBlock>
                                    <h3>Cras nulla aliquet nam eleifend amet et</h3>
                                    <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida...</p>
                                </TextBlock>
                            </Item>
                        </RightList>
                    </AfterK>

                    <DownloadCtn>
                        <PhoneMockup>
                            <img src={Phone} alt="phone" />
                        </PhoneMockup>

                        <DownloadText>
                            <span>DOWNLOAD OUR APP</span>
                            <h1>Download our app</h1>
                            <p>
                                Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper
                                diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla
                                nam eget urna fusce vulputate at risus
                            </p>

                            <StoreButtons>
                                <img src={AppStore} alt="appstore" />
                                <img src={GooglePlay} alt="googleplay" />
                            </StoreButtons>
                        </DownloadText>
                    </DownloadCtn>

                    <ReviewsSection>
                        <ReviewsTitle>Reviews from our customers</ReviewsTitle>

                        <ReviewsCards>
                            <ReviewCard>
                                <Quote>“</Quote>
                                <ReviewText>
                                    Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas.
                                    Amet erat quisque odio purus feugiat.
                                </ReviewText>

                                <ReviewerBox>
                                    <ReviewerImg src={SImg} />
                                    <div>Kuphal LLC</div>
                                    <strong>Emanuel Boyle</strong>
                                </ReviewerBox>
                            </ReviewCard>

                            <ReviewCard>
                                <Quote>“</Quote>
                                <ReviewText>
                                    Purus consectetur varius quis urna phasellus enim mattis. Tincidunt tortor nunc egestas.
                                </ReviewText>

                                <ReviewerBox>
                                    <ReviewerImg src={SImg} />
                                    <div>Glover – Orn</div>
                                    <strong>River Graves</strong>
                                </ReviewerBox>
                            </ReviewCard>

                            <ReviewCard>
                                <Quote>“</Quote>
                                <ReviewText>
                                    Quam neque odio urna euismod felis. Sit egestas magna in quisque sapien magna.
                                </ReviewText>

                                <ReviewerBox>
                                    <ReviewerImg src={SImg} />
                                    <div>Hagg LLC</div>
                                    <strong>Ryder Malone</strong>
                                </ReviewerBox>
                            </ReviewCard>
                        </ReviewsCards>
                    </ReviewsSection>
                    <FAQContainer>
                        <FAQTitle>Top Car Rental Questions</FAQTitle>

                        <FAQItem>
                            <FAQHeader>
                                <span>How does it works?</span>
                                <ToggleIcon>⌄</ToggleIcon>
                            </FAQHeader>
                            <FAQContent>
                                Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa.
                                Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum.
                                Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut.
                                Pellentesque id nibh sed nulla non nulla
                            </FAQContent>
                        </FAQItem>

                        <FAQItem>
                            <FAQHeader>
                                <span>Can I rent a car without a credit card?</span>
                                <ToggleIcon>⌄</ToggleIcon>
                            </FAQHeader>
                        </FAQItem>

                        <FAQItem>
                            <FAQHeader>
                                <span>What are the requirements for renting a car?</span>
                                <ToggleIcon>⌄</ToggleIcon>
                            </FAQHeader>
                        </FAQItem>

                        <FAQItem>
                            <FAQHeader>
                                <span>Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?</span>
                                <ToggleIcon>⌄</ToggleIcon>
                            </FAQHeader>
                        </FAQItem>

                        <FAQItem>
                            <FAQHeader>
                                <span>Does Car Rental offer coverage products for purchase with my rental?</span>
                                <ToggleIcon>⌄</ToggleIcon>
                            </FAQHeader>
                        </FAQItem>
                    </FAQContainer>
                </PageWrapper>


                <DownloadCtn>
                       
                        <DownloadText>
                            <span>DOWNLOAD OUR APP</span>
                            <h1>Download our app</h1>
                            <p>
                                Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper
                                diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla
                                nam eget urna fusce vulputate at risus
                            </p>

                            <StoreButtons>
                                <img src={AppStore} alt="appstore" />
                                <img src={GooglePlay} alt="googleplay" />
                            </StoreButtons>
                        </DownloadText>

                        <PhoneMockupSecond>
                            <img src={Car2} alt="phone" />
                        </PhoneMockupSecond>

                    </DownloadCtn>



            </MainCtn>
        </>
    )
}