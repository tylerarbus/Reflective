import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { verifyPhoneCode } from './signup.actions.js';

export class SignUpPhoneVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationCode: null
    };

    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
  }

  onClickSubmit(e) {
    e.preventDefault();
    this.props.dispatch(verifyPhoneCode(this.state.verificationCode));
  }

  onChangeCode(e) {
    this.setState({
      verificationCode: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={this.onClickSubmit}
        >
          <h4 className="ui dividing header">Phone Verification</h4>
          <div className="field">
            <label>Verification Code</label>
            <div className="fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="Enter Code"
                  onChange={this.onChangeCode}
                  autoFocus
                />
              </div>
            </div>
          </div>
          <button
            type="Submit"
            style={{ visibility: 'hidden' }}
          />
        </form>
        <div
          className="ui right floated submit button"
          onClick={this.onClickSubmit}
        >
          Submit
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => (
  {
    ...state
  }
);

SignUpPhoneVerification.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(SignUpPhoneVerification);
