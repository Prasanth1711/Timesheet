"use client"
import {TimeSheetHome} from './components/TimeSheetHome'
import { DatePickerWithRange } from "./components/Temp";
export default function Home() {
  return (
    <main className="w-screen h-screen bg-gray-200">
    <TimeSheetHome/>
    <DatePickerWithRange/>
    </main>
  );
}
