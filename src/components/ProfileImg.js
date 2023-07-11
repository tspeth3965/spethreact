import React from 'react'
import "./ProfileImgStyles.css"

import ProfilePicture from "../assets/profilepic.jpg";

const ProfileImg = () => {
	return (
		<div className="container">
			<img className="profileimg" src={ProfilePicture} alt="Profile Image" />
		</div>
	)
};

export default ProfileImg;