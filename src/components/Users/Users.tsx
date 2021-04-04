import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {UsersInitialStatePropsType} from '../../redux/users-reducer';

export const Users = (props: UsersPropsType) => {
    const state: UsersInitialStatePropsType[] = [
        {
            id: 1,
            photoUrl: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png',
            followed: false,
            fullName: 'Max',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'},
        },
        {
            id: 2,
            photoUrl: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png',
            followed: true,
            fullName: 'Dimych',
            status: 'I am not a boss',
            location: {city: 'Moscow', country: 'Russia'},
        },
    ]
    if (props.users.length === 0) {

        props.setUsers(state)
    }

    const UsersEl = props.users.map((u) => {
        return (
            <div key={u.id}>
                <div>
                    <img src={u.photoUrl} style={{width: '100px', height: '100px'}} alt={'Avatar'}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>
        )
    })

    return <div>
        {UsersEl}
    </div>
}