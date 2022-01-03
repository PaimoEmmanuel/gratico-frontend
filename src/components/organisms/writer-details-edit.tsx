import styled from "styled-components";
import { EditorState, ContentState } from "draft-js";
import "/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML, convertFromHTML } from "draft-convert";
import { useState, useEffect } from "react";

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
  border-bottom: 1px solid #efefef;
`;
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
interface WriterDetailsProps {
  onSubmit: React.Dispatch<React.SetStateAction<number>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  title: string;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
}
const WriterDetailsEdit: React.FC<WriterDetailsProps> = ({
  title,
  setTitle,
  name,
  setName,
  content,
  setContent,
  onSubmit,
}) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromHTML(content))
  );
  useEffect(() => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());

    setContent(currentContentAsHTML);
  }, [editorState]);
  return (
    <Form>
      <Email>
        <Label>Edit your name</Label>
        <Input
          type="text"
          placeholder="Type the title here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputNote>You can edit your stories using this email.</InputNote>
      </Email>
      <Name>
        <Label>Edit your story title</Label>
        <Input
          type="text"
          placeholder="Type the title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Name>
      <Name>
        <Label htmlFor="">This is where you type the whole gist</Label>
        <Editor
          placeholder="Type your story here"
          editorStyle={{ marginBottom: "12px" }}
          editorState={editorState}
          handlePastedText={() => false}
          onEditorStateChange={(editorState: EditorState) => {
            // console.log(editorState)
            setEditorState(editorState);
          }}
          //   ref={this.editorRef}
          //   readOnly={!editMode}
          // toolbarHidden={true}
          toolbar={
            {
              // inline: { inDropdown: true },
              // list: { inDropdown: true },
              // textAlign: { inDropdown: true },
              // link: { inDropdown: true },
              // history: { inDropdown: true },
              // image: {
              //   uploadCallback: uploadImageCallBack,
              //   alt: { present: true, mandatory: true },
              // },
            }
          }
        />
        <InputNote>
          <InputNote>
            Don’t leave out the juices, we are here for all of it!
          </InputNote>
        </InputNote>
        <Button
          onClick={(e) => {
            e.preventDefault();
            onSubmit(2);
            window.scrollTo(0, 0);
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
export default WriterDetailsEdit;
