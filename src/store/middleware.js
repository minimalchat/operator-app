import { RECEIVE_MESSAGE, setActiveChat } from "./Chat/index";


export const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

export const notifications = store => next => action => {
  if (action.type === RECEIVE_MESSAGE){
    if (window.config.notificationsEnabled) {
      const newMessageNotification = new Notification('New Message', {
        body: `${action.payload.content.substring(0, 80)}${action.payload.content.length > 80 ? '...' : ''}`,
      });

      newMessageNotification.onclick = () => {
        store.dispatch(setActiveChat({id: action.payload.chat, open: true}))
      }

      try {
        newMessageNotification.show();
      } catch (e) {
      }
    }
  }
  return next(action);
}
