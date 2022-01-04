
export interface storyStateProps {
    email: string;
    name: string;
    title: string;
    content: string;
    image: string;
    date: string;
    likes: number;
    views: number;
}

interface authActionProps {
    story: storyStateProps;
    type: string;
}

export const StoryReducer = (state: storyStateProps, action: authActionProps) => {
    switch (action.type) {
        case "UPDATE_STORY":
            return action.story;
        case "EMPTY_STORY":
            return {
                email: "string",
                name: "",
                title: "",
                content: "",
                image: "",
                date: "",
                likes: 0,
                views: 0,
            };
        default:
            return state;
    }
}