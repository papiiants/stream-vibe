import './Seasons.scss'
import AccordionGroup from '@/components/AccordionGroup'
import seasonsItems from '@/components/Seasons/seasonsItems'
import Accordion from '@/components/Accordion'

const Seasons = () => {

  return (
    <AccordionGroup
      mode="dark"
      isOrderedList={false}
    >
      {seasonsItems.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          titleLevelClassName="h4"
          title={title}
          subtitle={subtitle}
          id={`season-${index }`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, saepe?
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons