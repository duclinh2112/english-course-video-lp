import * as yup from 'yup'

import { emailRegExp } from '../constants'

export const postContactSchema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập trường này'),
  email: yup
    .string()
    .required('Vui lòng nhập trường này')
    .matches(emailRegExp, 'Vui lòng nhập đúng định dạng email'),
  phone: yup.string().required('Vui lòng nhập trường này'),
  package: yup.string().required('Vui lòng nhập trường này'),
  content: yup.string().default(''),
})
