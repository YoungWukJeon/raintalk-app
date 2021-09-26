import React from 'react';
import ChatRoomItem from "./ChatRoomItem";
import { styled } from "../../stitches.config";

export class ChatRoomInfo {
    no: number;
    name: string;
    thumbnail: string;
    joinedUserNum: number;
    lastChattedAt: string;
    lastChatMessage: string;

    constructor(no: number, name: string, thumbnail: string, joinedUserNum: number, lastChattedAt: string, lastChatMessage: string) {
        this.no = no;
        this.name = name;
        this.thumbnail = thumbnail;
        this.joinedUserNum = joinedUserNum;
        this.lastChattedAt = lastChattedAt;
        this.lastChatMessage = lastChatMessage;
    }
}

interface IChatRoomProps {
    chatRoomInfos: Array<ChatRoomInfo>
}

const ChatRoomList = styled('ul', {
    padding: '0'
})

const ChatRoom: React.FC<IChatRoomProps> = ({chatRoomInfos}) => {
    return (
        <ChatRoomList>
            {chatRoomInfos.map(chatRoomInfo =>
                <ChatRoomItem
                    no={chatRoomInfo.no}
                    name={chatRoomInfo.name}
                    thumbnail={chatRoomInfo.thumbnail}
                    joinedUserNum={chatRoomInfo.joinedUserNum}
                    lastChattedAt={chatRoomInfo.lastChattedAt}
                    lastChatMessage={chatRoomInfo.lastChatMessage}
                />
            )}
        </ChatRoomList>
    )
}

export default ChatRoom;