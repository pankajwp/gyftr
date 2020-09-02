// REDUCERS
import { actionTypes } from "../actions/types";

const exampleInitialState = {
	catData: [],
	loading: null,
};

const reducer = (state = exampleInitialState, action) => {
	switch (action.type) {
		case actionTypes.LOAD_NAVIGATION_CAT:
			return {
				...state,
				catData: action.listData,
			};
		case actionTypes.LOADING_START:
			return {
				...state,
				loading: true,
			};
		case actionTypes.LOADING_ENDS:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};

export default reducer;
