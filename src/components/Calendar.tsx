import useCalendar from "../utils/useCalendar";

function Calendar(){
    const {now, thisMonth, thisYear, cells} = useCalendar();
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