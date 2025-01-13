import { Box, Card, Typography } from "@mui/material";

interface VideoImgProps {
  title: string;
  project: string;
}

const VideoCard = ({ title, project }: VideoImgProps) => (
  <Card
    sx={{
      boxShadow: "none",
      backgroundColor: "#141418",
      color: "#E6E0E9",
    }}
  >
    <Box
      component="img"
      src="https://s3-alpha-sig.figma.com/img/66e3/3dec/1d50ec7c56cfea569c3daeda06734ffa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqVypQMn0G8V~Dww6RVNcT5oyP8dUtIeC~WF6Kfqr~0gZSlmFh0ESLRM2W6aGmJsimAHPR~JXX1jGN-uK2Orkizjb1VbpEPVV7XFENSlH5sjomJlRU~CeyrUPAY0WlEkCBi-qjjNwpynG3Rl5nVlv1GzSi9tQAIFoeqaljZlzNLn41iDdOgB5ORenRIA6rpdRh4H5BbTD8XoVnHnEQub64lIA-sCtyxXXRvbB2XbPNvXIhT2BncIoIXFFDe1WNH7JfoeNsdZK~UhUb3-g0hqZqu3INz3pGFjZH2bdS88nQQCrEA7B~84Ca1jkaDrbo~QL08WrCer2Bz69MFwg76wmA__"
      alt="placeholder"
      sx={{
        width: "80%",
        maxWidth: "100%",
        borderRadius: "8%",
      }}
    />
    <Typography variant="h6" component="div">
      {title}
    </Typography>
    <Typography variant="body2">Project: {project}</Typography>
  </Card>
);

export default VideoCard;