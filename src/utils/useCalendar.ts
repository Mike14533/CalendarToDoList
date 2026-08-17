const now = new Date();
    const thisYear = now.getFullYear();
    const thisMonth = now.getMonth();

export function getStart(){return new Date(thisYear, thisMonth)}

function useCalendar(){
    
    
    function getEnd(){return new Date(thisYear, thisMonth + 1, -1)}    
    function goNext(){return new Date(thisYear, thisMonth + 1)}
    function goPrev(){return new Date(thisYear, thisMonth - 1)}
    
    console.log("get start: " + getStart())

    let cells = []

    for(let i = 5; i > - 2; i--){
        cells.push(getEnd().getDate() - i)
    }
    for(let i = 1; i < getEnd().getDate() + 2; i++){
        cells.push(i)
    }
    for(let i = 1; i < 7; i++){
        cells.push(i)
    }
    return {now, thisYear, thisMonth, cells, getStart}
}

export default useCalendar;