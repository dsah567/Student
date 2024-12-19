import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Students from './components/Students';
import Chapter from './components/Chapter';
import Dashboard from './components/Dashboard';
import Help from './components/Help';
import Report from './components/Report';
import Setting from './components/Settings'


const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>} errorElement={<Error/>}>
    <Route index element={<Students/>} />
    <Route path="/chapter" element={< Chapter/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/help" element={< Help/>} />
      <Route path="/report" element={< Report/>} />
      <Route path="/settings" element={< Setting/>} />
  </Route>
))
function App() {

  return (
    <RouterProvider router={route}/>
  )
}

export default App
