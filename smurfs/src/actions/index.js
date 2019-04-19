import axios from "axios";

export const ERROR = "ERROR";
export const GET_SMURFS = "GET_SMURFS";
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const CREATING_SMURF = "CREATING_SMURF";
export const CREATE_SMURF = "CREATE_SMURF";

export function getSmurfs() {
	const smurfs = axios.get("https://lambda-school-1-zoverlvx.c9users.io:8080/smurfs");
	return function(dispatch) {
		dispatch({type: FETCHING_SMURFS});
		smurfs
			.then(({data}) => {
				dispatch({type: GET_SMURFS, payload: data});
			})
			.catch(err => {
				dispatch({type: ERROR, payload: err});
			})
	}
}

export function addSmurf(smurf) {
	const newSmurf = axios.post("https://lambda-school-1-zoverlvx.c9users.io:8080/smurfs", smurf);
	return function(dispatch) {
		dispatch({type: CREATING_SMURF});
		newSmurf
			.then(({data}) => {
				dispatch({type: CREATE_SMURF, payload: data})	
			})
			.catch(err => dispatch({type: ERROR, payload: err}))
	}
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf X
   R - getSmurfs X
   U - updateSmurf
   D - deleteSmurf
*/
