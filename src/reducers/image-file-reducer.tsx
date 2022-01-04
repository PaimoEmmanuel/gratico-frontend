interface ImageFileActionProps {
  imageFile: any;
  type: string;
}

export const ImageFileReducer = (
  state: string,
  action: ImageFileActionProps
) => {
  switch (action.type) {
    case "UPDATE_IMAGE":
      return action.imageFile;
    default:
      return state;
  }
};
