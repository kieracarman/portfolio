import { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const mail = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body)

  const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `

  const data = {
    to: 'kiera.carman@gmail.com',
    from: {
      email: 'hello@kieracarman.com',
      name: 'Contact Form'
    },
    subject: `Message from: ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  await sendgrid.send(data)

  res.status(200).json({ status: 'ok' })
}

export default mail
