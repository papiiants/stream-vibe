import './Tabs.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";

const Tabs = (props) => {
  const {
    className,
    title,
    items = [],
    navigationTargetElementId = null,
  } = props

  return (
    <div
      className={classNames(className, 'tabs')}
      data-js-tabs={JSON.stringify({
        navigationTargetElementId,
      })}
    >
      {!navigationTargetElementId && (
        <div>NAVIGATION</div>
      )}
      <div className="tabs__body">
        {items.map((item, index) => {
          const {
            title,
            children,
            isActive
          } = item

          const titleFormatted = getIdFromTitle(title)
          const buttonId = `${titleFormatted}-tab`
          const contentId = `${titleFormatted}-tabpanel`

          return (
            <div
              className={classNames('tabs__content', {'is-active': isActive})}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content=""
              key={index}
            >
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs