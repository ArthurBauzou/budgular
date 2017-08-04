export class User {
  _id:string
  name:string
  pass:string
}

export class Transaction {
  _id:string
  title:string
  value:number
  date:string
  type:string
  user:string
}