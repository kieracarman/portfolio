import Head from 'next/head'

import { Layout } from '../components'
import styles from '../styles/Contact.module.scss'
import utilStyles from '../styles/utils.module.scss'

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return
            formData[field.name] = field.value
        })
        fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
    }

    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <h2 className={utilStyles.title}>Contact Me</h2>
            <form className={`${utilStyles.body} ${styles.form}`} method='post' onSubmit={handleSubmit}>
                <h4>Have a question? Send me a message!</h4>
                <p>
                    <label className={styles.label} htmlFor='name'>Name</label>
                    <input className={styles.input} type='text' name='name' />
                </p>
                <p>
                    <label className={styles.label} htmlFor='email'>Email</label>
                    <input className={styles.input} type='email' name='email' />
                </p>
                <p>
                    <label className={styles.label} htmlFor='message'>Message</label>
                    <textarea className={styles.textArea} name='message' />
                </p>
                <p>
                    <button className={styles.button}>Submit</button>
                </p>
            </form>
        </Layout>
    )
}

export default Contact