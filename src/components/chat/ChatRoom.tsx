import React from 'react';
import ChatRoomItem from "./ChatRoomItem";
import { ChatRoomInfo } from "./model/ChatRoom";
import { Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";

interface IChatRoomProps {
    chatRoomInfos: Array<ChatRoomInfo>
}

const ChatRoom: React.FC<IChatRoomProps> = ({chatRoomInfos}) => {
    return (
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