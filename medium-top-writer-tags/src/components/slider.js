import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
export default () => {
  const [value, setValue] = React.useState([0, 50]);

  function valuetext(value) {
    return `Showing tags with ${value[0]} to ${value[1]} writers`;
  }

  const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const slider = (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      getAriaValueText={valuetext}
      max={50}
    />
  );
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {slider.props.getAriaValueText(slider.props.value)}
      </Typography>
      {slider}
    </div>
  );
};
