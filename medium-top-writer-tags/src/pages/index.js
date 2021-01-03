import * as React from "react";
import { TextField } from "@material-ui/core";
import Slider from "../components/Slider";
import SortMenu from "../components/SortMenu";
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          id="outlined-search"
          label="Search for tag"
          type="search"
          variant="outlined"
          style={{ width: "200px" }}
        />
        <SortMenu />
      </div>
      <Slider />
    </div>
  );
};

export default IndexPage;
