import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UiShell from './layout/UiShell';
import InfoState from './context/info/InfoState';
import StepState from './context/step/StepState';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Pedidos from './pages/Pedidos';

import './App.css';

function App() {
  return (
    <StepState>
      <InfoState>
        <BrowserRouter>
          <UiShell>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/pedidos" element={<Pedidos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UiShell>
        </BrowserRouter>
      </InfoState>
    </StepState>
  );
}

export default App;
