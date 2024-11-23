import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

interface FeaturedPostProps {
	post: {
		date?: string;
		description: string;
		image?: string;
		imageLabel?: string;
		title: string;
	};
	height?: string;
}

export default function FeaturedPost(props: FeaturedPostProps) {
	const { post } = props;
	const [showMore, setShowMore] = useState(false);

	return (
		<Grid
			item
			xs={12}
			md={6}
			height={props.height || "auto"}
			style={{ display: "inline-block" }}
		>
			<Card sx={{ boxShadow: "none" }}>
				<CardContent sx={{ height: props.height }}>
					<Typography
						variant="subtitle1"
						color={"gray"}
						fontSize={"18px"}
						sx={{ mb: 1.5 }}
					>
						{post.title}
					</Typography>
					<Typography variant="subtitle1" paragraph fontSize={"12px"}>
						{showMore
							? post.description
							: post.description.substring(0, 100) + "..."}
					</Typography>
					<Button
						variant="text"
						sx={{ color: "black" }}
						onClick={() => setShowMore(!showMore)}
					>
						{showMore ? "Show Less" : "Show More"}
					</Button>
				</CardContent>
				{post.image ? (
					<CardMedia
						component="img"
						sx={{ width: 160, display: { xs: "none", sm: "block" } }}
						image={post.image}
						alt={post.imageLabel}
					/>
				) : (
					<></>
				)}
			</Card>
		</Grid>
	);
}
