import './Collections.scss'
import Tabs from "@/components/Tabs";

const Collections = () => {

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