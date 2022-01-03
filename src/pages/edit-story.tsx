import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BaseNote from "../components/molecules/base-note";
import Navigation from "../components/molecules/nav";
import CoverPhoto from "../components/organisms/cover-photo";
import Footer from "../components/organisms/footer";
import StoryDetails from "../components/organisms/story-details";
import WriterDetailsEdit from "../components/organisms/writer-details-edit";
import { TokenContext } from "../contexts/edit-token-context";
import { StoryContext } from "../contexts/write-story-context";
import { getStoryFromToken } from "../services/story";

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-bottom: 38px;
`;
const HeadingWrap = styled.div`
  padding: 0 32px;
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
  margin: 16px 0 24px 0;
`;
const ProgressBar = styled.div``;

const ProgressSpan = styled.span<{ active?: boolean }>`
  display: inline-block;
  height: 12px;
  width: 12px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ active, theme }) => active && theme.colors.black};
  border-radius: 50%;
  margin-right: 4.8px;
`;

const EditStory: React.FC = () => {
  const [activeView, setActiveView] = useState(1);
  const { story, setStory } = useContext(StoryContext);
  const { setToken } = useContext(TokenContext);
  const initialStory = {
    body: "",
    cover_img: "",
    created_at: "",
    deleted_at: null,
    id: 0,
    likes: 0,
    read_time: null,
    status: "",
    title: "",
    updated_at: "",
    user: {
      id: 1,
      uuid: "",
      name: "",
      email: "",
      status: "",
    },
    user_id: 0,
    uuid: "",
    views: 0,
  };

  const [name, setName] = useState(initialStory.user.name);
  const [title, setTitle] = useState(initialStory.title);
  const [content, setContent] = useState(initialStory.body);
  const [image, setImage] = useState(initialStory.cover_img);

  const [loading, setLoading] = useState(true);
  const handlePreview = () => {
    const date = new Date().toString().slice(4, 10);
    setStory({ ...story, name, title, content, image, date });
    setToken(editToken);
  };
  const { editToken } = useParams<{ editToken: string }>();
  useEffect(() => {
    if (editToken) {
      getStoryFromToken(editToken).then((res) => {
        const fetchedStory = res.data;
        setName(fetchedStory.user.name);
        setTitle(fetchedStory.title);
        setContent(fetchedStory.body);
        setImage(fetchedStory.cover_img);
        setLoading(false);
      });
    }
  }, []);

  return (
    <div>
      <Navigation />
      <Content>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <HeadingWrap>
              <Title>
                {" "}
                {title}
                Remember, your gratitude story could encourage someone out
                there.
              </Title>
              <Text>
                No long sign up forms! Ready to spread gratitude in the air?
                Let’s do it!
              </Text>
              <ProgressBar>
                <ProgressSpan active={activeView >= 0} />
                <ProgressSpan active={activeView >= 1} />
                <ProgressSpan active={activeView >= 2} />
                <ProgressSpan />
              </ProgressBar>
            </HeadingWrap>
            <div>
              {activeView === 1 && (
                <WriterDetailsEdit
                  title={title}
                  setTitle={setTitle}
                  name={name}
                  setName={setName}
                  onSubmit={setActiveView}
                  content={content}
                  setContent={setContent}
                />
              )}
              {activeView === 2 && (
                <CoverPhoto
                  onSubmit={setActiveView}
                  image={image}
                  setImage={setImage}
                  handlePreview={handlePreview}
                />
              )}
            </div>
            <BaseNote />
          </>
        )}
      </Content>
      <Footer />
    </div>
  );
};

export default EditStory;
