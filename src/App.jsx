import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, increseByAmount } from './redux/feature/counterSlice'
import { useState } from 'react'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  const [num,setNum] = useState(5)

  return (
    <div className='p-10'>
    <h1 className='text-5xl font-semibold'>{count}</h1>
    <button 
    onClick={()=>{
    dispatch(increment())
    }}
    className='px-5 py-2 m-5px font-semibold  rounded-sm mt-5 active:scale-95 bg-red-500 text-white mr-2'>Increment</button>
    <button
    onClick={()=>{
    dispatch(decrement())
    }}
    className='px-5 py-2 m-5px font-semibold rounded-sm mt-5 active:scale-95 bg-blue-500 text-white'>Decrement</button>
    <input
    className='px-10 py-2 rounded-full bg-gray-400 ml-2 outline-none text-white'
    value={num}
    onChange={(e)=>{
      setNum(e.target.value)
    }}
    type="number" />
    <button
    onClick={()=>{
     dispatch(increseByAmount(Number(num)))
    }}
    className='px-8 py-2 m-5px font-semibold  rounded-sm mt-5 active:scale-95 bg-gray-900 text-white ml-2'>Increase by Amount</button>
    </div>
  )
}

export default App
