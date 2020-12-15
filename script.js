class School {
  constructor(name, level, numberOfStudents ){
    this._name = name;
    this._level = level;
    this._numberOfStudents =  numberOfStudents;
  }
  get name(){
    return this._name ;
  }
  get level(){
    return this._level;
  }
   get numberOfStudents(){
    return this._numberOfStudents
   }
   set numberOfStudents (val){
    return this._numberOfStudents =val;
   }
   static quickFacts() {
    return this._name + "educates" + this._numberOfStudents + "students at the" + this._level + "school level";
   }
   static pickSubstituteTeacher(substituteTeachers){
     return substituteTeachers[Math.floor(Math.random().pickSubstituteTeachers.length)]
   }
}