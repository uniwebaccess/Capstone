import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { sizing } from '@material-ui/system';
import { Component } from "react";
import  {withStyles} from '@material-ui/core/styles';


const navStyles = theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.grey[200],
    height: '5px'
  },
});

class Footer extends Component {
  constructor(){
    super()
  }
  render(){
  const classes = this.props.classes;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
      </Container>
    </footer>
  );
  }
}

export default withStyles(navStyles, { withTheme: true })(Footer);
