import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Success from "../components/atoms/success";
import BaseNote from "../components/molecules/base-note";
import Navigation from "../components/molecules/nav";
import Footer from "../components/organisms/footer";
import { TokenContext } from "../contexts/edit-token-context";
import { StoryContext } from "../contexts/write-story-context";
import CopyToast from "../components/molecules/copy-toast";

// FDFAF2
const Content = styled.div`
  padding: 58px 26px 80px 26px;
`;

const successAnimation = keyframes`
  0%
  {
    transform: translateY(-5px);
  }
  50%
  {
    transform: translateY(0);
  }
  100%
  {
    transform: translateY(-5px);
  }
`;
const SuccessWrap = styled.div`
  animation: ${successAnimation} 2s infinite;
  svg {
    margin: 0 auto;
    display: block;
  }
`;
const Title = styled.h3`
  font-size: 26px;
  line-height: 32px;
  padding-top: 32px;
  text-align: center;
  margin: 0 53px;
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.2px;
  margin: 16px 37px;
  text-align: center;
`;
const LinkBox = styled.div`
  background-color: #fefaf1;
  border: 1px solid #ededed;
  padding: 14px 24px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 55px;
  position: relative;
  input {
    font-size: 15px;
    border: none;
    background: none;
  }
  button {
    background: none;
    border: none;
  }
`;
const Explore = styled.button`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  margin: 50px auto 24px auto;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 0 16px;
  width: 85%;
  font-size: 14px;
  display: block;
`;
const Share = styled.div`
  position: relative;
  text-align: center;
  color: #bababa;
  margin-top: 34px;
  p {
    background-color: white;
    padding: 0 24px;
    width: fit-content;
    text-align: center;
    margin: 0 auto;
    z-index: 8;
    position: relative;
    text-transform: uppercase;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #dcdcdc;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  padding: 0 28px;
  margin-top: 34px;
  justify-content: space-between;
`;
const Home = styled.a`
  display: block;
  margin-bottom: 144px;
  text-align: center;
  color: black;
`;
const ShareStory: React.FC = () => {
  const { story } = useContext(StoryContext);
  //   const { title, name, date, content, image } = story;
  //   const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { storyId } = useParams<{ storyId: string }>();
  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(`https://gratico.xyz/story/${storyId}`)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navigation
        logoSrc="/assets/images/mobile-footer-logo.png"
        bgColor="#FEF4DE"
        navColor="#333333"
      />
      <Content>
        <div>
          <SuccessWrap>
            <Success />
          </SuccessWrap>
          <Title>
            Your story has been {TokenContext ? "updated" : "uploaded"}!
          </Title>
          <Text>
            Copy & paste the link below anywhere to get people to read your
            story!
          </Text>
          <LinkBox>
            <CopyToast show={isCopied}>Link copied!</CopyToast>
            <input readOnly value={`gratico.xyz/story/${storyId}`} />
            <button onClick={handleCopyClick}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3332 10.75V14.25C13.3332 17.1667 12.1665 18.3333 9.24984 18.3333H5.74984C2.83317 18.3333 1.6665 17.1667 1.6665 14.25V10.75C1.6665 7.83333 2.83317 6.66667 5.74984 6.66667H9.24984C12.1665 6.66667 13.3332 7.83333 13.3332 10.75Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3332 5.75V9.25C18.3332 12.1667 17.1665 13.3333 14.2498 13.3333H13.3332V10.75C13.3332 7.83333 12.1665 6.66667 9.24984 6.66667H6.6665V5.75C6.6665 2.83333 7.83317 1.66667 10.7498 1.66667H14.2498C17.1665 1.66667 18.3332 2.83333 18.3332 5.75Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </LinkBox>
          <Share>
            <p>Share to</p>
          </Share>
          <SocialMedia>
            <a
              href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fgratico.xyz/story/${storyId} I just published a story of gratico. Clic here to read!`}
              target="__blank"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17" cy="17" r="17" fill="#E9E9E9" />
                <path
                  d="M26.0101 12.665C25.4151 12.92 24.7351 13.09 24.0551 13.175C24.7351 12.75 25.3301 12.07 25.5851 11.305C24.9051 11.73 24.2251 11.985 23.3751 12.155C22.7801 11.475 21.8451 11.05 20.9101 11.05C19.0401 11.05 17.5101 12.58 17.5101 14.45C17.5101 14.705 17.5101 14.96 17.5951 15.215C14.7901 15.045 12.2401 13.685 10.5401 11.645C10.2851 12.155 10.1151 12.75 10.1151 13.345C10.1151 14.535 10.7101 15.555 11.6451 16.15C11.0501 16.15 10.5401 15.98 10.1151 15.725C10.1151 17.34 11.3051 18.785 12.8351 19.04C12.5801 19.125 12.2401 19.125 11.9001 19.125C11.6451 19.125 11.4751 19.125 11.2201 19.04C11.6451 20.4 12.9201 21.42 14.4501 21.42C13.2601 22.355 11.8151 22.865 10.2001 22.865C9.9451 22.865 9.6901 22.865 9.3501 22.78C10.8801 23.715 12.6651 24.31 14.6201 24.31C20.9101 24.31 24.3101 19.125 24.3101 14.62V14.195C24.9901 13.94 25.5851 13.345 26.0101 12.665Z"
                  fill="#333333"
                />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgratico.xyz/story/${storyId}`}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17" cy="17" r="17" fill="#E9E9E9" />
                <path
                  d="M24.1538 11.6409C24.1538 10.3196 22.988 9.15384 21.6668 9.15384H11.6409C10.3196 9.15384 9.15381 10.3196 9.15381 11.6409V21.6668C9.15381 22.988 10.3196 24.1538 11.6409 24.1538H16.6927V18.4803H14.8274V15.9932H16.6927V14.9829C16.6927 13.273 17.9362 11.7963 19.4906 11.7963H21.5113V14.2834H19.4906C19.2574 14.2834 19.0243 14.5165 19.0243 14.9829V15.9932H21.5113V18.4803H19.0243V24.1538H21.6668C22.988 24.1538 24.1538 22.988 24.1538 21.6668V11.6409Z"
                  fill="#333333"
                />
              </svg>
            </a>
            <a
              href={`whatsapp://send?text=The text to share! gratico.xyz/story/${storyId}`}
              data-action="share/whatsapp/share"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17" cy="17" r="17" fill="#E9E9E9" />
                <path
                  d="M22.6585 11.3333C21.1533 9.83333 19.1463 9 17.0279 9C12.6237 9 9.05575 12.5556 9.05575 16.9444C9.05575 18.3333 9.44599 19.7222 10.115 20.8889L9 25L13.2369 23.8889C14.4077 24.5 15.6899 24.8333 17.0279 24.8333C21.4321 24.8333 25 21.2778 25 16.8889C24.9443 14.8333 24.1638 12.8333 22.6585 11.3333ZM20.8746 19.7778C20.7073 20.2222 19.9268 20.6667 19.5366 20.7222C19.2021 20.7778 18.7561 20.7778 18.3101 20.6667C18.0314 20.5556 17.6411 20.4444 17.1951 20.2222C15.1882 19.3889 13.9059 17.3889 13.7944 17.2222C13.6829 17.1111 12.9582 16.1667 12.9582 15.1667C12.9582 14.1667 13.4599 13.7222 13.6272 13.5C13.7944 13.2778 14.0174 13.2778 14.1847 13.2778C14.2962 13.2778 14.4634 13.2778 14.5749 13.2778C14.6864 13.2778 14.8537 13.2222 15.0209 13.6111C15.1882 14 15.5784 15 15.6341 15.0556C15.6899 15.1667 15.6899 15.2778 15.6341 15.3889C15.5784 15.5 15.5226 15.6111 15.4111 15.7222C15.2996 15.8333 15.1882 16 15.1324 16.0556C15.0209 16.1667 14.9094 16.2778 15.0209 16.4444C15.1324 16.6667 15.5226 17.2778 16.1359 17.8333C16.9164 18.5 17.5296 18.7222 17.7526 18.8333C17.9756 18.9444 18.0871 18.8889 18.1986 18.7778C18.3101 18.6667 18.7003 18.2222 18.8118 18C18.9233 17.7778 19.0906 17.8333 19.2578 17.8889C19.4251 17.9444 20.4286 18.4444 20.5958 18.5556C20.8188 18.6667 20.9303 18.7222 20.9861 18.7778C21.0418 18.9444 21.0418 19.3333 20.8746 19.7778Z"
                  fill="#333333"
                />
              </svg>
            </a>
            <a href="">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17" cy="17" r="17" fill="#E9E9E9" />
                <path
                  d="M22.3937 10H12.0563C10.8892 10 10 10.8892 10 12.0563V22.3937C10 23.5608 10.8892 24.45 12.0563 24.45H22.3937C23.5608 24.45 24.45 23.5608 24.45 22.3937V12.0563C24.45 10.8892 23.5608 10 22.3937 10ZM17.225 21.56C19.6148 21.56 21.56 19.6704 21.56 17.3917C21.56 17.0027 21.5044 16.5581 21.3933 16.2246H22.616V22.1158C22.616 22.3937 22.3937 22.6715 22.0602 22.6715H12.3898C12.1119 22.6715 11.834 22.4492 11.834 22.1158V16.169H13.1123C13.0012 16.5581 12.9456 16.9471 12.9456 17.3362C12.89 19.6704 14.8352 21.56 17.225 21.56ZM17.225 19.8927C15.6688 19.8927 14.4462 18.67 14.4462 17.1694C14.4462 15.6688 15.6688 14.4462 17.225 14.4462C18.7812 14.4462 20.0038 15.6688 20.0038 17.1694C20.0038 18.7256 18.7812 19.8927 17.225 19.8927ZM22.5604 13.946C22.5604 14.2794 22.2825 14.5573 21.949 14.5573H20.3929C20.0594 14.5573 19.7815 14.2794 19.7815 13.946V12.4454C19.7815 12.1119 20.0594 11.834 20.3929 11.834H21.949C22.2825 11.834 22.5604 12.1119 22.5604 12.4454V13.946Z"
                  fill="#333333"
                />
              </svg>
            </a>
          </SocialMedia>
          <Explore
            onClick={() => {
              history.push("/explore");
            }}
          >
            Explore people stories
          </Explore>
          <Home href="/">Back home</Home>
        </div>
        <BaseNote />
      </Content>
      <Footer />
    </div>
  );
};

export default ShareStory;
