import { useState } from 'react'
import { IonButton, IonIcon, IonInput, IonItem, IonList } from '@ionic/react'
import { addOutline } from 'ionicons/icons'

function ContactForm({ onAdd }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() /* no recargar la página */
    onAdd({ name, phone })
    setName('')
    setPhone('')
  }

  return (
    <form onSubmit={handleSubmit} className="ion-padding">
      <IonList lines="none">
        <IonItem>
          <IonInput
            label="Nombre"
            labelPlacement="floating"
            fill="outline"
            clearInput
            value={name}
            onIonInput={e => setName(e.detail.value)}
            placeholder="Nombre"
          />
        </IonItem>
        <IonItem>
          <IonInput
            label="Telefono"
            labelPlacement="floating"
            fill="outline"
            type="tel"
            clearInput
            value={phone}
            onIonInput={e => setPhone(e.detail.value)}
            placeholder="Telefono"
          />
        </IonItem>
      </IonList>
      <IonButton type="submit" expand="block" className="ion-margin-top">
        <IonIcon slot="start" icon={addOutline} />
        Agregar
      </IonButton>
    </form>
  )
}

export default ContactForm
