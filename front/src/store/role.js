import { makeAutoObservable } from "mobx";
import jwtDecode from "jwt-decode";

class Role {

  isAdmin = false

  constructor(){
    makeAutoObservable(this)
  }
  getRole(){
    // console.log(jwtDecode(localStorage.getItem('token')))
    this.isAdmin = localStorage.getItem('role') === "admin"?true:false
   
  }

}
export default new Role()