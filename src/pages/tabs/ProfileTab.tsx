import React from "react";
import { IonAvatar, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { styled } from '../../stitches.config';

import CircleImage from '../../components/styled/CircleImage';

import faker from 'faker';

const profileInfo = {
    profileImage: faker.image.avatar(),
    userName: '개발자 카니'
}

const ImageWrapper = styled('div', {
    display: 'flex',
    width: '100%'
})

const ProfileTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>프로필</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">프로필</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonAvatar>
                        <img src={profileInfo.profileImage} />
                    </IonAvatar>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default ProfileTab;
