import React from "react";
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/react';
import ChatRoom from '../../components/chat/ChatRoom';

import { faker } from '@faker-js/faker'

import { ChatRoomInfo } from "../../components/chat/model/ChatRoom";

const chatRoomInfo: Array<ChatRoomInfo> = [
    new ChatRoomInfo(faker.git.commitSha(), faker.image.avatar(), faker.music.genre(), 1, '오후 9:59', faker.git.commitMessage()),
    new ChatRoomInfo(faker.git.commitSha(), faker.image.avatar(), faker.music.genre(), 2, '오후 10:59', faker.git.commitMessage()),
    new ChatRoomInfo(faker.git.commitSha(), faker.image.avatar(), faker.music.genre(), 3, '오후 11:59', faker.git.commitMessage()),
    new ChatRoomInfo(faker.git.commitSha(), faker.image.avatar(), faker.music.genre(), 4, '오전 0:59', faker.git.commitMessage()),
    new ChatRoomInfo(faker.git.commitSha(), faker.image.avatar(), faker.music.genre(), 5, '오전 1:59', faker.git.commitMessage()),
    new ChatRoomInfo(faker.git.commitSha(), faker.image.avatar(), faker.music.genre(), 6, '오전 2:59', faker.git.commitMessage())
];

const ChatTab: React.FC = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>채팅</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">채팅</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <ChatRoom chatRoomInfos={chatRoomInfo} />
            </IonContent>
        </>
    );
};

export default ChatTab;
