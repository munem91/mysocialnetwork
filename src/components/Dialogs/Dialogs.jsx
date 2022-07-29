import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return <div className={s.dialogItems + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}
    </div>

    // blablabla this test

}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "I'm Ok"},
        {id: 5, message: "Do you like this social network?"},
        {id: 6, message: "Yes, it's beautiful"}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = messages.map( m => <Message message={m.message} /> );


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}


            </div>
            <div className={s.messages}>

                {messagesElements}
                {/*<Message message={messages[0].message} />*/}
                {/*<Message message={messages[1].message} />*/}


            </div>
        </div>

    )
}

export default Dialogs;

