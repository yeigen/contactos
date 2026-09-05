import { IonSpinner } from '@ionic/react'

function Loader() {
  return (
    <div className="ion-text-center ion-padding">
      <IonSpinner name="crescent" color="primary" />
    </div>
  )
}

export default Loader
