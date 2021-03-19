import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    //const path = `/dialogs/${props.id}`
    const path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;