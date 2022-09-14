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
    <section className='prose-lg px-4'>
      <h2 className='mt-8 mb-2 text-accent font-semibold'>Contact Me</h2>
      <form method='post' onSubmit={handleSubmit}>
        <h4 className='mt-0 mb-6 px-1'>Have a question? Send me a message!</h4>
        <p>
          <label htmlFor='name' className='block mb-1 pl-1'>
            Name
          </label>
          <input
            type='text'
            name='name'
            className='rounded-xl w-full transition duration-200 bg-background-light border border-background-light px-3 py-1 focus:outline-none focus:border-accent'
          />
        </p>
        <p>
          <label htmlFor='email' className='block mb-1 pl-1'>
            Email
          </label>
          <input
            type='email'
            name='email'
            className='rounded-xl w-full transition duration-200 bg-background-light border border-background-light px-3 py-1 focus:outline-none focus:border-accent'
          />
        </p>
        <p>
          <label htmlFor='message' className='block mb-1 pl-1'>
            Message
          </label>
          <textarea
            name='message'
            className='rounded-xl resize-none w-full transition duration-200 bg-background-light border border-background-light px-3 py-1 focus:outline-none focus:border-accent'
          />
        </p>
        <p className='text-center'>
          {!submitted ? (
            <button className='px-8 py-2 text-center transition duration-200 border rounded-xl focus:outline-none bg-background-light  border-background-light hover:text-accent hover:border-accent'>
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
