import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import styled from "styled-components";
// import { EditorState, ContentState } from "draft-js";
// import "/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Editor from "react-medium-editor";
import { useEffect, useState } from "react";

const Form = styled.form`
  margin: 48px 0 164px 0;
`;
const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border: 1px solid #f5f5f5;
  margin: 16px 0 12px 0;
  padding: 16px;
  font-size: 14px;
  &:placeholder {
    color: #9e9e9e;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;
const InputNote = styled.p`
  font-size: 12px;
  font-style: italic;
`;
const Email = styled.div`
  padding: 0 32px 30px 32px;
  border-bottom: 1px solid #efefef;
`;
const Name = styled.div`
  padding: 30px 32px;
  //   border-bottom: 1px solid #efefef;
`;
const Button = styled.button<ButtonStyleProps>`
  height: 50px;
  width: 100%;
  background-color: ${(props) =>
    props.styleEnabled ? props.theme.colors.blue : "#a6a6a6"};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  margin-top: 57px;
  &:disabled {
    background-color: #a6a6a6;
  }
`;

interface ButtonStyleProps {
  styleEnabled?: boolean;
  theme?: "theme";
}

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

interface StoryDetailsProps {
  onSubmit: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const StoryDetails: React.FC<StoryDetailsProps> = ({
  onSubmit,
  title,
  setTitle,
  content,
  setContent,
}) => {
  const [buttonDisplay, setButtonDisplay] = useState(false);

  useEffect(() => {
    if (title !== "" && content !== "<p><br></p>") {
      setButtonDisplay(true);
    } else {
      setButtonDisplay(false);
    }
  }, [content, title]);

  const handleClick = () => {
    if (title !== "" && content !== "") {
      onSubmit(2);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Form>
      <Email>
        <Label htmlFor="">Give your story a title, something nice!</Label>
        <Input
          type="text"
          placeholder="Type the title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputNote>
          E.g. The year i found hope, God helped me make moves this year! etc
        </InputNote>
      </Email>
      <Name>
        <Label htmlFor="">This is where you type the whole gist</Label>
        {/* <Editor
          placeholder="Type your story here"
          editorStyle={{ marginBottom: "12px" }}
          editorState={editorState}
          handlePastedText={() => false}
          spellCheck={false}
          onEditorStateChange={(editorState: EditorState) => {
            // console.log(editorState)
            setEditorState(editorState);
          }}

        /> */}
        <div className="app">
          <Editor
            text={content}
            onChange={(text: string) => {
              setContent(text);
            }}
          />
        </div>
        <InputNote>
          <InputNote>
            Don’t leave out the juices, we are here for all of it!
          </InputNote>
        </InputNote>
        <Button
          styleEnabled={buttonDisplay}
          onClick={(e) => {
            e.preventDefault();
            // onSubmit(2)
            handleClick();
            // window.scrollTo(0, 0)
          }}
        >
          Next
        </Button>
        <Back
          onClick={(e) => {
            e.preventDefault();
            onSubmit(0);
            window.scrollTo(0, 0);
          }}
        >
          Back
        </Back>
      </Name>
    </Form>
  );
};
export default StoryDetails;
