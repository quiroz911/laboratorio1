import 'styles/globals.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from 'pages';
import PublicLayout from 'layouts/PublicLayout';
import ClientIndex from 'pages/cliente';
import DeveloperIndex from 'pages/developer';

import AdministratorIndex from 'pages/administrator';
import CreateEnterprise from 'pages/creation/createEnterprise';
import CreateIssue from 'pages/creation/createIssue';
import CreateProyect from 'pages/creation/createProyect';
import CreateUser from 'pages/creation/createUser';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route path='' element={<Index />} />
        <Route path='/client' element={<ClientIndex />} />
        <Route path='/administrator' element={<AdministratorIndex />} />
        <Route path='/developer' element={<DeveloperIndex />} />
        <Route path='/createEnterprise' element={<CreateEnterprise />} />
        <Route path='/createIssue' element={<CreateIssue />} />
        <Route path='/createProyect' element={<CreateProyect />} />
        <Route path='/createUser' element={<CreateUser />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
