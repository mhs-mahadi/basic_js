class Students{
    constructor(sId = 1, Sname = 'mahi', Sage = 10, sSchool){
        this.id = sId;
        this.name = Sname;
        this.age = Sage;
        this.school = sSchool;

    } 
}

const student1 = new Students(2, 'mahadi', 32, 'ghoraghat k.c pilot high school');
const student2 = new Students();
console.log(student1, student2);
console.log(student2.name, student1.school);