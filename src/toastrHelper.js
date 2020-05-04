import { store } from 'react-notifications-component';

let notificationMessage = [];

export const displayNotification = (notificationConfig) => {
  const { message = null, type = 'success', position = 'top' } = notificationConfig;

  // if (notificationMessage.includes(message)) {
  //   return;
  // }

  setTimeout(() => {
    notificationMessage = [];
  }, 3000);

  notificationMessage.push(message);

  if (message === null) {
    return;
  }

  return (
    store.addNotification({
      message,
      type,
      insert: 'top',
      container: position,
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 3000,
      },
    }));
};
