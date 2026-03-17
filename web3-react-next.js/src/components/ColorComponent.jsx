'use client'

import { useState } from "react"

export default function CardColor() {
  const [padrao, setPadrao] = useState("#d0bfff")
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`flex p-5 w-48 h-64 border items-center gap-5 flex-col transition-colors duration-300 ${isDarkMode ? 'bg-slate-800 border-slate-600' : 'bg-white border-gray-200'}`}>
      <div className="flex flex-col items-center gap-2">
        <button 
          className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${isDarkMode ? 'bg-yellow-400 text-black' : 'bg-indigo-900 text-white'}`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? 'MODO CLARO' : 'MODO ESCURO'}
        </button>
      </div>

      
      <div className="h-20 w-20 border shadow-lg">
        <div className="w-full h-full" style={{ backgroundColor: padrao }}></div>
      </div>

      
      <div className="flex gap-2">
   
  <div className="w-6 h-6 border">
    <button 
      className="w-full h-full" 
      style={{ backgroundColor:isDarkMode ? '#000' : '#EA83D5' }} 
      onClick={() => setPadrao(isDarkMode ? '#000' : '#EA83D5')}
    ></button>
  </div>

  
  <div className="w-6 h-6 border">
    <button 
      className="w-full h-full" 
      style={{ backgroundColor:isDarkMode ? '#2F375B' : '#EA6A23' }} 
      onClick={() => setPadrao(isDarkMode ? '#2F375B' : '#EA6A23')}
    ></button>
  </div>

  
  <div className="w-6 h-6 border">
    <button 
      className="w-full h-full" 
      style={{ backgroundColor:isDarkMode ? '#6B17B0' : '#2B7621' }} 
      onClick={() => setPadrao(isDarkMode ? '#6B17B0' : '#2B7621')}
    ></button>
  </div>
</div>
      <p className={`text-xs ${isDarkMode ? 'text-white' : 'text-black'}`}>
        Cor: {padrao}
      </p>
    </div>
  )
}