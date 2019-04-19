import React, {useState} from "react";

export default function (props) {
	const [state, setState] = useState("");
	return (
		<form>
			<input 
				type="text"
				name="smurf"
				value={state}
				onChange={({target: {value}}) => setState(value)}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}
