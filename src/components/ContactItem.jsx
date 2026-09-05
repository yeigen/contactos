import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/react'
import { trashOutline } from 'ionicons/icons'

function ContactItem({ contact, onDelete }) {
  return (
    <IonItem>
      <IonLabel>
        <h2>{contact.name}</h2>
        <p>{contact.phone}</p>
      </IonLabel>
      <IonButton slot="end" color="danger" fill="clear" onClick={() => onDelete(contact.id)}>
        <IonIcon slot="icon-only" icon={trashOutline} />
      </IonButton>
    </IonItem>
  )
}

export default ContactItem
