import Link from 'next/link'
import Image from 'next/image'

type TCardProps = {
  link: string
  id: string
  title: string
  category: string
}

const Card = (props: TCardProps) => {
  return (
    <div>
      <div>
        <Link href={props.link}>
          <a>
            <div>
              <Image
                priority
                src={`/images/${props.id}-screenshot.png`}
                width={1536}
                height={2048}
                alt='project screenshot'
              />
            </div>
            <div>
              <div>{props.title}</div>
              <div>{props.category}</div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Card
