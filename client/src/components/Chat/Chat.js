import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [group, setGroup] = useState('')
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { group, name } = queryString.parse(location.search)
        console.log(name, group)

        socket = io(ENDPOINT);
        setName(name)
        setGroup(group)

        console.log('socket', socket)
        socket.emit('join', { name, group }, () => {
            // alert(error)
        });

        return () => {
            socket.emit('diconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    return (
        <h1>Chat</h1>
    )
}

export default Chat;