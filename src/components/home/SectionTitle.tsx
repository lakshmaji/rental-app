import { FC } from 'react'

interface Props {
  title: string
  subtitle: string
}

const SectionTitle: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="title-container">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </div>
  )
}

export default SectionTitle
