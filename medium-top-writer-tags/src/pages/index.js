import * as React from "react";
import { TextField } from "@material-ui/core";
import Slider from "../components/Slider";
import SortMenu from "../components/SortMenu";
import Results from "../components/Results";
import tags from "../utils/mock-tags";
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

      <p style={{ textAlign: "center" }}>Medium Top Writer Tags</p>
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
      <Results
        tags={tags}
        writerCounts={((tags) =>
          Array.from({ length: tags.length }, () =>
            Math.floor(Math.random() * 51)
          ))(tags)}
      />
    </div>
  );
};

export default IndexPage;
