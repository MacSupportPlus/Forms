import React, {useState, useEffect} from 'react'
import {Doughnut} from 'react-chartjs-2'



const Plots = () => {
    const [recoveredVictims , setRecoveredVictims] = useState([])
    const [recoveredState , setRecoveredState] = useState([])

   

    
    useEffect(() => {
        
        //create a[o call for corana data
        
    
        const coronaData = async() => {
        let response = await fetch(`https://corona.lmao.ninja/v2/states`)

        let data = await response.json();
        console.log(data)
        setRecoveredState(data.map(state =>{
            return state.state
        }))
        //setMovies(data.Search)
        setRecoveredVictims(data.map((state) => {
            return state.recovered
        }))
        
        
    

        }
        coronaData();
        console.log(recoveredVictims)

    }, [])

    const data = {
        labels: recoveredState,
        datasets: [
          {
            label: '# of Votes',
            data: recoveredVictims, 
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <>
            <div className='header'>
            <h1 className='title'>Corona Data</h1>
            <div className='links'>
                <a
                className='btn btn-gh'
                href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Doughnut.js'
                >
                Github Source
                </a>
            </div>
            </div>
            <Doughnut data={data}  />
  </>
  )
}

export default Plots
