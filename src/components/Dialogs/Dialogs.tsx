import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/rootStateType';

type DialogsPropsType = {
    updateNewMessageBody: (body: string)=> void
    sendDialogsMessage: ()=> void
    dialogsPage: DialogsPageType
}


const Dialogs = ({updateNewMessageBody, sendDialogsMessage, dialogsPage, ...props}: DialogsPropsType) => {

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    let onSendClickHandler = () => {
        sendDialogsMessage()
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder="Enter your message"
                            value={dialogsPage.newMessageBody}
                            onChange={onChangeHandler}>g
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs