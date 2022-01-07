import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRoute from './components/routing/PrivateRoute';

import UiShell from './components/layout/UiShell';
import InfoState from './context/info/InfoState';
import StepState from './context/step/StepState';
import Home from './components/pages/Home';
import Form from './components/pages/Form';
import Review from './components/pages/Review';
import Final from './components/pages/Final';
import NotFound from './components/pages/NotFound';
import Pedidos from './components/pages/Pedidos';

import './App.css';

function App() {
  return (
    <StepState>
      <InfoState>
        <BrowserRouter>
          <UiShell>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/form" element={<PrivateRoute routeSteps={[1,2,3]}><Form /></PrivateRoute>} />
              <Route exact path="/review" element={<PrivateRoute routeSteps={[4]}><Review /></PrivateRoute>} />
              <Route exact path="/final" element={<PrivateRoute routeSteps={[5]}><Final /></PrivateRoute>} />
              <Route exact path="/pedidos" element={<Pedidos />} />
              <Route exact path="/pedidos/:id" element={<Form />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UiShell>
        </BrowserRouter>
      </InfoState>
    </StepState>
  );
}

export default App;
