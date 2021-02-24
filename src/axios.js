import { v4 as uuid } from 'uuid'


const initialMemberList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Michael',
    email: 'michael@michael.com',
    role: 'Student',
  },
]


export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialMemberList })
  },
  post(url, { name, email, role }) {
    const newMember = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newMember })
  }
}
