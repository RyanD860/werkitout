import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class SubmitAccepted extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  componentDidMount() {
    this.handleOpen();
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <Link to={`/user/profile/${this.props.id}`}>
        <FlatButton label="Profile" primary={true} onClick={this.handleClose} />
      </Link>
    ];

    return (
      <div>
        <RaisedButton label="Alert" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.props.message}
        </Dialog>
      </div>
    );
  }
}

export default withRouter(SubmitAccepted);
