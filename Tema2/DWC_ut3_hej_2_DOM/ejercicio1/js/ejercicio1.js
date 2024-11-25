function generateTable() {
    let table = document.createElement('table');
    table.border = '1';
    table.style.borderCollapse = 'collapse';
    table.style.width = '50%';
    table.style.margin = '20px auto';
    table.style.textAlign = 'center';
    table.style.fontFamily = 'Arial, sans-serif';

    for (let i = 0; i <= 10; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j <= 10; j++) {
            let cell = document.createElement(i === 0 || j === 0 ? 'th' : 'td');

            switch (true) {
                case (i === 0 && j === 0):
                    cell.innerText = '';
                    break;
                case (i === 0):
                    cell.innerText = j;
                    break;
                case (j === 0):
                    cell.innerText = i;
                    break;
                default:
                    cell.innerText = i * j;
            }
            cell.style.border = '1px solid #ddd';
            cell.style.padding = '8px';
            
            if (i === 0 || j === 0) {
                cell.style.backgroundColor = '#f2f2f2';
                cell.style.fontWeight = 'bold';
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

generateTable();