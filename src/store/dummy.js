import faker from 'faker/locale/en'


class Operator {}

class Message {
  author = null
  chat = null
  content = faker.lorem.sentence()
  timestamp = faker.date.recent()

  constructor(chatSessionID, chatSessionId) {
    this.author = `client.${clientId}`
    this.chat = chatSessionId 
  }
}


class Chat {
  client = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    name: "site visitor",
    id: null,
  }
  creation_time = faker.date.recent()
  id = null,
  operator = null
  update_time = null

  // pass in uuid for id's
  constructor(uuid, operator){
    this.client.id = uuid
    this.operator = operator
  }

}

// creates one chatSession and multiple messages for that session
export default function makeDummy(numDummy, numMessages) {
  let chatSessions = []
  let messages = []

  for (let i = 0; i < numDummy; i++) {
    let chatSessionId = faker.random.uuid()
    let clientId = faker.random.uuid()

    chatSessions.push(new Chat(chatSessionId, clientId, 'Joe' ))

    // create the messages unique to the above created session.
    for (let i = 0; i < numMessages; i++) {
      messages.push(new Message(clientId, chatSessionId))
    }
  }

  return {chatSession, chatMessages}

}


