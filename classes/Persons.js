class Persons {
    #img;
    #name;
    #surname;
  
    constructor(_img, _name, _surname){
      this.#img = _img;
      this.#name = _name;
      this.#surname = _surname;
    }
  
    getName(){
      return this.#name;
    }
  
    setName(newName){
      this.#name = newName;
    }
  
    getSurname(){
      return this.#surname;
    }
  
    setSurname(newSurname){
      this.#surname = newSurname;
    }
  
    getImg(){
      return this.#img;
    }
  
    setImg(newimg){
      this.#img = newimg;
    }
  }
  
  export default Persons;
  