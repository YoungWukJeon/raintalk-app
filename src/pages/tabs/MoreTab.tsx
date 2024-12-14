import React from "react";
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/react';

const MoreTab: React.FC = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>더보기</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">더보기</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </>
    );
};

export default MoreTab;
