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
  IonNavLink
} from '@ionic/react';
import { arrowBackCircle, arrowDown, arrowUp, cashOutline } from 'ionicons/icons';
import './Tab1.css';
import HeaderComponent from '../components/header/HeaderComponent';

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <HeaderComponent></HeaderComponent>

      <IonContent fullscreen>

        <IonTitle class='title-dashboard'>Dashboard</IonTitle>

        <div className="cards">
          <IonCard className='saldo-atual' color={'none'}>
            <IonButton color={'dark'}>

              <div className="card-button">
                <IonCardHeader>
                  <IonCardSubtitle>Saldo Atual &#62;</IonCardSubtitle>
                  <IonCardTitle>R$ 0,00</IonCardTitle>
                </IonCardHeader>

                <IonIcon icon={cashOutline} size='large' className='icon-card'></IonIcon>
              </div>

            </IonButton>

          </IonCard>

          <IonCard className='receitas' color={'none'}>

            <IonButton color={'dark'}>
              <div className="card-button">
                <IonCardHeader>
                  <IonCardSubtitle>Receitas &#62;</IonCardSubtitle>
                  <IonCardTitle>R$ 0,00</IonCardTitle>
                </IonCardHeader>

                <IonIcon icon={arrowUp} size='large' className='icon-card'></IonIcon>
              </div>
            </IonButton>

          </IonCard>

          <IonCard className='despesas' color={'none'}>
            <IonButton color={'dark'}>
              <div className="card-button">
                <IonCardHeader>
                  <IonCardSubtitle>Despesas &#62;</IonCardSubtitle>
                  <IonCardTitle>R$ 0,00</IonCardTitle>
                </IonCardHeader>

                <IonIcon icon={arrowDown} size='large' className='icon-card'></IonIcon>
              </div>
            </IonButton>

          </IonCard>
        </div>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;
