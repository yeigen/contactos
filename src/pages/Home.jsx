import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Loader from '../components/Loader'
import ContactList from '../components/ContactList'
import ContactForm from '../components/ContactForm'
import useContacts from '../hooks/useContacts'
import './Home.css';

const Home = () => {
  const { isLoading, contacts, deleteContact, addContact } = useContacts()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Contacticos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contacticos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-text-center">
          <img src="/perrazo.webp" alt="Perro" className="home-logo ion-margin-bottom" />
          {isLoading
            ? <Loader />
            : (
              <>
                <ContactForm onAdd={addContact} />
                <ContactList contacts={contacts} onDelete={deleteContact} />
              </>
            )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
