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
    this.author = generateUserType(chatSessionId);
    this.chat = chatSessionId;
  }
}


class Chat {
  client = {
    id: null,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    name: 'site visitor',
  }

  creationTime = faker.date.recent()
  updatedTime = faker.date.recent().toISOString()
  id = null
  operator = null

  constructor (chatSessionId, clientId, operator) {
    this.id = chatSessionId;
    this.client.id = clientId;
    this.operator = operator;
  }
}

// get a random author type for generating operator and client message types
function generateUserType (chatSessionId) {
  const rnd = Math.floor(Math.random() * 2) + 1;
  switch (rnd) {
    case 1:
      return 'operator';
    case 2:
      return `client.${chatSessionId}`;
    default:
      return `client.${chatSessionId}`;
  }
}


// creates one chatSession and multiple messages for that session
// some messages belong to a client, some to a dummy operator.
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
      messages.push(new Message(chatSessionId, clientId));
    }
  }

  return { chatSessions, messages };
}
