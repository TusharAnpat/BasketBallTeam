import './App.css';
import Composeteam from './Components/Composeteam';
import FirstQuater from './Components/FirstQuater';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState({ pageValue: "formPage" });

  const [formArray, setFormArray] = useState([]);

  const formUpdate = (formData) => {
    setFormArray((pervState) => {
      return [...pervState, { ...formData }]
    })
  }

  const getPage = (obj) => {
    setPage({ ...obj })
  }

  return (
    <>
      <Navbar getPage={getPage} />
      {
        page.pageValue === 'formPage' ?
          <Composeteam formUpdate={formUpdate} />
          :
          <FirstQuater formArray={formArray} />
      }
    </>
  );
}

export default App;
