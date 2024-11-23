import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface MainFeaturedPostProps {
	post: {
		description?: string;
		image?: string;
		imageText?: string;
		title?: string;
	};
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
	const { post } = props;

	return (
		<Paper
			sx={{
				position: "relative",
				mb: 4,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundImage: `url(${post.image})`,
				boxShadow: "none",
			}}
		>
			{/* Increase the priority of the hero background image */}
			{post.image ? (
				<img
					style={{ display: "none" }}
					src={post.image}
					alt={post.imageText}
					height={"auto"}
				/>
			) : (
				<></>
			)}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					bottom: 0,
					right: 0,
					left: 0,
				}}
			/>
			<Grid container>
				<Grid item md={8}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							p: { xs: 3, md: 6 },
							pr: { md: 0 },
							justifyContent: "flex-start",
							alignItems: "flex-start",
						}}
					>
						<Typography
							component="h1"
							variant="h4"
							color="inherit"
							gutterBottom
							textAlign={"left"}
						>
							{post.title}
						</Typography>
						<Typography
							variant="subtitle1"
							color="inherit"
							paragraph
							textAlign={"left"}
						>
							{post.description}
						</Typography>
						<Button
							variant="contained"
							sx={{
								color: "white",
								outline: "black",
								backgroundColor: "black",
							}}
						>
							Learn more about BKC →
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
}
