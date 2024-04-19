import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonText
} from '@ionic/react';
import { arrowDown, arrowUp, cashOutline } from 'ionicons/icons';
import './Tab1.css';
import HeaderComponent from '../components/header/HeaderComponent';

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <HeaderComponent></HeaderComponent>

      <IonContent fullscreen>
        <IonTitle class='ion-text-start ion-margin'>Dashboard</IonTitle>

        <IonGrid>
          <IonRow>
            {/* Saldo */}
            <IonCol>
              <IonButton color={'light'} expand='block' fill='solid'>
                <IonGrid>
                  <IonRow className='ion-align-items-center'>
                    <IonCol>
                      <IonText className='ion-text-start ion-text-uppercase'>
                        <p>Saldo</p>
                      </IonText>
                      <IonText className='ion-text-start'>
                        <h1>R$ 0,00</h1>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonIcon icon={cashOutline} className='ion-float-right ion-padding ion-border'></IonIcon>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonButton>
            </IonCol>

            {/* Receitas */}
            <IonCol>
              <IonButton color={'light'} expand='block'>
                <IonGrid>
                  <IonRow className='ion-align-items-center'>
                    <IonCol>
                      <IonText className='ion-text-start ion-text-uppercase'>
                        <p>Receitas</p>
                      </IonText>
                      <IonText className='ion-text-start'>
                        <h1>R$ 0,00</h1>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonIcon icon={arrowUp} className='ion-float-right ion-padding ion-border'></IonIcon>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonButton>
            </IonCol>

            {/* Despesas */}
            <IonCol>
              <IonButton color={'light'} expand='block'>
                <IonGrid>
                  <IonRow className='ion-align-items-center'>
                    <IonCol>
                      <IonText className='ion-text-start ion-text-uppercase'>
                        <p>Despesas</p>
                      </IonText>
                      <IonText className='ion-text-start'>
                        <h1>R$ 0,00</h1>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonIcon icon={arrowDown} className='ion-float-right ion-padding ion-border'></IonIcon>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonButton>
            </IonCol>

          </IonRow>
        </IonGrid>
      </IonContent>

    </IonPage>
  );
};

export default Tab1;
