import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import HeaderComponent from '../components/header/HeaderComponent';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>

      <HeaderComponent></HeaderComponent>

      <IonContent fullscreen>
        <h1 className='ion-text-center'>Grafics</h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
