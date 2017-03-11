/* var faker = require('faker/locale/en');*/
import faker from 'faker/locale/en'

class Operator {
  messages = []
  name = faker.name.findName()

  constructor(numMessages){
    for(var i = 0; i< numMessages; i++) {
      this.messages[i] = new Message()
      this.id = `operator_${i}`
    }
  }
}


class User {
  id = 0
  messages = []
  name = faker.name.findName()

  constructor(numMessages) {
    for(let i = 0; i< numMessages; i++) {
      this.messages[i] = new Message()
      this.id = `user_${i}`
    }
  }
}


// needs an id to connect the user to the operator
class Message {
  text = faker.lorem.sentence() 
  time = faker.date.recent()
}


const d_users = []
const d_operator = new Operator(20)


for (var i = 0; i < 100; i++) {
  d_users.push(new User(30))
}

export {d_users, d_operator}
