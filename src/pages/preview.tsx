import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import BaseNote from "../components/molecules/base-note";
import Navigation from "../components/molecules/nav";
import CoverPhoto from "../components/organisms/cover-photo";
import Footer from "../components/organisms/footer";
import StoryDetails from "../components/organisms/story-details";
import WriterDetails from "../components/organisms/writer-details";
import { StoryContext } from "../contexts/write-story-context";

// FDFAF2
const Content = styled.div`
  //   background-color: ${({ theme }) => theme.colors.secondary};
  padding-bottom: 38px;
`;
const HeadingWrap = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid #e6e6e6;
`;
const Title = styled.h3`
  font-size: 24px;
  line-height: 30px;
  padding-top: 32px;
`;
const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  margin: 16px 0;
`;
const Story = styled.div`
  padding: 90px 16px 135px 16px;
  fint-size: 28px;
  line-height: 30px;
`;
const StoryTitle = styled.h1`
  fint-size: 28px;
  line-height: 30px;
  padding: 0 14px;
`;
const Details = styled.div`
  display: flex;
  //   justify-content: center;
  align-items: center;
  margin-top: 14px;
  padding: 0 14px;
`;
const Author = styled.p`
  color: #96670d;
  margin-right: 16px;
`;
const Span = styled.span`
  height: 4px;
  width: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  display: inline-block;
  margin: 0 4px;
  border-radius: 50%;
`;
const Date = styled.p`
  font-size: 14px;
  line-height: 15.4px;
`;
const Img = styled.img`
  width: 100%;
  margin: 48px 0 24px 0;
  padding: 0 14px;
`;
const Body = styled.p`
  font-size: 14px;
  line-height: 22px;
`;
const Button = styled.button`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  margin-top: 50px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 0 16px;
`;
const Back = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-top: 24px;
`;
const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  & p {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 15.4px;
  }
`;
const Like = styled.button`
  background: none;
  border: none;
  svg {
    margin-right: 10px;
  }
`;
interface PreviewProps {
  email: string;
  name: string;
  title: string;
  content: string;
  image: string;
  date: string;
  likes: number;
  views: number;
  setLikes: React.Dispatch<React.SetStateAction<number>>;
}
const Preview: React.FC = () => {
  const { story, setStory } = useContext(StoryContext);
  const { title, name, date, content, image } = story;
  const history = useHistory();
  return (
    <div>
      <Navigation />
      <Content>
        <HeadingWrap>
          <Title>Preview story</Title>
          <Text>Any final edits? You can read through before uploading.</Text>
        </HeadingWrap>
        <Story>
          <StoryTitle>{title}</StoryTitle>
          <Details>
            <Author>{name}</Author>
            <Date>{date}</Date>
            <Span></Span>
            <Date>6 min read</Date>
          </Details>
          <Img src={image} />
          <Body dangerouslySetInnerHTML={{ __html: content }}>
            {/* As you read this, I am spending time with my family celebrating the
            Jewish New Year. It’s a thoughtful time for me, what has passed and
            what is to come? <br /> <br /> I’m so thankful for this year; a year
            of great learning, growth, expansion and some tough lessons too. I’m
            so grateful for the people who have inspired and supported me along
            the way. <br />
            <br /> And I’m so grateful to you; for following me, for reading my
            stories, for responding (or not!), for being in my life and allowing
            me into yours. <br />
            <br /> I wish you a healthy, happy and inspired year to come! Much
            love and blessings, Lisa <br />
            <br /> Here’s this week’s story! A Shocking Story Have your own
            words ever shocked you? Have you noticed that sometimes your story
            is not quite what you think it is? What do you do when yourown story
            doesn’t have a happy end? I was shocked as the words flew out of my
            mouth like a lethal weapon. I knew I had very strong feelings for
            him, but I didn’t imagine the ferocious force of the story that
            emerged. My whole body shook and he was stunned. We both were. It
            started 6 months before. I was young and unattached. And I mean
            really unattached. I had been travelling for some time and taken a
            job locally. We met at sunset, in the garden besidethe water. We had
            all been eating strawberries and cream and the evening was beginning
            to get chilly. I suggested Irish Coffee and he followed me into the
            kitchen. We started to talk. We started to laugh. We felt like we
            had known each other for centuries. We finished each other’s 
            sentences.*/}
          </Body>
          <Stat>
            <p>
              <Like>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.517 16.3417C10.2337 16.4417 9.76699 16.4417 9.48366 16.3417C7.06699 15.5167 1.66699 12.075 1.66699 6.24171C1.66699 3.66671 3.74199 1.58337 6.30032 1.58337C7.81699 1.58337 9.15866 2.31671 10.0003 3.45004C10.842 2.31671 12.192 1.58337 13.7003 1.58337C16.2587 1.58337 18.3337 3.66671 18.3337 6.24171C18.3337 12.075 12.9337 15.5167 10.517 16.3417Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Like>
              0 likes
            </p>
            <p>0 views</p>
          </Stat>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
            }}
          >
            Upload story
          </Button>
          <Back
            onClick={(e) => {
              e.preventDefault();
              history.push("/write-story");
              window.scrollTo(0, 0);
            }}
          >
            Back to editing
          </Back>
        </Story>
        <BaseNote />
      </Content>
      <Footer />
    </div>
  );
};

export default Preview;
