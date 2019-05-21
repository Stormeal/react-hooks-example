import React, { FunctionComponent, useState, useEffect } from 'react';
import { Input, Button } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';


const App: FunctionComponent<{ name?: any }> = () => {
  const name = useFormInput('Mary')
  const surname = useFormInput('Poppins')
  const width = useWindowWidth()
  useDocumentTitle(name.value + ' ' + surname.value)


  return <>
    <div className="app">
      <div className="container">

        <label>Firstname</label>
        <br />
        <Input
          {...name}
        />

        <br></br>
        <br></br>

        <label>Surname</label>
        <br />
        <Input
          {...surname}
        />
        <br></br>
        <label>Width:</label>
        <div>{width}</div>

      </div>
    </div>
  </>
}

function useFormInput(initialValue: any) {
  const [value, setValue] = useState(initialValue)

  function handleChange(_name: any) {
    setValue(_name.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}

function useDocumentTitle(title: any) {
  useEffect(() => {
    document.title = title
  })
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  });
  return width
}


export default App;
