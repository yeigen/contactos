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
        <IonToolbar>
          <IonTitle>Contacticos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contacticos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <img src="/perrazo.webp" alt="Perro" />
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
