import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface DividedFeaturedPostProps {
	post: {
		description?: string;
		title?: string;
	}[];
}

export default function DividedFeaturedPost(props: DividedFeaturedPostProps) {
	const { post } = props;

	var test = post.map((dividedPost) => {
		return (
			<Paper
				sx={{
					position: "relative",
					backgroundColor: "grey.800",
					color: "#fff",
					mb: 4,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			>
				{/* Increase the priority of the hero background image */}
				<Box
					sx={{
						position: "absolute",
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						backgroundColor: "rgba(0,0,0,.3)",
					}}
				/>
				<Grid container>
					<Grid item md={6}>
						<Box
							sx={{
								position: "relative",
								p: { xs: 3, md: 6 },
								pr: { md: 0 },
							}}
						>
							<Typography
								component="h1"
								variant="h3"
								color="inherit"
								gutterBottom
							>
								{dividedPost.title}
							</Typography>
							<Typography variant="h5" color="inherit" paragraph>
								{dividedPost.description}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Paper>
		);
	});
	return test;
}
