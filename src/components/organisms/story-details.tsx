import styled from "styled-components";
import { EditorState, ContentState } from "draft-js";
import "/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
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
const Button = styled.button`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  margin-top: 50px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
`;
const StoryDetails: React.FC = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText("abcde"))
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <Form>
      <Email>
        <Label htmlFor="">Give your story a title, something nice!</Label>
        <Input type="text" placeholder="Input your email address here" />
        <InputNote>
          E.g. The year i found hope, God helped me make moves this year! etc
        </InputNote>
      </Email>
      <Name>
        <Label htmlFor="">This is where you type the whole gist</Label>
        <Editor
          placeholder="Type your story here"
          editorStyle={{ marginBottom: "12px" }}
          editorState={editorState}
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
        <Button>Next</Button>
      </Name>
    </Form>
  );
};
export default StoryDetails;
