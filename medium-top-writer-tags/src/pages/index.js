import * as React from "react";
import { TextField } from "@material-ui/core";
import Slider from "../components/Slider";
import SortMenu from "../components/SortMenu";
import Results from "../components/Results";
import { tags, writerCounts } from "../utils/mock-tags";

const IndexPage = () => {
  const [matchingTags, setMatchingTags] = React.useState([tags, writerCounts]);
  let textFieldValue = "";
  const [sliderRange, setSliderRange] = React.useState([0, 50]);

  const handleTextFieldChange = (query) => {
    textFieldValue = query;
    filterTags();
  };

  const handleSliderChange = (newSliderRange) => {
    setSliderRange(newSliderRange);
    filterTags();
  };

  const filterTags = () => {
    // console.log(`Calling filter tags..`);
    // console.log(`Slider range: ${sliderRange}`);
    const matchingTagsTmp = [[], []]; // empty list
    for (let i = 0; i < tags.length; i++) {
      if (
        tags[i].includes(textFieldValue) &&
        writerCounts[i] >= sliderRange[0] &&
        writerCounts[i] <= sliderRange[1]
      ) {
        matchingTagsTmp[0].push(tags[i]);
        matchingTagsTmp[1].push(writerCounts[i]);
      }
    }
    setMatchingTags(matchingTagsTmp);
  };

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
      <Slider value={sliderRange} setValue={handleSliderChange} />
      <Results tags={matchingTags[0]} writerCounts={matchingTags[1]} />
    </div>
  );
};

export default IndexPage;
