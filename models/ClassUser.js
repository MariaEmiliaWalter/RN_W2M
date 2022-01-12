class User {
    constructor(id, image,name,lastname,email,profession,preference,createdAt) {
      this.id = id.toString();
      this.image = image;
      this.name= name;
      this.lastname = lastname;
      this.email= email;
      this.profession=profession;
      this.preference=preference;
      this.createdAt=createdAt;
    }
  }
  
  export default User;