import React from 'react'
import ReactDOM  from 'react-dom'

export default function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>
      Portal Demo: it allows us to create childrens into a dom that exits apart from the DOM hierarchy of par comp.
    </h1>,
    document.getElementById('portal-root')
  )
}
