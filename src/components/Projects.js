import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import sanityClient from "../sanity";

const FeaturedProjects = ({ featuredProjects }) => {
	return featuredProjects.map(item => {
		return (
			<div className="featured" key={item._id}>
				<div className="featured-img">
					<div className="overlap-img">
						<a rel="noreferrer" target="_blank" href={item.liveLink} title="Go to website">
							<img src={item.projectPicture.asset.url} alt="acm" />
						</a>
					</div>
				</div>
				<div className="featured-content">
					<h3 className="featured-title">{item.title}</h3>
					<div className="featured-pills">
						{item.skills.map(skill => (
							<span className="featured-pill" key={Math.random()}>
								{skill}
							</span>
						))}
					</div>
					<div className="featured-description">
						<BlockContent blocks={item.description} projectId="w8nlqrwa" dataset="production" />
					</div>
					<div className="featured-buttons">
						<a className="btn-portfolio" target="_blank" href={item.githubLink} rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} /> Code
						</a>
						<a className="btn-portfolio" rel="noreferrer" target="_blank" href={item.liveLink}>
							Live demo
						</a>
					</div>
				</div>
			</div>
		);
	});
};

const Projects = () => {
	const [featuredProjects, setFeaturedProjects] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "projects" && featured == true] | order(order asc) {
					_id,
					title,
					skills,
					description,
					githubLink,
					liveLink,
					order,
					featured,
					projectPicture{
						asset->{
							_id,
							url
						},
						alt
					}
				}`
			)
			.then(data => setFeaturedProjects(data));
	}, []);

	return (
		<Element id="portfolio" className="offset">
			<div className="custom-container portfolio-styles">
				<div className="portfolioTitle">
					<small>Featured Works</small>
					<h2>Portfolio</h2>
					<hr className="underline-section" />
				</div>
				<div className="showcase">
					<FeaturedProjects featuredProjects={featuredProjects} />
				</div>
				<Link to="/projects" className="see-more-button">
					...see more projects!
				</Link>
			</div>
		</Element>
	);
};

export default Projects;
