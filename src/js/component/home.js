import React from "react";
//import new stuff
import { JumbotronMaker } from "./JumbotronMaker";
import { CardMaker } from "./CardMaker";
import { NavbarMaker } from "./NavbarMaker";

//create your first component
export function Home() {
	return (
		<div className="mx-5">
			<div className="mb-5 pb-5">
				<NavbarMaker />{" "}
			</div>

			<div className="mx-auto mt-5">
				<JumbotronMaker title="woohoo" />{" "}
			</div>

			<div className="d-flex flex-wrap justify-content-around my-5">
				<CardMaker
					title="title uno!"
					img="https://picsum.photos/500/300?random=1"
					text="Vitae congue eu consequat ac felis donec et odio. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Semper risus in hendrerit gravida rutrum quisque non tellus. Mauris sit amet massa vitae tortor condimentum. Feugiat in fermentum posuere urna nec. Ultricies integer"
					href=""
					buttonLabel="click this"
				/>
				<CardMaker
					title="title two!"
					img="https://picsum.photos/500/300?random=2"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
					href=""
					buttonLabel="or this one"
				/>
				<CardMaker
					title="title troi!"
					img="https://picsum.photos/500/300?random=3"
					text="irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
					href=""
					buttonLabel="or here"
				/>
				<CardMaker
					title="title shi!"
					img="https://picsum.photos/500/300?random=4"
					text="Amet est placerat in egestas erat. Mattis molestie a iaculis at erat. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Sed vulputate mi sit amet mauris. Tincidunt arcu non sodales neque sodales ut urabitur."
					href=""
					buttonLabel="any one"
				/>
			</div>
		</div>
	);
}
