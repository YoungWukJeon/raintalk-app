import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { styled } from '../../stitches.config';

import CircleImage from '../../components/styled/CircleImage';

import faker from 'faker';

const profileInfo = {
    backgroundImage: faker.image.nature(),
    profileImage: faker.image.avatar(),
    userName: '개발자 카니'
};

const BackgroundWrapper = styled('div', {
    display: 'flex',
    width: '100%'
});

const BackgroundImage = styled('img', {
    objectFit: 'cover',
    height: 'calc(100vh - 113px)'
});

const ImageWrapper = styled('div', {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    bottom: '80px'
});

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
                    <BackgroundWrapper>
                        <BackgroundImage src={profileInfo.backgroundImage} alt="프로필 배경 이미지"/>
                    </BackgroundWrapper>

                    <ImageWrapper>
                        <CircleImage src={profileInfo.profileImage} alt="프로필 이미지" width="100px" />
                    </ImageWrapper>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default ProfileTab;
