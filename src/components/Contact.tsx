import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = handleSubmit((data) => {
    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    setSubmitted(true)
  })

  return (
    <section id='contact' className='prose-lg mx-auto max-w-xl px-4'>
      <h2 className='mt-8 mb-2 font-semibold text-accent lg:mt-12 lg:text-4xl'>
        Contact Me
      </h2>
      <form method='post' onSubmit={onSubmit}>
        <h4 className='mt-0 mb-6 px-1'>Have a question? Send me a message!</h4>
        <p>
          <label htmlFor='name' className='mb-1 block pl-1'>
            Name
          </label>
          <input
            {...register('name')}
            className='w-full rounded-xl border border-background-light bg-background-light px-3 py-1 transition duration-200 focus:border-accent focus:outline-none'
          />
        </p>
        <p>
          <label htmlFor='email' className='mb-1 block pl-1'>
            Email
          </label>
          <input
            type='email'
            {...register('email')}
            className='w-full rounded-xl border border-background-light bg-background-light px-3 py-1 transition duration-200 focus:border-accent focus:outline-none'
          />
        </p>
        <p>
          <label htmlFor='message' className='mb-1 block pl-1'>
            Message
          </label>
          <textarea
            {...register('message')}
            className='w-full resize-none rounded-xl border border-background-light bg-background-light px-3 py-1 transition duration-200 focus:border-accent focus:outline-none'
          />
        </p>
        <p className='text-center'>
          {!submitted ? (
            <button className='rounded-xl border border-background-light bg-background-light px-8 py-2 text-center transition duration-200  hover:border-accent hover:text-accent focus:outline-none'>
              Submit
            </button>
          ) : (
            <span className='text-accent'>Thanks for your message!</span>
          )}
        </p>
      </form>
    </section>
  )
}

export default Contact
