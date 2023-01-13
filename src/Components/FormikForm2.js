import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

function FormikForm2() {
    const [formdata,setformData] = useState({});
    return (
        <div>
            <h3>Formil form using formik methods </h3>
            <Formik
                initialValues={{ name: "", age: "", password: "", gender: "" ,Education:'',country:'',comments:''}}
                onSubmit={(values) => {
                    console.log(values)
                    setformData(values);
                }}
            >
                <Form>
                    <label htmlFor="">Name <span style={{ color: 'red' }}>*</span> : &nbsp;</label>
                    <Field type='text' name='name' />
                    <br /><br />

                    <label htmlFor="">Age <span style={{ color: 'red' }}>*</span> : &nbsp;</label>
                    <Field type='number' name='age' />
                    <br /><br />

                    <label htmlFor="">Password <span style={{ color: 'red' }}>*</span> : &nbsp;</label>
                    <Field type='password' name='password' />
                    <br /><br />

                    <label htmlFor="">Gender <span style={{ color: 'red' }}>*</span> : &nbsp;</label>
                    <label htmlFor="">Male &nbsp;</label>
                    <Field type='radio' name='gender' value='Male' />
                    &nbsp; &nbsp;
                    <label htmlFor="">Female &nbsp;</label>
                    <Field type='radio' name='gender' value='Female' />
                    <br /><br />

                    <label htmlFor="">Education <span style={{ color: 'red' }}>*</span> : &nbsp;</label>
                    <label htmlFor="">SSC </label>
                    <Field type='checkbox' name='Education' value='SSC' />
                    &nbsp;  &nbsp;
                    <label htmlFor="">HSC </label>
                    <Field type='checkbox' name='Education' value='HSC' />
                    &nbsp;  &nbsp;
                    <label htmlFor="">Deploma </label>
                    <Field type='checkbox' name='Education' value='Deploma' />
                    &nbsp;  &nbsp;
                    <label htmlFor="">Graduation </label>
                    <Field type='checkbox' name='Education' value='Graduation' />
                    &nbsp;  &nbsp;
                    <label htmlFor="">Post-Graduation </label>
                    <Field type='checkbox' name='Education' value='Post-Graduation' />
                    <br /><br />
                    <label htmlFor="">Country &nbsp; <span style={{ color: 'red' }}>*</span> : &nbsp;</label>
                    <Field name='country' as='select'>
                        <option value="">-- Select --</option>
                        <option value="Canada">Canada</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                    </Field>
                    <br /><br />
                    <label htmlFor="" style={{verticalAlign:'top'}}>Comments</label>
                    <Field as='textarea' name='comments'/>

                    <br /><br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <h1>{JSON.stringify(formdata)}</h1>
        </div>
    )
}

export default FormikForm2
