import {ActionsTypes, DialogsPageType, DialogsType, MessagesType, newMessageBodyType} from './rootStateType';
import {v1} from 'uuid';


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_DIALOG_MESSAGE = 'SEND_DIALOG_MESSAGE'

let initialState = {
    dialogs: [
        {name: 'Valery', id: v1()},
        {name: 'Vlad', id: v1()},
        {name: 'Aleksandra', id: v1()},
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Yo'},
    ] as Array<MessagesType>,
    newMessageBody: '' as newMessageBodyType,
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) : DialogsPageType=> {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {...state, newMessageBody: action.title}
        }
        case SEND_DIALOG_MESSAGE: {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody:'',
                messages: [...state.messages, {id: v1(), message: body}]
            }
        }
        default:
            return state
    }

}
export const sendDialogMessageAC = () => {
    return {
        type: SEND_DIALOG_MESSAGE,
    } as const
}

export const updateNewMessageBodyAC = (title: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        title
    } as const
}