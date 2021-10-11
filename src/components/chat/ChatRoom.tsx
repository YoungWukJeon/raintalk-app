import React from 'react';
import ChatRoomItem from "./ChatRoomItem";
import { styled } from "../../stitches.config";

import { ChatRoomInfo } from "./model/ChatRoom";
import {BrowserRouter as Router, Link} from "react-router-dom";

interface IChatRoomProps {
    chatRoomInfos: Array<ChatRoomInfo>
}

const ChatRoomList = styled('ul', {
    padding: '0'
})

const ChatRoom: React.FC<IChatRoomProps> = ({chatRoomInfos}) => {
    return (
        <Router>
            <ChatRoomList>
                {chatRoomInfos.map(chatRoomInfo =>
                    <Link to={`/chat/${chatRoomInfo.chatRoomId}`} key={chatRoomInfo.chatRoomId}>
                        <ChatRoomItem
                            id={chatRoomInfo.chatRoomId}
                            thumbnail={chatRoomInfo.thumbnail}
                            name={chatRoomInfo.name}
                            joinedUserNum={chatRoomInfo.joinedUserNum}
                            lastChattedAt={chatRoomInfo.lastChattedAt}
                            lastChatMessage={chatRoomInfo.lastChatMessage}
                        />
                    </Link>
                )}
            </ChatRoomList>
        </Router>
    )
}

export default ChatRoom;