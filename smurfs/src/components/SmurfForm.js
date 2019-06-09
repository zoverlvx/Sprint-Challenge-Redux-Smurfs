import React, {useState} from "react";
import {connect} from "react-redux";

import {addSmurf} from "../actions";

function SmurfForm(props) {
	const [state, setState] = useState({name: "", age: "", height: ""});
	function handleChange(e) {
		setState({...state, [e.target.name]: e.target.value});
	}
	function handleSubmit(e) {
		e.preventDefault();
		if (state.name && state.age && state.height) {
			props.addSmurf(state);
		}
		if (!state.name || !state.age || !state.height) {
			alert("All smurf fields required...smurf smurf");
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<input 
				type="text"
				name="name"
				value={state.name}
				onChange={handleChange}
			/>
			<input 
				type="text"
				name="age"
				value={state.age}
				onChange={handleChange}
			/>
			<input 
				type="text"
				name="height"
				value={state.height}
				onChange={handleChange}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default connect(() => {}, {addSmurf})(SmurfForm);
