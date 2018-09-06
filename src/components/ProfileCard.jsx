import React, { Component } from 'react';
import { connect } from 'react-redux';
import profileImg from '../images/Lemur_icon.png';
import './App.css';

class ProfileCard extends Component {
    render() {
    return (
        <div class="ui centered raised card profile-card">
            <div class="image">
                <img alt="kweemur" src={profileImg}></img>
            </div>
            <div class="content content-stuff">
                <a class="header">{ this.props.clickedProfileInfo.username }</a>
                <div class="meta">
                    <span class="date">{ this.props.clickedProfileInfo.displayName }</span>
                </div>
                <div class="description">
                {/* { this.props.clickedProfileInfo.about } */}
                Filler shit to see if there is an about section that can be seen.
                </div>
            </div>
            <div class="extra content">
                    <div>Sent Messages:</div>
                    { this.props.clickedProfileInfo.messages.length }
            </div>
        </div>
        );
    }
}

const mapStatetoProps = state => ({
    clickedProfileInfo: state.clickedProfileInfo
})

export default connect( mapStatetoProps, undefined )( ProfileCard );