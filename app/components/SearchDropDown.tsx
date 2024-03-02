"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { TKeyValue } from "@/models/TKeyValue"



interface SearchDropDownProps {
    preSelectedData: TKeyValue,
    dropdownListData: TKeyValue[],
    onSelectedItem: (data: TKeyValue) => void;

}

export default function SearchDropDown({ dropdownListData, preSelectedData, onSelectedItem }: SearchDropDownProps) {
    const [open, setOpen] = React.useState(false)
    const [valuee, setValue] = React.useState(preSelectedData.value ? preSelectedData.value : "")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {valuee
                        ? dropdownListData.find((each) => each.value === valuee)?.label
                        : "Select Client"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>Select Client</CommandEmpty>
                    <CommandGroup>
                        {dropdownListData.map((each) => (
                            <CommandItem
                                key={each.value}
                                value={each.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === valuee ? "" : currentValue)
                                    const temp:TKeyValue={ value: currentValue, label: dropdownListData.find((x)=>x.value==currentValue)?.label ??' ' }
                                    onSelectedItem(temp)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        valuee === each.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {each.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
