const now = new Date();
const thisYear = now.getFullYear();
const thisMonth = now.getMonth();


interface CalendarTodo{
    day: number,
    month: number,
    year: number,
    tasks: string[]
}
export const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
export function addToDo(e: string){
    let tasks: string[] = []
    tasks[0] = e
}
export function addTodoToCalendar(Todo: CalendarTodo){
    let Todos: CalendarTodo[] = []
    Todos[0] = {day: 1, month: 8, year: 2026, tasks: ["bring dog out", "make breakfast", "go to best", "btw this is a test"]}
    Todos[1] = {day: 1, month: 8, year: 2026, tasks: ["bring dog out", "make breakfast", "go to best", "btw this is a test"]}
    Todos[2] = {day: 1, month: 8, year: 2026, tasks: ["bring dog out", "make breakfast", "go to best", "btw this is a test"]}
}
export function getStart(monthNo: number){return new Date(thisYear, monthNo)}
export function getEnd(monthNo: number){return new Date(thisYear, monthNo + 1, 0)}
export function getCalendarMonth(monthNo: number){
    let month = new Date(thisYear, monthNo)
     let cells = []
    
     let leading = 

    let startIndex = 0


    

    for(let i = getEnd(10 - 1).getDate() + (getStart(10).getDay() - 2); i <= getEnd(10 - 1).getDate(); i++){
        cells[i] = i 
         
    }

     for(let i = 1; i <= getEnd(10).getDate(); i++){
         cells.push(i)
     }
    for(let i = getEnd(9+1).getDate(); i < getStart(10+1).getDay(); i++){
         cells.push(i)
     }

     return cells;
}
function useCalendar(){
       
    function goNext(){return new Date(thisYear, thisMonth + 1)}
    function goPrev(){return new Date(thisYear, thisMonth - 1)}
    
    // console.log("get start: " + getStart())

    // let cells = []

    // for(let i = 5; i > - 2; i--){
    //     cells.push(getEnd().getDate() - i)
    // }
    // for(let i = 1; i < getEnd().getDate() + 2; i++){
    //     cells.push(i)
    // }
    // for(let i = 1; i < 7; i++){
    //     cells.push(i)
    // }
    return {now, thisYear, thisMonth,  getStart}
}

export default useCalendar;