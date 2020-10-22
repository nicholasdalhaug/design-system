import React, { forwardRef, ReactElement, useContext } from 'react'
import { TabsContext } from './Tabs.context'

type Props = React.HTMLAttributes<HTMLDivElement>

const TabPanels = forwardRef<HTMLDivElement, Props>(function TabPanels(
  { children, ...props },
  ref,
) {
  const { activeTab, tabsId } = useContext(TabsContext)

  const Panels = React.Children.map(children, (child: ReactElement, index) =>
    React.cloneElement(child, {
      id: `${tabsId}-panel-${index + 1}`,
      'aria-labelledby': `${tabsId}-tab-${index + 1}`,
      hidden: activeTab !== index,
    }),
  )
  return (
    <div ref={ref} {...props}>
      {Panels}
    </div>
  )
})

export { TabPanels }