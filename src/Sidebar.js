import React, {useState,useEffect} from 'react';
import './Sidebar.css';
import {Avatar, IconButton} from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from "./SidebarChat.js";
import db from './firebase.js';
import {useStateValue} from './StateProvider';

function Sidebar(props) {
    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();
    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )

            ))
        ));

        return () => {
            unsubscribe();
        }
    },[]); 

    console.log(rooms)
  return (
      <div className="sidebar">
          <div className="sidebar__header">
              <div className='avator'>
              <Avatar src={user?.photoURL} />
              </div>
              <div className="sidebar__headerRight">
                  <IconButton>
                      <DonutLargeIcon/>
                  </IconButton>
                  <IconButton>
                      <ChatIcon/>
                  </IconButton>
                  <IconButton>
                      <MoreVertIcon/>
                  </IconButton>
                  
              </div>
          </div>
          <div className="sidebar__search">
              <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search or start new chat"/>
              </div>
          </div>
          <div className="sidebar__chats">
              <SidebarChat addNewChat/>
              
              {rooms.map(room=> (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
             
          </div>
      </div>
  );
}

export default Sidebar;