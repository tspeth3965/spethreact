import "./WorkCardStyles.css";
import React from "react";
import collage from "../assets/speth_sp.jpg";
import { NavLink } from 'react-router-dom';

const WorkCard = ({ imgsrc, title, text, view }) => {
	return (
		<div className="project-card">
			<img src={imgsrc} alt={title} className="project-card-img" />
			<h2 className="project-title">{title}</h2>
			<div className="pro-details">
				<p>{text}</p>
				<div className="pro-btns">
					<NavLink to={view} className="btn">View</NavLink>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;