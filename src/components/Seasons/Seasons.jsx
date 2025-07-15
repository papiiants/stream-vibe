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
          className="seasons"
          titleLevelClassName="h4"
          title={title}
          subtitle={subtitle}
          id={`season-${index }`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li className="seasons__item" key={index}>
                {episode.title}
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons