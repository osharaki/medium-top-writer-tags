import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    marginBottom: 50,
  },
}));

function renderRow(props) {
  const { index, data, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText
        primary={`${data.tags[index]} ${data.writerCounts[index]}`}
      />
    </ListItem>
  );
}

export default (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList
        height={400}
        width={300}
        itemSize={46}
        itemCount={props.tags.length}
        itemData={{ tags: props.tags, writerCounts: props.writerCounts }}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
};
