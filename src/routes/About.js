import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProfileImg from "../components/ProfileImg";

const About = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading="ABOUT." text="I'm an aspiring UI/UX Designer with a passion of making people's quality of life better." />
			<ProfileImg />
			<Skills />
			<Experience />
			<Footer />
		</div>
	)
}

export default About;