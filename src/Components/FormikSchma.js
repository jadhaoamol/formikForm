import * as Yup from 'yup';

export  const formikSchema = Yup.object({
 name:Yup.string().min(3).max(20).required('Name is mandatory'),
    email: Yup.string().email().required('Email is mandatoty'),
    age:Yup.number().min(10,'age must be grater THAN 10').max(50,'age must be less THAN 50').required(),
    password:Yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Password Must be Strong !'),
    cpassword:Yup.string().required().oneOf([Yup.ref('password'),null], 'Both Password & Confirm Password MUST BE SAME')
});