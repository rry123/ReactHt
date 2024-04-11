import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState} from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'
function App() {
    return <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
}

function MainApp(){
  const [networkAtom , setNetworkAtom] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <RecoilRoot>
      <button>Home</button>
      <button>My Network ({networkAtom.network})</button>
      <button>Jobs ({networkAtom.jobs})</button>
      <button>Messaging ({networkAtom.messaging})</button>
      <button>Notifications ({networkAtom.notifications})</button>
      <button>Me {totalNotificationCount}</button>
    </RecoilRoot>
  )
}

export default App
