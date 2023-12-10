class Data {
    #email;
    #phone;
    #location;
  
    constructor(_email, _phone, _location){
      this.#email = _email;
      this.#phone = _phone;
      this.#location = _location;
    }
  
    getEmail(){
      return this.#email;
    }
  
    setEmail(newEmail){
      this.#email = newEmail;
    }
  
    getPhone(){
      return this.#phone;
    }
  
    setPhone(newPhone){
      this.#phone = newPhone;
    }
  
    getLocation(){
      return this.#location;
    }
  
    setLocation(newLocation){
      this.#location = newLocation;
    }
  }
  
  export default Data;  