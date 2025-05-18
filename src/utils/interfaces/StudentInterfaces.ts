export interface StudentInterface {
  [key: string]: any;
  username: string;
  profile: string;
  password: string;
  firstname: string;
  lastname: string;
  fatherName: string;
  motherName: string;
  DOB: string;
  gender: "male" | "female" | "others" | ""
  std: string;
  aadharNumber?: string;
  fatherContactNumber?: string;
  motherContactNumber?: string;
  email: string;
  address: string;
  religion: string;
  birthPlace: string;
  state: string;
  nationality: string;
  aadharImage: string;
  birthCertificate: string;
  leavingCertificate: string;
  status: "Student"
}

