import { FormEvent, useState } from 'react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })
    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    setSubmitted(true)
  }

  return (
    <section id='contact' className='prose-lg mx-auto max-w-xl px-4'>
      <h2 className='mt-8 mb-2 font-semibold text-accent lg:mt-12 lg:text-4xl'>
        Contact Me
      </h2>
      <form method='post' onSubmit={handleSubmit}>
        <h4 className='mt-0 mb-6 px-1'>Have a question? Send me a message!</h4>
        <p>
          <label htmlFor='name' className='mb-1 block pl-1'>
            Name
          </label>
          <input
            type='text'
            name='name'
            className='w-full rounded-xl border border-background-light bg-background-light px-3 py-1 transition duration-200 focus:border-accent focus:outline-none'
          />
        </p>
        <p>
          <label htmlFor='email' className='mb-1 block pl-1'>
            Email
          </label>
          <input
            type='email'
            name='email'
            className='w-full rounded-xl border border-background-light bg-background-light px-3 py-1 transition duration-200 focus:border-accent focus:outline-none'
          />
        </p>
        <p>
          <label htmlFor='message' className='mb-1 block pl-1'>
            Message
          </label>
          <textarea
            name='message'
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
