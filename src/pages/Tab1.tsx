import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  console.log('render Tab1', document.querySelectorAll('.bg-red-500'));

  return (
  <IonPage>
    <IonContent className="flex justify-center items-center">
      {/* Tailwind utilities apply here */}
      <div slot="fixed" className="bg-red-500 w-10 h-10" />
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
