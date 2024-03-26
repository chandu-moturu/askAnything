import axios from 'axios'
import React from 'react'

const Chat = () => {
    const fetchChats = async () =>{
        const {data} = await axios.get("/api/chat");
    }

  return (
    <div>Chat</div>
  )
}

export default Chat