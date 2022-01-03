interface authActionProps {
    token: string;
    type: string;
    // update: storyUpdateStateProps;
}

export const TokenReducer = (state: string, action: authActionProps) => {
    switch (action.type) {
        case "UPDATE_TOKEN":
            return action.token;
        default:
            return state;
    }
}