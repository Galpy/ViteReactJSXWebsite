import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

interface FeaturedImageProps {
	post: {
		image?: string;
		imageLabel?: string;
	};
	height?: string;
}

export default function FeaturedImage(props: FeaturedImageProps) {
	const { post } = props;

	return (
		<Grid
			item
			xs={12}
			md={6}
			height={props.height || "auto"}
			style={{ display: "inline-block" }}
		>
			<Card sx={{ outline: "none", boxShadow: "none" }}>
				{post.image ? (
					<CardMedia
						component="img"
						sx={{
							display: "block",
							marginLeft: "auto",
							marginRight: "auto",
							paddingLeft: 2,
						}}
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
