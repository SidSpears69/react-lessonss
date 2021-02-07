import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text);
    }

    let DialogElements = props.state.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id} />))
    let MessagesElements = props.state.messages.map(m => (<Message key={m.id} message={m.message} />))
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div><textarea ref={newMessageElement}></textarea></div>
                <div><button onClick={addMessage}>Add post</button></div>
            </div>
        </div>
    );
}

export default Dialogs;