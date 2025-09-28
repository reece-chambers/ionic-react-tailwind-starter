import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  console.log('render Tab1', document.querySelectorAll('.bg-red-500'));

  return (
  <IonPage>
    <IonContent className="flex justify-center items-center">
      {/* Tailwind utilities apply here */}
      <div className="flex flex-col items-center justify-center w-full h-full text-center">
        <div className="bg-red-500 w-10 h-10" />
        <p className="mt-4 px-4 text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed max-w-xs">
          If you see a red box, it means Tailwind is working!
        </p>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
