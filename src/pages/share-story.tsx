import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled, { keyframes } from 'styled-components'
import Success from "../components/atoms/success";
import BaseNote from "../components/molecules/base-note";
import Navigation from "../components/molecules/nav";
import Footer from "../components/organisms/footer";
import { TokenContext } from "../contexts/edit-token-context";
import { StoryContext } from "../contexts/write-story-context";
import { ToastContainer, toast } from "react-toastify";

// FDFAF2
const Content = styled.div`
	padding: 115px 26px 38px 26px;
`

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
`
const SuccessWrap = styled.div`
	animation: ${successAnimation} 2s infinite;
	svg {
		margin: 0 auto;
		display: block;
	}
`
const Title = styled.h3`
	font-size: 24px;
	line-height: 30px;
	padding-top: 32px;
	text-align: center;
	margin: 0 53px;
`
const Text = styled.p`
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.2px;
	margin: 16px 37px;
	text-align: center;
`
const LinkBox = styled.div`
  background-color: #fefaf1;
  border: 1px solid #ededed;
  padding: 14px 24px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 55px;
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
  margin: 50px auto 144px auto;
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
  padding: 0 64px;
  margin-top: 34px;
  justify-content: space-between;
`;
const ShareStory: React.FC = () => {
  const { story } = useContext(StoryContext);
  //   const { title, name, date, content, image } = story;
  //   const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { storyId } = useParams<{ storyId: string }>();

  return (
    <div>
      <Navigation
				logoSrc='/assets/images/mobile-footer-logo.png'
				bgColor='#FEF4DE'
				navColor='#333333'
			/>
      <Content>
        <div>
          <SuccessWrap>
            <Success />
          </SuccessWrap>
          <Title>Your story has been uploaded!</Title>
          <Text>
            Copy & paste the link below anywhere to get people to read your
            story!
          </Text>
          <LinkBox>
            <input id="copy-link" value={`gratico.xyz/view/${storyId}`} />
            <button
              onClick={() => {
                const copyText = document.getElementById(
                  "copy-link"
                ) as HTMLInputElement;
                copyText?.focus();
                copyText?.select();
                // copyText.sele
                copyText?.setSelectionRange(0, 99999);
                document.execCommand("copy");
                toast(`Share link copied!`);
              }}
            >
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
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={true}
            />
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
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13" cy="13" r="13" fill="#FFEDAF" />
                <path
                  d="M19.8899 9.685C19.4349 9.88 18.9149 10.01 18.3949 10.075C18.9149 9.75 19.3699 9.23001 19.5649 8.64501C19.0449 8.97001 18.5249 9.16501 17.8749 9.29501C17.4199 8.77501 16.7049 8.45 15.9899 8.45C14.5599 8.45 13.3899 9.62 13.3899 11.05C13.3899 11.245 13.3899 11.44 13.4549 11.635C11.3099 11.505 9.3599 10.465 8.0599 8.905C7.8649 9.295 7.7349 9.75 7.7349 10.205C7.7349 11.115 8.1899 11.895 8.9049 12.35C8.4499 12.35 8.0599 12.22 7.7349 12.025C7.7349 13.26 8.6449 14.365 9.8149 14.56C9.6199 14.625 9.3599 14.625 9.0999 14.625C8.9049 14.625 8.7749 14.625 8.5799 14.56C8.9049 15.6 9.8799 16.38 11.0499 16.38C10.1399 17.095 9.0349 17.485 7.7999 17.485C7.6049 17.485 7.4099 17.485 7.1499 17.42C8.3199 18.135 9.6849 18.59 11.1799 18.59C15.9899 18.59 18.5899 14.625 18.5899 11.18V10.855C19.1099 10.66 19.5649 10.205 19.8899 9.685Z"
                  fill="#D2B44D"
                />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgratico.xyz/story/${storyId}`}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13" cy="13" r="13" fill="#FFEDAF" />
                <path
                  d="M18.05 8.83212C18.05 7.85881 17.1912 7 16.2179 7H8.83212C7.85881 7 7 7.85881 7 8.83212V16.2179C7 17.1912 7.85881 18.05 8.83212 18.05H12.5536V13.8705H11.1795V12.0383H12.5536V11.294C12.5536 10.0345 13.4697 8.94663 14.6148 8.94663H16.1034V10.7788H14.6148C14.443 10.7788 14.2712 10.9505 14.2712 11.294V12.0383H16.1034V13.8705H14.2712V18.05H16.2179C17.1912 18.05 18.05 17.1912 18.05 16.2179V8.83212Z"
                  fill="#D2B44D"
                />
              </svg>
            </a>
            <a
              href={`whatsapp://send?text=The text to share! gratico.xyz/story/${storyId}`}
              data-action="share/whatsapp/share"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13" cy="13" r="13" fill="#FFEDAF" />
                <path
                  d="M18.1524 7.84062C16.8683 6.56094 15.1561 5.85 13.3488 5.85C9.59146 5.85 6.54756 8.88333 6.54756 12.6276C6.54756 13.8125 6.88049 14.9974 7.45122 15.9927L6.5 19.5L10.1146 18.5521C11.1134 19.0734 12.2073 19.3578 13.3488 19.3578C17.1061 19.3578 20.15 16.3245 20.15 12.5802C20.1024 10.8266 19.4366 9.12031 18.1524 7.84062ZM16.6305 15.0448C16.4878 15.424 15.8219 15.8031 15.489 15.8505C15.2037 15.8979 14.8232 15.8979 14.4427 15.8031C14.2049 15.7083 13.872 15.6135 13.4915 15.424C11.7793 14.713 10.6854 13.0068 10.5902 12.8646C10.4951 12.7698 9.87683 11.9641 9.87683 11.1109C9.87683 10.2578 10.3049 9.87864 10.4476 9.68906C10.5902 9.49948 10.7805 9.49948 10.9232 9.49948C11.0183 9.49948 11.161 9.49948 11.2561 9.49948C11.3512 9.49948 11.4939 9.45208 11.6366 9.78385C11.7793 10.1156 12.1122 10.9687 12.1598 11.0161C12.2073 11.1109 12.2073 11.2057 12.1598 11.3005C12.1122 11.3953 12.0646 11.4901 11.9695 11.5849C11.8744 11.6797 11.7793 11.8219 11.7317 11.8693C11.6366 11.9641 11.5415 12.0589 11.6366 12.201C11.7317 12.3906 12.0646 12.912 12.5878 13.3859C13.2537 13.9547 13.7768 14.1443 13.9671 14.2391C14.1573 14.3339 14.2524 14.2865 14.3476 14.1917C14.4427 14.0969 14.7756 13.7177 14.8707 13.5281C14.9659 13.3385 15.1085 13.3859 15.2512 13.4333C15.3939 13.4807 16.25 13.9073 16.3927 14.0021C16.5829 14.0969 16.678 14.1443 16.7256 14.1917C16.7732 14.3339 16.7732 14.6656 16.6305 15.0448Z"
                  fill="#D2B44D"
                />
              </svg>
            </a>
            <a href="">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13" cy="13" r="13" fill="#FFEDAF" />
                <path
                  d="M17.2768 7.8H9.37182C8.47932 7.8 7.79932 8.48 7.79932 9.3725V17.2775C7.79932 18.17 8.47932 18.85 9.37182 18.85H17.2768C18.1693 18.85 18.8493 18.17 18.8493 17.2775V9.3725C18.8493 8.48 18.1693 7.8 17.2768 7.8ZM13.3243 16.64C15.1518 16.64 16.6393 15.195 16.6393 13.4525C16.6393 13.155 16.5968 12.815 16.5118 12.56H17.4468V17.065C17.4468 17.2775 17.2768 17.49 17.0218 17.49H9.62682C9.41432 17.49 9.20182 17.32 9.20182 17.065V12.5175H10.1793C10.0943 12.815 10.0518 13.1125 10.0518 13.41C10.0093 15.195 11.4968 16.64 13.3243 16.64ZM13.3243 15.365C12.1343 15.365 11.1993 14.43 11.1993 13.2825C11.1993 12.135 12.1343 11.2 13.3243 11.2C14.5143 11.2 15.4493 12.135 15.4493 13.2825C15.4493 14.4725 14.5143 15.365 13.3243 15.365ZM17.4043 10.8175C17.4043 11.0725 17.1918 11.285 16.9368 11.285H15.7468C15.4918 11.285 15.2793 11.0725 15.2793 10.8175V9.67C15.2793 9.415 15.4918 9.2025 15.7468 9.2025H16.9368C17.1918 9.2025 17.4043 9.415 17.4043 9.67V10.8175Z"
                  fill="#D2B44D"
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
        </div>
        <BaseNote />
      </Content>
      <Footer />
    </div>
  );
};

export default ShareStory
