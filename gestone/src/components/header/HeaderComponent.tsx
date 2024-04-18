import './HeaderComponent.css';
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { personCircle, personCircleSharp } from 'ionicons/icons';

const HeaderComponent: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle slot='start'>Gestone</IonTitle>
                <IonButtons slot='end'>
                    <IonButton size="large">
                        <IonIcon slot="icon-only" icon={personCircleSharp} size='large'></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default HeaderComponent;