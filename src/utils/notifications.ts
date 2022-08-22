import { NOTIFICATION_TYPE, Store } from 'react-notifications-component'

export const displayNotification = (type: NOTIFICATION_TYPE, title: string, message: string) => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  })
}
