import { createContext, useReducer } from "react";
import { ImageFileReducer } from "../reducers/image-file-reducer";

interface IFileContext {
  imageFile: any;
  setImageFile: (imageFile: any) => void;
}

export const ImageFileContext = createContext<IFileContext>({
  imageFile: "",
  setImageFile: (imageFile: any) => {},
});

const ImageFileContextProvider: React.FC = ({ children }) => {
  const [imageFile, dispatch] = useReducer(ImageFileReducer, "");
  const setImageFile = (imageFile: any) =>
    dispatch({ type: "UPDATE_IMAGE", imageFile });
  return (
    <ImageFileContext.Provider value={{ imageFile, setImageFile }}>
      {children}
    </ImageFileContext.Provider>
  );
};

export default ImageFileContextProvider;
