import React, {useEffect, useState} from 'react'

const Forms = () => {

    const [textValue, setTextValue] = useState('V')
    const [isValid, setIsValid] = useState(false)
    const [selectValue, setSelectValue] = useState('Nashville')

    const handleForm = (e) => {
        e.preventDefault()

        console.log(`
        ${textValue}
        ${isValid}
        ${selectValue}
        `)

    }
  return (
    <>
    <h2>{selectValue}</h2>
    <h2>{textValue} </h2>
    <h2>{isValid ? "true" : "false"}</h2>
    
      <form onSubmit={handleForm}> Navigate((
        <input type="text" value={textValue} onChange= {(e) => setTextValue(e.target.value)} />
        <br />
        <input type="checkbox" checked={isValid} onChange={(e) => {setIsValid(e.target.checked)}} />
        <select name="" value={selectValue} id="" onChange={e=>setSelectValue(e.target.value)}>
            <option value="Houston">Houston</option>
            <option value="Atlanta">Atlanta</option>
            <option value="Dallas">Dallas</option>
            <option value="Ashville">Ashville</option>
            <option value="Nashville">Nashville</option>
        </select>
        <input type="submit" />
      </form>
    </>
  )
}

export default Forms
