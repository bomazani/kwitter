import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exitView } from '../actions';
import profileImg from '../images/Lemur_icon.png';
import './App.css';

class ProfileCard extends Component {
    render() {
    return (
        <div class="profile-wrap">
            <div class="exit-wrap"><div class="exit-btn" onClick={() => this.props.exitView()}>X</div></div>
            <div class="ui centered raised card profile-card">
                <div class="image">
                    <img alt="kweemur" src={profileImg}></img>
                </div>
                <div class="info-wrap">
                    <div class="content content-stuff">
                        <a class="header">{ this.props.clickedProfileInfo.username }</a>
                        <div class="meta">
                            <span class="date">{ this.props.clickedProfileInfo.displayName }</span>
                        </div>
                        <div class="description">
                            { this.props.clickedProfileInfo.about }
                        </div>
                    </div>
                </div>
                <div class="extra content">
                        <div>Sent Messages:</div>
                        { this.props.clickedProfileInfo.messages.length }
                </div>
            </div>
        </div>
        );
    }
}

const mapStatetoProps = state => ({
    clickedProfileInfo: state.clickedProfileInfo
})

const mapDispatchtoProps = dispatch => {
    return {
        exitView: () => dispatch(exitView())
    }
}

export default connect( mapStatetoProps, mapDispatchtoProps )( ProfileCard );