import React from "react";
//import new stuff
import { JumbotronMaker } from "./JumbotronMaker";
import { CardMaker } from "./CardMaker";
import { NavbarMaker } from "./NavbarMaker";

//create your first component
export function Home() {
	return (
		<div className="mx-5 my-2">
			<div>
				<NavbarMaker />{" "}
			</div>

			<JumbotronMaker title="woohoo" />
			<div className="d-flex justify-content-between">
				<CardMaker
					title="title uno!"
					img="https://place-hold.it/500x325"
					text=""
					href=""
					buttonLabel=""
				/>
				<CardMaker
					title="title two!"
					img="https://place-hold.it/500x325"
					text=""
					href=""
					buttonLabel=""
				/>
				<CardMaker
					title="title troi!"
					img="https://place-hold.it/500x325"
					text=""
					href=""
					buttonLabel=""
				/>
				<CardMaker
					title="title shi!"
					img="https://place-hold.it/500x325"
					text=""
					href=""
					buttonLabel=""
				/>
			</div>
		</div>
	);
}
