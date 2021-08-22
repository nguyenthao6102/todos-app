import React from "react";
import "./index.scss";

function Filter({ tab, setTab }) {
	return (
		<div className="filter d-flex justify-content-center">
			<ul className="tabs d-inline-block list-unstyled mb-0">
				<li
					className={`tab d-inline-block${tab === 1 ? " active" : ""}`}
					onClick={() => setTab(1)}
				>
					All
				</li>
				<li
					className={`tab d-inline-block${tab === 2 ? " active" : ""}`}
					onClick={() => setTab(2)}
				>
					Active
				</li>
				<li
					className={`tab d-inline-block${tab === 3 ? " active" : ""}`}
					onClick={() => setTab(3)}
				>
					Completed
				</li>
			</ul>
		</div>
	);
}

export default Filter;
