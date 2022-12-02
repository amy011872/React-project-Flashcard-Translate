import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import useAxios from "./useAxios";
import axios from "./testApi";

export default function Joke() {
  const [data, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
  });

  return (
    <Container maxWidth="lg" className="cardGrid">
      <Typography variant="h3" className="jokes">
        \Joke API Testing/
      </Typography>
      <Grid container>
        <Grid item>
          {loading && (
            <Typography variant="h4" gutterBottom>
              Loading...
            </Typography>
          )}
        </Grid>
        <Grid item>
          {!loading && error && (
            <Typography variant="h4" gutterBottom>
              {error}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {!loading && !error && data && (
            <Typography variant="h4" gutterBottom className="jokes">
              {data?.joke}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {!loading && !error && !data && (
            <Typography variant="h4" gutterBottom>
              Nothing to display now.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
