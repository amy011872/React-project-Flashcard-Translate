import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", //16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  lang: {
    color: "#ffffff",
    paddingBottom: 10,
  },
  jokes: {
    color: "#fcd68f",
    paddingBottom: 35,
  },
  btnTrans: {
    color: "#eeeeee",
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
}));

export default useStyles;
