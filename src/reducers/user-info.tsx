// reducer 정의
export const setUserName = (userName: string) => ({
    type: "SETUSERNAME" as const,
    userName
});

// set main reducer
type UserInfo = ReturnType<typeof setUserName>

const init = {
    userName: 'Conative'
};

const userInfo = (state = init, action: UserInfo) => {
    switch (action.type) {
        case "SETUSERNAME":
            return {
                ...state,
                userName: action.userName
            };

        default:
            return state;
    }
};

export default userInfo;