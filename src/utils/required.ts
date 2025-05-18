interface requiredInterface {
    [key: string]: boolean,
    username: boolean,
    password: boolean,
    firstname: boolean,
    lastname: boolean,
    fatherName: boolean,
    DOB: boolean,
    gender: boolean,
    std: boolean,
}

export const required= {
    username: false,
    password: false,
    firstname: false,
    lastname: false,
    fatherName: false,
    DOB: false,
    gender: false,
    std: false,
    classOf: false,
    subject: false,
}