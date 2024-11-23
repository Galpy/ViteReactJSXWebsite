import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import jjteam from "../assets/images/jjteam.png";
import muayThai from "../assets/images/muaythai.png";
import trainjjchangeyourlifeLogo from "../assets/images/trainjjchangeyourlife.png";
import FeaturedImage from "./FeaturedImage";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import Main from "./Main";
import MainFeaturedPost from "./MainFeaturedPost";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

// const sections = [
//   { title: "Technology", url: "#" },
//   { title: "Design", url: "#" },
//   { title: "Culture", url: "#" },
//   { title: "Business", url: "#" },
//   { title: "Politics", url: "#" },
//   { title: "Opinion", url: "#" },
//   { title: "Science", url: "#" },
//   { title: "Health", url: "#" },
//   { title: "Style", url: "#" },
//   { title: "Travel", url: "#" },
// ];

const mainFeaturedPost = {
	image: trainjjchangeyourlifeLogo,
};

const featuredPosts = {
	title:
		"Welcome to our Jiu Jitsu academy in the vibrant community of Port Isabel, TX!",
	description:
		"At our academy, we embrace diversity and offer classes suitable for everyone, including men, women, and children of all ages. Whether you’re a seasoned practitioner or new to the world of Jiu Jitsu, our doors are open to you.",
};

const splitPosts = [
	{
		title: "JIU-JITSU ",
		description:
			"Immerse yourself in the art of Jiu Jitsu, a martial art that focuses on ground fighting and grappling techniques. Whether you’re a beginner looking to build a strong foundation or an experienced practitioner seeking to refine your skills, our Jiu Jitsu classes provide a supportive and challenging environment. Join our passionate instructors and fellow enthusiasts to enhance your physical strength, improve your coordination, and develop effective self-defense techniques.",
		image: muayThai,
	},
	{
		title: "MMA + BOXING + MUAY THAI",
		description:
			"Explore the dynamic world of mixed martial arts (MMA), boxing, and Muay Thai. Our comprehensive training program combines the best elements of these combat sports to create a well-rounded experience. Through expert guidance and structured training sessions, you’ll learn striking techniques, footwork, defensive maneuvers, and effective combinations. Push your limits, gain confidence, and sculpt your physique while engaging in an intense, yet safe, training regimen that caters to all skill levels.",
		image: jjteam,
	},
];

const posts = ["testing"];

const sidebar = {
	title: "About",
	description:
		"Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
	archives: [
		{ title: "March 2020", url: "#" },
		{ title: "February 2020", url: "#" },
		{ title: "January 2020", url: "#" },
		{ title: "November 1999", url: "#" },
		{ title: "October 1999", url: "#" },
		{ title: "September 1999", url: "#" },
		{ title: "August 1999", url: "#" },
		{ title: "July 1999", url: "#" },
		{ title: "June 1999", url: "#" },
		{ title: "May 1999", url: "#" },
		{ title: "April 1999", url: "#" },
	],
	social: [
		{ name: "GitHub", icon: GitHubIcon },
		{ name: "Twitter", icon: TwitterIcon },
		{ name: "Facebook", icon: FacebookIcon },
	],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
	typography: {
		fontFamily: "Archivo Black",
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			@font-face {
			text-align: center;
			font-family: "Archivo Black", sans-serif;
			font-size: 16px;
			}
		`,
		},
	},
});

export default function Blog() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<Container maxWidth="lg">
				<Nav />
				{/* <Header title="Blog" sections={sections} /> */}
				<main>
					<FeaturedImage post={mainFeaturedPost} />
					<MainFeaturedPost post={featuredPosts} />
					<Grid container spacing={4}>
						{splitPosts.map((post) => (
							<FeaturedPost key={post.title} post={post} />
						))}
					</Grid>
					<Grid container spacing={5} sx={{ mt: 3 }}>
						<Main title="From the firehose" posts={posts} />
						<Sidebar
							title={sidebar.title}
							description={sidebar.description}
							archives={sidebar.archives}
							social={sidebar.social}
						/>
					</Grid>
				</main>
			</Container>
			<Footer />
		</ThemeProvider>
	);
}
