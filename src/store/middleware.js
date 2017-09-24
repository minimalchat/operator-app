import { RECEIVE_MESSAGE, setActiveChat } from './Chat/index';


export const logger = store => next => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return next(action);
};

export const notifications = store => next => (action) => {
  const messageLength = 80;
  if (action.type === RECEIVE_MESSAGE) {
    if (window.config.notificationsEnabled) {
      const newMessageNotification = new Notification('New Message', {
        body: `${action.payload.content.substring(0, messageLength)}${action.payload.content.length > messageLength ? '...' : ''}`,
      });

      newMessageNotification.onclick = () => {
        store.dispatch(setActiveChat({ id: action.payload.chat, open: true }));
      };

      try {
        newMessageNotification.show();
      } catch (e) {
        // TODO: Manage errors better?
      }
    }
  }
  return next(action);
};
