export interface storyUpdateStateProps {
    email?: string;
    name?: string;
    title?: string;
    content?: string;
    image?: string;
    date?: string;
    likes?: number;
    views?: number;
}
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
    // update: storyUpdateStateProps;
}

export const StoryReducer = (state: storyStateProps, action: authActionProps) => {
    switch (action.type) {
        case "UPDATE_STORY":
            return action.story;
        default:
            return state;
    }
}