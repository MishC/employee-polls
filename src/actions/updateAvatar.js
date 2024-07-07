export const UPDATE_AVATAR = "UPDATE_AVATAR";

export function updateAvatar(avatar){

    return (dispatch, getState) => {
        const { authedUser } = getState();
return {
    type:"UPDATE_AVATAR",
    avatar
}
}