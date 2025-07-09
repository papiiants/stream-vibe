import './Collections.scss'
import classNames from 'classnames'
import Tabs from "@/components/Tabs";

const Collections = (props) => {
  const {
    className,
  } = props

  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile
      tabs={[
        {
          title: 'Title',
          children: <h3>Title</h3>,
        },
      ]}
    />
  )
}

export default Collections