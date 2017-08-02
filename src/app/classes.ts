export class User {
  
  // constructor(
  //   public name:string,
  //   public pass:string
  // ) {}
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
  // constructor(
  //   public title:string,
  //   public value:number,
  //   public date:string,
  //   public type:string,
  //   public user:string
  // ) {}

}