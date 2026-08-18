import useCalendar, { getCalendarMonth } from "../utils/useCalendar";

function Calendar(){
    let cells = getCalendarMonth(7)
    const {now, thisMonth, thisYear} = useCalendar();
    return(
        <>
        <div>
            <h1>{thisMonth.toString()}</h1> 
            <h1>{thisYear.toString()}</h1>
        </div>
        <div>
            {cells.map((item: number, id: number) => (
                <h1>{item}</h1>
            ))}
        </div>
            
        </>
    )
}

export default Calendar;