import React from "react";
import Header from "./Header";
import {
  Box,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import useStyles from "./style";

export default function About() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header title={"ABOUT"} />
      <Container maxWidth="sm" align="left">
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIehkWNz0RnDdCo5sB1H3DTePjD1cXigpQSw&usqp=CAU"
            title="IMG title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5">
              周昕妤 (Amy Chou)
            </Typography>
            <Typography>R10142008</Typography>
            <Typography>Email: r10142008@ntu.edu.tw</Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
