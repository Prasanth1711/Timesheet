"use client"
import {TimeSheetHome} from './components/TimeSheetHome'
import { DatePickerWithRange } from "./components/Temp";
import { useEffect, useState } from 'react';
const Home=() =>{
  return (
    <Hydrated>
    <main className="w-screen h-screen bg-gray-200">
    <TimeSheetHome/>
    </main>
    </Hydrated>
  );
}
const Hydrated = ({ children }: { children?: any }) => {
  const [hydration, setHydration] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])
  return hydration ? children : null
}

export default Home
