import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppSelector, useDispatchHook } from './app/hooks'
import { increment, amountAdded } from './features/counter/counterSlice'
import { useFetchBreedsQuery } from "./features/dogs/dogSlice"

function App() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useDispatchHook();
  const { data = [], isFetching } = useFetchBreedsQuery()
  const [numDogs, setnumDogs] = useState(10)

  const handleClick = () => {
    // to incremenmt the count by 1 use the increment()
    // to incremenmt the count by a specific amount use the amountAdded()
    // dispatch(increment())
    dispatch(amountAdded(3))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" 
            onClick={handleClick}
          >
            count is: {count}
          </button>
        </p>
        <p>
         <div>
           Number of dogs fetched: {data.length}
           <table>
             <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
             </thead>
             <tbody>
               {data.map((breed) => (
                 <tr key={breed.id}>
                   <td>{breed.name}</td>
                   <td>
                      <img src={breed.image.url} height={250} alt={breed.name} />
                   </td>
                 </tr>
               ))}
             </tbody> 
           </table>
         </div>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
