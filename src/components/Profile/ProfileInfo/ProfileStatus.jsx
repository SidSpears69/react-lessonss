import s from './ProfileInfo.module.css';
import React from 'react';

class ProfileStatus extends React.Component {
    statusInputRef = React.createRef();
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick ={ this.activateEditMode}>{this.props.status ? this.props.status : "No status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} type="text" autoFocus={true} onBlur={ this.deactivateEditMode}  value={this.state.status} />
                    </div>
                }
            </>
        )
    }
}


export default ProfileStatus;