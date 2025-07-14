import './Seasons.scss'
import classNames from 'classnames'
import AccordionGroup from '@/components/AccordionGroup'
import seasonsItems from '@/components/Seasons/seasonsItems'
import Accordion from '@/components/Accordion'

const Seasons = (props) => {
  const {
    className,
  } = props

  return (
    <AccordionGroup
      mode="dark"
      isOrderedList={false}
    >
      {seasonsItems.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          title={title}
          id={`season-${index }`}
          name="seasons"
          isOpen={index === 0}
          key={index}
        >

        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons