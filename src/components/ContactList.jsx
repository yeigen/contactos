import { IonList } from '@ionic/react'
import ContactItem from './ContactItem'

function ContactList({ contacts, onDelete }) {
  return (
    <IonList inset lines="inset">
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </IonList>
  )
}

export default ContactList
