import { createContext, useReducer } from "react";
import {
  StoryReducer,
  storyStateProps,
  // storyUpdateStateProps,
} from "../reducers/write-story-reducer";

interface IUserContext {
  story: storyStateProps;
  setStory: (story: storyStateProps) => void;
  emptyStory: () => void;
}
const initialState = {
  email: "",
  name: "",
  title: "",
  content: "",
  image: "",
  date: "",
  likes: 0,
  views: 0,
};
export const StoryContext = createContext<IUserContext>({
  story: initialState,
  setStory: (story: storyStateProps) => {},
  emptyStory: () => {},
});

const AuthContextProvider: React.FC = ({ children }) => {
  const [story, dispatch] = useReducer(StoryReducer, initialState);
  const setStory = (story: storyStateProps) =>
    dispatch({ type: "UPDATE_STORY", story });
  const emptyStory = () =>
    dispatch({ type: "EMPTY_STORY", story });
  return (
    <StoryContext.Provider value={{ story, setStory, emptyStory }}>
      {children}
    </StoryContext.Provider>
  );
};

export default AuthContextProvider;
