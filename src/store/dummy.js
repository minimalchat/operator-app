/**
 * This file generates dummy data for the chats array and messages array
 * to be used in the chat reducer.
 * makeDummy is the main function that returns `x` chats and `y` messages in a single object
 * TODO: create the operator class and output it in the makeDummy fn.
*/

import faker from 'faker/locale/en';

class Message {
  author = null
  chat = null
  content = faker.lorem.sentence()
  timestamp = faker.date.recent()

  constructor (chatSessionId) {
    this.author = `client.${chatSessionId}`;
    this.chat = chatSessionId;
  }
}


class Chat {
  client = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    name: 'site visitor',
    id: null,
  }
  creationTime = faker.date.recent()
  'updated_time' = faker.date.recent().toISOString()
  id = null
  operator = null

  // pass in uuid for id's
  constructor (chatSessionId, clientId, operator) {
    this.id = chatSessionId;
    this.client.id = clientId;
    this.operator = operator;
  }

}

// creates one chatSession and multiple messages for that session
export default function makeDummy (numDummy, numMessages) {
  const chatSessions = [];
  const messages = [];
  const rndNumMessages = Math.floor(Math.random() * (numMessages - (0 + 1))) + 1;

  for (let i = 0; i < numDummy; i += 1) {
    const chatSessionId = faker.random.uuid();
    const clientId = faker.random.uuid();

    chatSessions.push(new Chat(chatSessionId, clientId, 'Joe'));

    // create the messages unique to the above created session.
    for (let j = 0; j < rndNumMessages; j += 1) {
      messages.push(new Message(clientId, chatSessionId));
    }
  }

  return { chatSessions, messages };
}
