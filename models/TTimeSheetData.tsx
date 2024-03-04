import { TKeyValue } from "./TKeyValue";

export  interface TTimeSheetData {
    id: string,
    Client?: TKeyValue,
    Project?: TKeyValue,
    Phase?: TKeyValue,
    Task?: string,
    Mon?: string,
    Tue?: string,
    Wed?: string,
    Thu?: string,
    Fri?: string,
    Sat?: string,
    Sun?: string,
    Total?: string,

}