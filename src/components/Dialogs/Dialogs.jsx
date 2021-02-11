import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (evt) => {
        let body = evt.target.value;
        props.updateNewMessageBody(body);
      }
    let DialogElements = props.state.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id} />))
    let MessagesElements = props.state.messages.map(m => (<Message key={m.id} message={m.message} />))
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElements}
            </div>
            <div className={s.messages}>
                <div>{MessagesElements}</div>
                <div><textarea placeholder="Enter your message" value={props.state.newMessageBody} onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    );
}

export default Dialogs;