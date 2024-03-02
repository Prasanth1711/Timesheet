import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import SearchDropDown from "./SearchDropDown"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
interface TTimeSheetData {
    id: string,
    Client: string,
    Project: string,
    Phase: string,
    Task: string,
    Mon: string,
    Tue: string,
    Wed: string,
    Thu: string,
    Fri: string,
    Sat: string,
    Sun: string,
    Total: string,

}
const timeSheetData :TTimeSheetData[]= [
    {
        id: "INV001",
        Client: "",
        Project: "",
        Phase: "",
        Task: "Development",
        Mon: "8",
        Tue: "7",
        Wed: "6",
        Thu: "5",
        Fri: "4",
        Sat: "3",
        Sun: "2",
        Total: "40"
    },

    {
        id: "INV003",
        Client: "",
        Project: "",
        Phase: "",
        Task: "Development",
        Mon: "8",
        Tue: "7",
        Wed: "6",
        Thu: "5",
        Fri: "4",
        Sat: "3",
        Sun: "2",
        Total: "40"
    }, 
    {
        id: "INV003",
        Client: "",
        Project: "",
        Phase: "",
        Task: "Development",
        Mon: "8",
        Tue: "7",
        Wed: "6",
        Thu: "5",
        Fri: "4",
        Sat: "3",
        Sun: "2",
        Total: "40"
    },
    
]

export function TimeSheetTable() {
    return (
        <Table >
            <TableHeader>
                <TableRow content="center" className="">
                    <TableHead className="text-center">Client</TableHead>
                    <TableHead className="text-center">Project</TableHead>
                    <TableHead className="text-center">Phase</TableHead>
                    <TableHead className="w-[150px] text-center">Task</TableHead>
                    <TableHead className="w-[70px] text-center">Mon</TableHead>
                    <TableHead className="w-[70px] text-center">Tue</TableHead>
                    <TableHead className="w-[70px] text-center">Wed</TableHead>
                    <TableHead className="w-[70px] text-center">Thu</TableHead>
                    <TableHead className="w-[70px] text-center">Fri</TableHead>
                    <TableHead className="w-[70px] text-center">Sat</TableHead>
                    <TableHead className="w-[70px] text-center">Sun</TableHead>
                    <TableHead className="w-[70px] text-center">Total</TableHead>
                    <TableHead>--</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {timeSheetData.map((weekData) => (
                    <TableRow key={weekData.id}>
                        <TableCell className="font-medium">
                            <SearchDropDown />
                        </TableCell>
                        <TableCell>
                            <SearchDropDown />
                        </TableCell>
                        <TableCell>
                            <SearchDropDown />
                        </TableCell>
                        <TableCell><Input /></TableCell>
                        <TableCell className="text-right"><Input value={weekData.Mon} onChange={(e)=>{console.log(e.target.value)}}  className="p-0 text-center" /></TableCell>
                        <TableCell className="text-right"><Input value={weekData.Thu}  className="p-0 text-center" /></TableCell>
                        <TableCell className="text-right"><Input value={weekData.Wed} className="p-0 text-center" /></TableCell>
                        <TableCell className="text-right"><Input value={weekData.Thu} className="p-0 text-center" /></TableCell>
                        <TableCell className="text-right"><Input value={weekData.Fri} className="p-0 text-center" /></TableCell>
                        <TableCell className="text-right"><Input value={weekData.Sat} className="p-0 text-center" /></TableCell>
                        <TableCell className="text-right"><Input value={weekData.Sun} className="p-0 text-center" /></TableCell>
                        <TableCell className="text-right">{weekData.Total}</TableCell>
                        <TableCell className="text-right">0</TableCell>



                    </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    )
}
