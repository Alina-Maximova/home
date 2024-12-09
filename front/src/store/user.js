import { makeAutoObservable } from "mobx";


class User {
 
  auth = localStorage.getItem('role')?true:false
 
 constructor(){
    makeAutoObservable(this)
  }
  setAuth(item, id){
    localStorage.setItem('role',item)
    localStorage.setItem('id', id)
    this.auth = true
 
  }
  delAuth(){
    localStorage.removeItem('role')
    this.auth = false
  }
}
export default new User();