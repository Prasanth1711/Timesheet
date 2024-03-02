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
import { TKeyValue } from "@/models/TKeyValue"
import { TTimeSheetData } from "@/models/TTimeSheetData"

const timeSheetData: TTimeSheetData[] = [
    {
        id: "INV001",
        Client: {
            label: "UTA",
            value: "uta"
        },
        Project: {
            label: "UTA-Main",
            value: "uta-main"
        },
        Phase: {
            label: 'Development',
            value: "development"
        },
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
        id: "INV013",
        Client: {
            value: "united-talent-agency",
            label: "United Talent Agency",
        },
        Project: {
            label: "UTA-Speakers",
            value: "uta-speakers"
        },
        Phase: {
            label: 'Testing',
            value: "testing"
        },
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
        Client: {
            label: "Test",
            value: "test"
        },
        Project: {
            label: "UTA-Speakers",
            value: "uta-speakers"
        },
        Phase: {
            label: 'Development',
            value: "development"
        },
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


const ClientsDropDownList: TKeyValue[] = [
    {
        value: "united-talent-agency",
        label: "United Talent Agency",
    },

    {
        value: "uta",
        label: "UTA",
    },
    {
        value: "test",
        label: "TEST",
    }
]

const ProjectsDropDownList: TKeyValue[] = [
    {
        label: "UTA-Speakers",
        value: "uta-speakers"
    },
    {
        label: "UTA",
        value: "uta"
    },
    {
        label: "UTA-Main",
        value: "uta-main"
    },
    {
        value: "test-project",
        label: "TEST-Project",
    }
]


const PhaseDropDownList: TKeyValue[] = [
    {
        label: 'Testing',
        value: "testing"
    },
    {
        label: 'Development',
        value: "development"
    }
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
                            <SearchDropDown preSelectedData={weekData.Client} dropdownListData={ClientsDropDownList} onSelectedItem={(data:TKeyValue)=>{console.log(data)}} />
                        </TableCell>
                        <TableCell>
                            <SearchDropDown preSelectedData={weekData.Project} dropdownListData={ProjectsDropDownList} onSelectedItem={(data:TKeyValue)=>{console.log(data)}} />
                        </TableCell>
                        <TableCell>
                            <SearchDropDown preSelectedData={weekData.Phase} dropdownListData={PhaseDropDownList} onSelectedItem={(data:TKeyValue)=>{console.log(data)}} />
                        </TableCell>
                        <TableCell><Input /></TableCell>
                        <TableCell className="text-right"><Input value={weekData.Mon} onChange={(e) => { console.log(e.target.value) }} className="p-0 text-center" /></TableCell>
                        <TableCell className="text-right"><Input value={weekData.Thu} className="p-0 text-center" /></TableCell>
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
