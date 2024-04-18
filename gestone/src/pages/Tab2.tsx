import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HeaderComponent from '../components/header/HeaderComponent';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>

      <HeaderComponent></HeaderComponent>

      <IonContent fullscreen>
        <h1 className='ion-text-center'>Add</h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
