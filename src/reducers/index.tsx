import { combineReducers } from "redux";
import userInfo from "./user-info";

// 저장된 모든 Reducer들을 한곳으로 합쳐준다.
const rootReducer = combineReducers({
    userInfo
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;