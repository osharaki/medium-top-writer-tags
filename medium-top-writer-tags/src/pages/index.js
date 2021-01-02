import * as React from "react";
import TextField from "@material-ui/core/TextField";

import Slider from "../components/slider";
// TODO Understand slider better and move to own component if necessary

const IndexPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <p style={{ textAlign: "center" }}>Hello World!</p>
      <TextField
        id="outlined-search"
        label="Search for tag"
        type="search"
        variant="outlined"
        align
        style={{ width: "200px" }}
      />
      <Slider />
    </div>
  );
};

export default IndexPage;
