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
import { ChatRoomInfo } from "./model/ChatRoom";
import { Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";

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
        <div>
            <IonRouterOutlet>
                {chatRoomInfos.map(chatRoomInfo =>
                    <Route exact path={'/' + chatRoomInfo.chatRoomId}>
                        <ChatRoomItem
                            thumbnail={chatRoomInfo.thumbnail}
                            name={chatRoomInfo.name}
                            joinedUserNum={chatRoomInfo.joinedUserNum}
                            lastChattedAt={chatRoomInfo.lastChattedAt}
                            lastChatMessage={chatRoomInfo.lastChatMessage}
                        />
                    </Route>
                )}
            </IonRouterOutlet>
        </div>
    )
}

export default ChatRoom;