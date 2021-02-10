import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const navStyles = (theme) => ({
  box: {
    marginTop: "3%",
    marginBottom: "3%",
  },
  label: {
    color: "#616161",
    fontSize: "20px",
    marginTop: "20px",
    fontWeight: "bold",
  },
  description: {
    color: "#616161",
    fontSize: "15px",
    margin: "40px",
    marginTop: "10px",
    marginBottom: "10px",
  },
  passing: {
    fontSize: "8px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
});
class TestFieldDescription extends Component {
  render() {
    const { selectedField, avgData, descriptions, classes } = this.props;
    return (
      <Container className={classes.root} align="center">
        <Box
          className={classes.box}
          borderRadius="borderRadius"
          borderColor="#e0e0e0"
          bgcolor="background.paper"
          border={1}
          align="left"
          width="50%"
          height={200}
        >
          <Typography className={classes.label} align="center">
            This is the label
          </Typography>
          <Typography className={classes.description}>
            {descriptions[selectedField]}
          </Typography>
          {selectedField === "images" && avgData["images"] && (
            <Typography className={classes.passing} align="center">
              Out of {avgData["total-scans"]} scans,{" "}
              {avgData[selectedField]["passed"]} have passed this test.
            </Typography>
          )}
        </Box>
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    selectedField: state.data.selectedField,
    avgData: state.data.avgData,
  };
};

const WithStylesComponent = withStyles(navStyles, { withTheme: true })(
  TestFieldDescription
);

export default connect(mapState)(WithStylesComponent);
