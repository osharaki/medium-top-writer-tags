import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
export default (props) => {
  // const [value, setValue] = React.useState([0, 50]);

  function valuetext() {
    return `Showing tags with ${props.value[0]} to ${props.value[1]} writers`;
  }

  const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  const slider = (
    <Slider
      value={props.value}
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
