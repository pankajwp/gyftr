import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import navReducer from "./navReducer";

const persistConfig = {
	key: "brand",
	storage,
	whitelist: ["catData"], // place to select which state you want to persist
};

const rootReducer = combineReducers({
	navigation: persistReducer(persistConfig, navReducer),
});

export default rootReducer;
