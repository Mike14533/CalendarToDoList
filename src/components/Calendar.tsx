import useCalendar, { getCalendarMonth, weekdays } from "../utils/useCalendar";

function Calendar(){

    
    const {now, thisMonth, thisYear, goNext, goPrev} = useCalendar();
    let cells = getCalendarMonth(thisMonth)
    return(
        <>
        <div>
            <h1>{thisMonth.toString()}</h1> 
            <h1>{thisYear.toString()}</h1>
        </div>
        <div>
            <h1>{weekdays}</h1>
            {cells.map((item: number, id: number) => {
                let today = now.getDate()
                let isToday = false
                if(item == today){
                    isToday = true
                }
                else{
                    isToday = false
                }
                return(
                <div>
                    {isToday ? <h1>today</h1> : null}
                    <h1 className = "today: blue">{item}</h1>
                    <button>add task</button>
                </div>
                
            )})}
        </div>
            <button onClick = {goNext}>next</button>
            <button onClick = {goPrev}>prev</button>
        </>
    )
}

export default Calendar;