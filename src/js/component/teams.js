import React from "react";
import { Link } from "react-router-dom";

export const Teams = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-uno">
					Team 1{" "}
					<button type="button" className="btn btn-primary btn-sm">
						X
					</button>
				</div>
				<div className="col-dos">
					<div className="input-group form-group">
						<input type="text" className="form-control" placeholder="Channel Name" />
						<div clase="input-group-append">
							<button className="btn btn-outline-secondary" type="button" id="button-addon2">
								Add Channel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
