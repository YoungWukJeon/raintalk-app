import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import { styled } from '../../stitches.config';

import CircleImage from '../../components/styled/CircleImage';

import { faker } from '@faker-js/faker';

const profileInfo = {
    backgroundImage: faker.image.url(),
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

const DescriptionWrapper = styled('div', {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    bottom: '50px'
});

const UserNameWrapper = styled('strong', {
    marginTop: '5px',
    color: 'rgba(255, 255, 255, 1)'
});

const ProfileTab: React.FC = () => {
    return (
        <>
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
                        <BackgroundImage src={profileInfo.backgroundImage} alt="프로필 배경 이미지" />
                    </BackgroundWrapper>

                    <DescriptionWrapper>
                        <CircleImage src={profileInfo.profileImage} alt="프로필 이미지" width="100px" />
                        <UserNameWrapper>{profileInfo.userName}</UserNameWrapper>
                    </DescriptionWrapper>
                </IonContent>
            </IonContent>
        </>
    );
};

export default ProfileTab;
