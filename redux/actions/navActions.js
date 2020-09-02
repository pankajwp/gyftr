import { actionTypes } from "./types.js";
import axios from "axios";

export const getCatNav = () => async (dispatch) => {
	const { data } = await axios.get("/api/get-catgories");
	dispatch({ type: actionTypes.LOAD_NAVIGATION_CAT, listData: data.data });
};
