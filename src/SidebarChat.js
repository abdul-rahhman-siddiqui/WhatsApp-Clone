//rfce
import React, {useState,useEffect} from 'react';
import "./SidebarChat.css";
import {Avatar} from "@mui/material";
import db from './firebase.js';
import {Link} from "react-router-dom";

function SidebarChat({id, name, addNewChat}) {
    const [messages, setMessages] = useState("");
    var seed = Math.floor(Math.random() * 5000);
    const path = 'https://avatars.dicebear.com/api/human/' + id + '.svg';
    var links = '/rooms/' + id;
    const createChat= () => {
        const roomName = prompt("Please enter the Chat");
        if(roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };
    useEffect(() => {
        if(id) {
            db.collection("rooms").doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [id]);

    return !addNewChat ? (
    <Link to={links}>
        <div className='sidebarChat'>
            <Avatar src={path} />
            <div className='sidebarChat__info'>
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
    </Link>
  ):(
      <div onClick={createChat} className="sidebarChat"><h2>Add New Chat</h2></div>
  )
}

export default SidebarChat