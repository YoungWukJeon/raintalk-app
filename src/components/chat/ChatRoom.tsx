import React from 'react';
import ChatRoomItem from "./ChatRoomItem";

export class ChatRoomInfo {
    thumbnail: string;
    name: string;
    joinedUserNum: number;
    lastChattedAt: string;
    lastChatMessage: string;

    constructor(thumbnail: string, name: string, joinedUserNum: number, lastChattedAt: string, lastChatMessage: string) {
        this.thumbnail = thumbnail;
        this.name = name;
        this.joinedUserNum = joinedUserNum;
        this.lastChattedAt = lastChattedAt;
        this.lastChatMessage = lastChatMessage;
    }
}

interface IChatRoomProps {
    chatRoomInfos: Array<ChatRoomInfo>
}

const ChatRoom: React.FC<IChatRoomProps> = ({chatRoomInfos}) => {
    return (
        <div>
            {chatRoomInfos.map(chatRoomInfo =>
                <ChatRoomItem
                    thumbnail={chatRoomInfo.thumbnail}
                    name={chatRoomInfo.name}
                    joinedUserNum={chatRoomInfo.joinedUserNum}
                    lastChattedAt={chatRoomInfo.lastChattedAt}
                    lastChatMessage={chatRoomInfo.lastChatMessage}
                />
            )}
        </div>
    )
}

export default ChatRoom;