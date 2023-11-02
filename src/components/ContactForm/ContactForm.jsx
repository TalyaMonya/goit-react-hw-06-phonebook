import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, Label, DivLabel, Error, FieldFormik, StyledButton } from './ContactForm.styled';
import { FaUserSecret } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';


const Schema = Yup.object().shape({
  name: Yup
    .string()
    .min(2)
    .trim()
    .required(),
  number: Yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});


export const ContactForm = ({onAdd}) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={Schema}
            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
            }}
            >
            <StyledForm>
                <Label >
                    <DivLabel><FaUserSecret/>Name</DivLabel>
                    <FieldFormik name="name" placeholder="Введіть імʼя" />
                    <Error><ErrorMessage name="name"/></Error>
                </Label>

                <Label>
                    <DivLabel><BsTelephone/>Number</DivLabel>
                    <FieldFormik type="tel" name="number" placeholder="Введіть номер" />
                    <Error><ErrorMessage name="number"/></Error>
                </Label>

                <StyledButton type="submit">Add contact</StyledButton>
            </StyledForm>
    </Formik> 
    )
}


