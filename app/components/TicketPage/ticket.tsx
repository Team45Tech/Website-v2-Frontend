// Ticket Page 

import { Formik, Form, Field, ErrorMessage,FormikHelpers  } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email addresss').required('Email is required'),
    selection: Yup.string().required('Selection is Required'),
    name: Yup.string().required('Name is required'),

});

interface FormValues {
    email: string;
    selection: string;
    name: string;
  }

const initialValues:FormValues  = {
    email : '',
    selection : '',
    name : ''
}

const options = ['blog3','blog2','blog1' ]



const TicketPage: React.FC = () => {

    const handleSumbit = async (values: FormValues, { setSubmitting }:FormikHelpers<FormValues>) =>{
        try{

            const formattedValues = {
                Email:values.email,
                Event:values.selection,
                Name:values.name
            }
            const formData = JSON.stringify(formattedValues)

            const backendCreateUrl = 'http://127.0.0.1:8000/ticket/create/'
            const response = await fetch(backendCreateUrl,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData
            });
            if (response.ok) {
                console.log('Form data sent successfully');
                window.alert('ticket ordered')
              } else {
                console.error('Failed to send form data');
              }
            } catch (error) {
              console.error('Error sending form data:', error);
            } finally {
              setSubmitting(false);
            }

        }

    
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSumbit}
            >

                <Form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label htmlFor="selection">Event:</label>
                        <Field as="select" id="selection" name="selection">
                            <option value="" label='Select an Option'/>
                            {options.map((option)=>(
                                <option key={option} value={option}>
                                    {option}
                                 </option>
                            ))}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
                
            </Formik>
        </div>
    )
}

export default TicketPage