import React from 'react';

export default class StatusProfile extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  isWho = () => {
    return this.props.authUserId === this.props.profileId;
  };
  activate = () => {
    if (this.isWho()) {
      this.setState({ editMode: !this.state.editMode });
    }
  };
  deactivate = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    const handleStatus = (e) => {
      this.setState({ status: e.target.value });
    };
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activate}>
              {this.isWho()
                ? this.state.status || this.props.status
                : this.props.status || 'not status'}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              onChange={handleStatus}
              value={this.state.status}
              onBlur={this.deactivate}
            />
          </div>
        )}
      </>
    );
  }
}
