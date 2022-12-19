import { useState } from 'react'

const Contact = () => {
  const [buttonText, setButtonText] = useState('kiera.carman@gmail.com')

  const buttonClasses =
    'hover:opacity-80 transition block w-fit rounded-lg border-none bg-text text-2xl p-3 font-bold text-background outline-none md:p-8 md:text-5xl'

  return (
    <section id='contact' className='m-auto mb-36 max-w-6xl px-4'>
      <h2 className='mb-8 text-4xl font-bold md:text-5xl'>
        Let&apos;s work together!
      </h2>
      <div className='flex flex-col items-center gap-4 md:items-start'>
        <button
          onClick={() => {
            navigator.clipboard.writeText('kiera.carman@gmail.com')
            setButtonText('Copied to clipboard!')
          }}
          className={buttonClasses}
        >
          {buttonText}
        </button>
        <a
          download='Resume-Kiera-Carman.pdf'
          href='/resume.pdf'
          className={`${buttonClasses} underline md:p-6 md:text-3xl`}
        >
          Resume-Kiera-Carman.pdf
        </a>
      </div>
    </section>
  )
}

export default Contact
