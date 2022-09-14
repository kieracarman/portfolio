import Link from 'next/link'
import Image from 'next/image'

type TCardProps = {
  link: string
  id: string
  title: string
}

const Card = (props: TCardProps) => {
  return (
    <article className='mb-12'>
      <Link href={props.link}>
        <a>
          <div className='rounded-xl overflow-hidden' style={{ fontSize: 0 }}>
            <Image
              src={`/images/${props.id}-screenshot.png`}
              width={2560}
              height={1600}
              alt='project screenshot'
            />
          </div>
          <h3 className='mt-4'>{props.title}</h3>
        </a>
      </Link>
    </article>
  )
}

export default Card
