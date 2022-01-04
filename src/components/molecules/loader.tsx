import styled from "styled-components";

const LoaderFrame = styled.div`
  height: 224px;
  width: 224px;
  border: 1px solid #fad782;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
`;
const Load = styled.div`
  //   height: 120px;
  //   overflow: hidden;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  .inner {
    position: absolute;
    top: 0;
    height: 224px;
    width: 224px;
    object-fit: cover;
    animation: spin 4s linear infinite;
  }
`;

const Loader: React.FC = () => {
  return (
    <LoaderFrame>
      <Load>
        <svg
          width="224"
          height="224"
          viewBox="0 0 224 224"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="112"
            cy="112"
            r="111.5"
            stroke="#FAD782"
            stroke-opacity="0.4"
          />
        </svg>

        <svg
          className="inner"
          width="159"
          height="172"
          viewBox="0 0 159 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.3201 170.89C4.6695 150.55 -1.09519 126.678 0.879603 102.807C2.8544 78.9363 12.4637 56.3359 28.2847 38.3522C44.1057 20.3685 65.2974 7.95753 88.722 2.95695C112.147 -2.04362 136.559 0.632015 158.344 10.5877"
            stroke="white"
          />
        </svg>
      </Load>
    </LoaderFrame>
  );
};
export default Loader;
