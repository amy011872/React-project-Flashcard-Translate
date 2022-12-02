import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Header({ title }) {
  return (
    <>
      <Typography id="header" variant="h1">
        {title}
      </Typography>
    </>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
