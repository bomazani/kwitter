import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class ProfileCard extends Component {
    render() { 
    return (
        <div class="ui card">
            <div class="image">
                <img src=""></img>
            </div>
            <div class="content">
                <a class="header">{ this.props.clickedProfileInfo.username }</a>
                <div class="meta">
                    <span class="date">{ this.props.clickedProfileInfo.displayName }</span>
                </div>
                <div class="description">
                { this.props.clickedProfileInfo.about }
                </div>
            </div>
            <div class="extra content">
                <a>
                    <i class="user icon"></i>
                    { this.props.clickedProfileInfo.messages.length }
                </a>
            </div>
        </div>
        );
    }
}

const mapStatetoProps = state => ({
    clickedProfileInfo: state.clickedProfileInfo
})

export default connect( mapStatetoProps, undefined )( ProfileCard );