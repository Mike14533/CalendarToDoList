import useCalendar, { getCalendarMonth } from "../utils/useCalendar";

function Calendar(){
    let cells = getCalendarMonth()
    const {now, thisMonth, thisYear} = useCalendar();
    return(
        <>
        <div>
            <h1>{thisMonth.toString()}</h1> 
            <h1>{thisYear.toString()}</h1>
        </div>
        <div>
            <h1>Sunday Monday Tuesday Wednesday Thursday Friday Saturday</h1>
            {cells.map((item: number, id: number) => (
                <div>
                    <h1>{item}</h1>
                    <button>add task</button>
                </div>
            ))}
        </div>
            
        </>
    )
}

export default Calendar;