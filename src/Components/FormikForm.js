import React from 'react'
import { useFormik } from 'formik'
import { formikSchema } from './FormikSchma';



function FormikForm() {
  const formInitialvalues = {
    name: '',
    email: '',
    age:'',
    password:'',
    cpassword:''
  }
  //1 th way  
  // const formik = useFormik({
  //   initialValues: formInitialvalues,
  //   onSubmit:(values)=>{
  //     console.log(values);
  //   }
  // });

  // 2nd way
  const { handleSubmit, handleChange, values, errors, handleBlur, touched } = useFormik({
    initialValues: formInitialvalues,
    validationSchema: formikSchema,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
    }
  });


  return (
    <div>
      <h1>Formik Form Demo</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="">Name <span style={{color:'red'}}>*</span> : &nbsp;</label>
        <input type="text" name="name" id="txtName" onBlur={handleBlur} onChange={handleChange} value={values.name} />
        &nbsp;
        <br />
        {errors.name && touched.name ? (<span style={{ color: 'red' }}>{errors.name}</span>) : null}
        <br /><br />

        <label htmlFor="">Email <span style={{color:'red'}}>*</span> : &nbsp;</label>
        <input type="text" name="email" id="txtEmail" onBlur={handleBlur} onChange={handleChange} value={values.email} />
        &nbsp;
        <br />      
        {errors.email && touched.email ? (<span style={{ color: 'red' }}>{errors.email}</span>) : null}
        <br /><br />

        <label htmlFor="">Age <span style={{color:'red'}}>*</span> : &nbsp;</label>
        <input type="text" name="age" id="txtAge" onBlur={handleBlur} onChange={handleChange} value={values.age} />
        &nbsp;
        <br />
        {errors.age && touched.age ? (<span style={{ color: 'red' }}>{errors.age}</span>) : null}
        <br /><br />

        <label htmlFor="">Password <span style={{color:'red'}}>*</span>  : &nbsp;</label>
        <input type="text" name="password" id="txtPassword" onBlur={handleBlur} onChange={handleChange} value={values.password} />
        &nbsp;
        <br />
        {errors.password && touched.password ? (<span style={{ color: 'red' }}>{errors.password}</span>) : null}
        <br /><br />

        <label htmlFor="">Confirm Password <span style={{color:'red'}}>*</span> : &nbsp;</label>
        <input type="text" name="cpassword" id="txtCpassword" onBlur={handleBlur} onChange={handleChange} value={values.cpassword} />
        &nbsp;
        <br />
        {errors.cpassword && touched.cpassword ? (<span style={{ color: 'red' }}>{errors.cpassword}</span>) : null}
        <br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default FormikForm
