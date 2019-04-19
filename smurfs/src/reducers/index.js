import {
	FETCHING_SMURFS,
	GET_SMURFS,
	UPDATING_SMURF,
	UPDATE_SMURF,
	DELETING_SMURF,
	DELETE_SMURF,
	CREATING_SMURF,
	CREATE_SMURF,
	ERROR	
} from "../actions";

const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null
};

export default function (state = initialState, action) {
	switch(action.type) {
		case FETCHING_SMURFS: 
			return {
				...state,
				fetchingSmurfs: true
			};
		case GET_SMURFS:
			return {
				...state,
				smurfs: action.payload,
				fetchingSmurfs: false
			};
		case UPDATING_SMURF:
			return {
				...state,
				updatingSmurf: true
			};
		case UPDATE_SMURF:
			return {
				...state,
				smurfs: action.payload,
				updatingSmurf: false
			};
		case DELETING_SMURF:
			return {
				...state,
				deletingSmurf: true
			};
		case DELETE_SMURF:
			return {
				...state,
				smurfs: action.payload,
				deletingSmurf: false
			};
		case CREATING_SMURF:
			return {
				...state,
				addingSmurf: true
			};
		case CREATE_SMURF:
			return {
				...state,
				smurfs: action.payload,
				addingSmurf: false
			};
		case ERROR:
			return {
				...state,
				fetchingSmurfs: false,
				addingSmurf: false,
				deletingSmurf: false,
				updatingSmurf: false,
				error: action.payload
			};
		default:
			return state;
	}
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
