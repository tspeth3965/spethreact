import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
						<div>
							<p>Raleigh (Clayton), NC</p>
							<p>27520</p>
						</div>
					</div>
					<div className="phone">
						<h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />123-456-7890</h4>
					</div>
					<div className="email">
						<h4>
							<FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
							<a href="mailto:tiffanydoesdesign@gmail.com" style={{ color: "white" }}>
								tiffanydoesdesign@gmail.com
							</a>
						</h4>
					</div>

				</div>
				<div className="right">
					<h4>About Me</h4>
					<p>I am a student at Wake Technical College aspiring to be a professional UI/UX designer.
						I am actively looking for an internship at this time as I continue to pursue my degree.</p>
					<div className="social">
						<FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
						<FaInstagram size={30} style={{ color: "white", marginRight: "1rem" }} />
						<a href="https://www.linkedin.com/in/t-speth" target="_blank" rel="noreferrer">
							<FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
						</a>

					</div>
				</div>

			</div>
		</div >



	)
}

export default Footer