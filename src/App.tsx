import React from "react";
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { person, chatbox, ellipsisHorizontal } from 'ionicons/icons';
import ProfileTab from './pages/tabs/ProfileTab';
import ChatTab from './pages/tabs/ChatTab';
import MoreTab from './pages/tabs/MoreTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import { styled } from './stitches.config';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const StyledIonApp = styled(IonApp, {
    maxWidth: "500px",
    minWidth: "320px",
    margin: "0 auto"
});

const App: React.FC = () => (
    <StyledIonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/profile">
                        <ProfileTab />
                    </Route>
                    <Route exact path="/chat">
                        <ChatTab />
                    </Route>
                    <Route path="/more">
                        <MoreTab />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/chat"/>
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="profile" href="/profile">
                        <IonIcon icon={person}/>
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="chat" href="/chat">
                        <IonIcon icon={chatbox}/>
                        <IonLabel>Chat</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="more" href="/more">
                        <IonIcon icon={ellipsisHorizontal}/>
                        <IonLabel>More</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </StyledIonApp>
);

export default App;
