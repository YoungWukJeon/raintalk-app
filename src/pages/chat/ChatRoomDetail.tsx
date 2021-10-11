import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import faker from 'faker';
import { ChattingInfo, User } from "../../components/chat/model/ChattingInfo";
import {BrowserRouter as Router, Route} from "react-router-dom";

const chattingInfos: Array<ChattingInfo> = ''.repeat(5)
    .split('')
    .map(s => new ChattingInfo(
        new User(faker.name.firstName(), faker.image.avatar(), 1),
        1,
        faker.git.commitMessage(),
        faker.date.soon().toDateString()
    ));

const ChatRoomDetail: React.FC = () => {
    return (
        // <Router>
        //     <Route path={'/chat/:chatRoomId'} >
                <IonPage>
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
                    </IonContent>
                </IonPage>
            // <Route>
        // </Router>
    );
};

export default ChatRoomDetail;
