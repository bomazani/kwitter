import React, { Component } from 'react';
import { goTo } from '../actions';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';


class UpInfoButton extends Component {
    render (){
        return (
            <div className='logout' >
                <Button color='blue' type='submit' onClick={() => this.props.goToSettings()}>Update Info</Button>
            </div>
        )}
}

const mapDispatchToProps = (dispatch) => {
    return {
        goToSettings: () => {
            dispatch(goTo('/settings'))
        }
    }
}

export default connect(undefined, mapDispatchToProps)(UpInfoButton);