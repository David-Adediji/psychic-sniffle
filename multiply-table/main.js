
function calculate(){
    let row = rows.value;
    let column = columns.value;
    let table = multiplyTable;
    let a = 1, b = 1;
    
    for (let i = 0; i < row; i++) {
        for (let index = 0; index < column; index++) {
            // if (index < column) {
                table.innerHTML += a.toString() + "*" + b.toString() + "=" + (a*b) + "&nbsp;&nbsp;";
            // }
            a++;
        }
        b++;
        a = 1;
        table.innerHTML += "<br>"
    }
    
}
