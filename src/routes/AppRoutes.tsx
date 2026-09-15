import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CommandCenterLayout } from '../layouts/CommandCenterLayout'

import { CommandCenter } from '../pages/CommandCenter'
import { Operations } from '../pages/Operations'
import { Personnel } from '../pages/Personnel'
import { Intelligence } from '../pages/Intelligence'
import { Database } from '../pages/Database'
import { Equipment } from '../pages/Equipment'
import { Codec } from '../pages/Codec'

export function AppRoutes(){
    return (
       <BrowserRouter>
      <Routes>
        <Route element={<CommandCenterLayout />}>
          <Route path="/" element={<CommandCenter />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/database" element={<Database />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/codec" element={<Codec />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}