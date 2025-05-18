export enum SubjectEnum {
    English = "English",
    Hindi = "Hindi",
    Marathi = "Marathi",
    Science = "Science",
    Maths = "Maths",
    History = "History",
    Geography = "Geography"
}

export enum QualificationEnum {
    Select = "None",
    SSC = "SSC",
    HSC = "HSC",
    BEd = "B.Ed",
    DEd = "D.Ed",
    MEd = "M.Ed",
    BSC = "BSC",
    BCA = "BCA",
    Engineering = "Engineering",
    Diploma = "Diploma",
    MBBS = "MBBS",
    Others = "Others"
}

export enum ClassEnum {
    Fifth = "5th",
    Sixth = "6th",
    Seventh = "7th",
    Eighth = "8th",
    Ninth = "9th",
    Tenth = "10th"
}

export enum GenderEnum {
    select = "None",
    male = "male",
    female = "female",
    others = "others"
}

export enum StatusEnum {
    teacher = "teacher",
    student = "student",
    admin = "admin"
}

export interface TeacherInterface {
    profile: string;
    username: string;
    password: string;
    firstname: string;
    middlename: string;
    lastname: string;
    classOf: string;
    status: string;
    DOB: string;
    gender: string;
    address: string;
    email: string;
    contact: string;
    subject: string;
    qualification: string; 
    [key: string]: string
}
