import React from 'react';
import ChatRoomItem from "./ChatRoomItem";
import { styled } from "../../stitches.config";

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
        <IonRouterOutlet>
            <ChatRoomList>
                {chatRoomInfos.map(chatRoomInfo =>
                    <Route exact path={'/' + chatRoomInfo.chatRoomId} key={chatRoomInfo.chatRoomId}>
                        <ChatRoomItem
                            id={chatRoomInfo.chatRoomId}
                            thumbnail={chatRoomInfo.thumbnail}
                            name={chatRoomInfo.name}
                            joinedUserNum={chatRoomInfo.joinedUserNum}
                            lastChattedAt={chatRoomInfo.lastChattedAt}
                            lastChatMessage={chatRoomInfo.lastChatMessage}
                        />
                    </Route>
                )}
            </ChatRoomList>
        </IonRouterOutlet>
    )
}

export default ChatRoom;