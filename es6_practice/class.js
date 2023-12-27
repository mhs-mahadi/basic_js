class student{
    constructor(sId, sName, sAge, sSex){
        this.id = sId;
        this.Name = sName;
        this.Age = sAge;
        this.Sex = sSex;
        this.School = 'Ghoraghat k.c pilot high school';

    }

}

const student1 = new student(1, 'mahadi', 25, 'male');
const student2 = new student(2, 'nirjhor', 24, 'female');

console.log(student1, student2);