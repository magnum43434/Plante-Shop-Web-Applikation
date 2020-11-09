export default function json2table(json: any, classes?: string) {
    let cols = Object.keys(json[0]);
    let headerRow = '';
    let bodyRows = '';
    json.sort((n1: any, n2: any) => {
        if (n1.id > n2.id) {
            return 1;
        }

        if (n1.id < n2.id) {
            return -1;
        }

        return 0;
    })

    let capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    cols.map(function (col) {
        headerRow += `<th>${capitalizeFirstLetter(col)}</th>`;
    });

    json.map(function (row: any) {
        bodyRows += '<tr data-toggle="modal" data-target="#myModal">';

        cols.map(function (colName) {
            bodyRows += `<td>${row[colName]}</td>`;
        })

        bodyRows += '</tr>';
    });

    return (`<table class="${classes}"><thead><tr>${headerRow}</tr></thead><tbody>${bodyRows}</tbody></table>`)
}