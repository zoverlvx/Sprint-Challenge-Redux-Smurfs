import React from "react";

import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

export default function ({smurfs}) {

	return (
		<div>
			{
				smurfs.map(smurf => <Smurf {...smurf} />)
			}
			<SmurfForm />
		</div>
	)
}
