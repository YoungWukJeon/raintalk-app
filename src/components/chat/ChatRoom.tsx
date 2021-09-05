import React from 'react';
import ChatRoomItem from "./ChatRoomItem";

interface ChatRoomProps {
}

const ChatRoom: React.FC<ChatRoomProps> = ({}) => {
    return (
        <div>
            <ChatRoomItem
                thumbnail={""}
                name={"채팅방 이름"}
                joinedUserNum={5}
                lastChattedAt={"오후 9:46"}
                lastChatMessage={"넵!"}
            />
        </div>
    )
}

export default ChatRoom;