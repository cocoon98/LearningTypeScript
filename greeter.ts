class Student {
  fullName: string
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string,
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + person.lastName + '!'
}

let user = {
  firstName: 'Thom',
  lastName: 'Yorke',
}
let newUser = new Student('Chester ', 'Charles ', 'Bennnington')
document.body.innerHTML = greeter(newUser)
