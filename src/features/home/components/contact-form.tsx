'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/common/button'
import { Form, useForm } from '@/components/common/form'
import { Input } from '@/components/common/input'
import { Select } from '@/components/common/select'
import { TextArea } from '@/components/common/textarea'
import { postContactSchema } from '@/utils/validations/createPostSchema'

const FORM_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIO3z06vqp3D8RlSAIwxgSgjembUy2Dz46B59i2lhAC7nJqA/formResponse'

const ENTRY_IDS = {
  name: 'entry.1283335061',
  email: 'entry.97924598',
  phone: 'entry.230213932',
  package: 'entry.648694492',
  content: 'entry.2039731150',
}

const OPTIONS = [
  {
    value: 'Gói cơ bản (99.000 VNĐ)',
    label: 'Gói cơ bản (99.000 VNĐ)',
  },
  {
    value: 'Gói phổ biến (199.000 VNĐ)',
    label: 'Gói phổ biến (199.000 VNĐ)',
  },
  {
    value: 'Gói nâng cao (499.000 VNĐ)',
    label: 'Gói nâng cao (499.000 VNĐ)',
  },
]

const ContactForm = () => {
  const form = useForm({
    resolver: yupResolver(postContactSchema),
  })

  const { handleSubmit, setValue } = form

  const [isFetching, setIsFetching] = useState<boolean>(false)

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData()
      formData.append(ENTRY_IDS.name, data.name)
      formData.append(ENTRY_IDS.email, data.email)
      formData.append(ENTRY_IDS.phone, data.phone)
      formData.append(ENTRY_IDS.package, data.package)
      formData.append(ENTRY_IDS.content, data.content)

      setIsFetching(true)
      await fetch(FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })
        .then(() => {
          toast.success('Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.')
          resetForm()
        })
        .catch(() => {
          toast.error('Gửi không thành công. Vui lòng thử lại.')
        })

      setIsFetching(false)
    } catch (error) {
      console.log(error)
      setIsFetching(false)
    }
  }

  const resetForm = () => {
    setValue('name', '')
    setValue('email', '')
    setValue('phone', '')
    setValue('package', '')
    setValue('content', '')
  }

  return (
    <Form form={form}>
      <Form.Item name='name' label='Họ và tên'>
        <Input placeholder='Họ và tên' fullWidth />
      </Form.Item>
      <div className='grid grid-cols-1 gap-x-4 md:grid-cols-2'>
        <Form.Item name='email' label='Email' layout='vertical'>
          <Input placeholder='Email' fullWidth />
        </Form.Item>
        <Form.Item name='phone' label='Số điện thoại' layout='vertical'>
          <Input placeholder='Số điện thoại' fullWidth />
        </Form.Item>
      </div>
      <Form.Item name='package' label='Chọn gói'>
        <Select options={OPTIONS} width={'100%'} placeholder='Chọn gói' />
      </Form.Item>
      <Form.Item name='content' label='Nội dung'>
        <TextArea placeholder='Nội dung' />
      </Form.Item>
      <div className='flex justify-center'>
        <Button
          onClick={handleSubmit(onSubmit)}
          loading={isFetching}
          disabled={isFetching}
        >
          Đăng ký
        </Button>
      </div>
    </Form>
  )
}

export default ContactForm
