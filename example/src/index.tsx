import React from 'react'
import ReactDOM from 'react-dom/client'
import { Typing } from 'my-react-typescript-package-goyco'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>
        Hi, i am a <Typing text={['software developer', 'writer']} speed={400} />
      </h2>
    </div>
  </React.StrictMode>,
)
