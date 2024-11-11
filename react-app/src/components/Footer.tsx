import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://bkcjiujitsu.com/">
        BKC Jiujitsu
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom>
          {"BKC Jiujitsu"}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {"Email: BKCJiujitsu@gmail.com"}
          <br />
          {"Address: 114 E. Queen Isabella Blvd, Port Isabel, TX 78578"}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
