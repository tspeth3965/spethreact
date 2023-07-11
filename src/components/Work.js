import "./WorkCardStyles.css";
import React from "react";
import WorkCardData from "./WorkCardData";
import WorkCard from "./WorkCard";
import collage from "../assets/speth_sp.jpg";
import { NavLink } from 'react-router-dom';

const Work = () => {
	return (
		<div className="work-container">
			<h1 className="project-heading"></h1>
			<div className="project-container">
				{WorkCardData.map((data, index) =>
					<WorkCard
						key={index}
						imgsrc={data.imgsrc}
						title={data.title}
						text={data.text}
						view={data.view}
					/>
				)}
			</div>
		</div>
	);
};

export default Work;