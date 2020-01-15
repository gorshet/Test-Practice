import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
	return (
		<div className="container">
			<h1>Teams and Channel List</h1>
			<div className="row-first">
				<div className="col-test">
					<strong>Add Team</strong>
				</div>
				<div className="col-second">
					<div className="input-group form-group">
						<input type="text" className="form-control" placeholder="Team Name" />
						<div clase="input-group-append">
							<button className="btn btn-outline-secondary" type="button" id="button-addon2">
								Button
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
