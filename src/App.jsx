import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import { formatearDinero,calcularTotal,calcularPagoMensual } from '../helpers'
function App() {
  const [cantidad, setCantidad] = useState(10000)
  const [plazo,setPlazo]=useState(6)
  const [total,setTotal]=useState(calcularTotal(cantidad,plazo))
  const [pagoMeses,setPagoMeses]=useState(calcularPagoMensual(total,plazo))
  const min=0;
  const max=20000;
  const step=100;
  useEffect(()=>{
    const totalCalculo=calcularTotal(cantidad,plazo)
    setTotal(totalCalculo)
    
  },[plazo,cantidad])
  useEffect(()=>{
    setPagoMeses(total/plazo)
  },[total])
  const handleClickDecremento=()=>{
    const valor=(cantidad- step)
    if(valor < min){
      return;
    }
    setCantidad(valor)
  }
  const handleClickIncremento=()=>{
    const valor=(cantidad +step)
    if(valor > max){
      return;
    }
    setCantidad(valor)
  }

  return (
    <div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
      <Header/>
      <div className='flex justify-between my-7'>
        <Button 
          operador="-"
          fn={handleClickDecremento}
        />
        <Button
          operador="+"
          fn={handleClickIncremento}
        />
        
      </div>
      <input 
        type="range"
        className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
        onChange={e=>setCantidad(parseInt(e.target.value))}
        value={cantidad}
        min={min}
        max={max}
        step={step}
        
      />
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{formatearDinero(cantidad)}</p>
      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Elige un <span className='text-indigo-600'>Plazo</span>
      </h2>
      <select 
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        onChange={e=>setPlazo(+e.target.value)}
        value={plazo}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>
      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Resumen <span className='text-indigo-600'>de Pagos</span>
        </h2>
        <p className='text-xl text-gray-500 text-center font-bold'>{plazo} Meses</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(pagoMeses)} Pagos mensuales</p>
      </div>
    </div>
    
  )
}

export default App
