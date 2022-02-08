import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'font/styles/globals.css';
import Index from 'pages';
import PublicLayout from 'layouts/PublicLayout';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route path='' element={<Index />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
