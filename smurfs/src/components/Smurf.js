import React from "react";

export default function({name, age, height, id}) {
	return (
		<div key={id}>
			<div>{name}</div>
			<div>{age}</div>
			<div>{height}</div>
			<button>Delete</button>
		</div>
	);
}
