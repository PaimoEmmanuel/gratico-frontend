import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { StoryContext } from "../../contexts/write-story-context";

const Button = styled.button`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  margin-top: 50px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
`;
const Back = styled.button`
  border: none;
  text-decoration: underline;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-top: 24px;
`;
const Label = styled.p`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  margin-bottom: 16px;
`;
const Container = styled.div`
  padding: 54px 32px;
`;
const PictureFrame = styled.div`
  height: 240px;
  width: 240px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
`;
const Select = styled.label`
  font-size: 14px;
  border: 1px solid #ababbb;
  border-radius: 6px;
  padding: 12px 28px;
  display: block;
  width: fit-content;
  margin: 0 auto;
  margin-top: 10px;
`;
interface WriterDetailsProps {
  onSubmit: any;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  handlePreview: () => void;
}
const CoverPhoto: React.FC<WriterDetailsProps> = ({
  onSubmit,
  image,
  setImage,
  handlePreview,
}) => {
  const history = useHistory();

  return (
    <Container>
      <Label>Upload a cover photo</Label>
      <PictureFrame>
        {image && <img src={image} style={{ width: "100%" }} />}
      </PictureFrame>
      <Select htmlFor="file">Select an image</Select>
      <input
        style={{ visibility: "hidden" }}
        onChange={(e) => {
          setImage(
            e.target.files ? URL.createObjectURL(e.target.files[0]) : ""
          );
        }}
        type="file"
        name="file"
        id="file"
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          onSubmit(2);
          window.scrollTo(0, 0);
          handlePreview()
          history.push("/preview");
        }}
      >
        Preview story
      </Button>
      <Back
        onClick={(e) => {
          e.preventDefault();
          onSubmit(1);
          window.scrollTo(0, 0);
        }}
      >
        Back
      </Back>
    </Container>
  );
};
export default CoverPhoto;
