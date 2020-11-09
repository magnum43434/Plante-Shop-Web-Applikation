export default function json2listgroup(json: any, classes?: string) {
    // let cols = Object.keys(json[0]);
    // let headerRow = '';
    let bodyRows = '';
    // console.log(json)

    let capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (json.count > 1) {
        json.map((element: any) => {
            bodyRows += `<li class="list-group-item">`;
            let el = Object.keys(element)
            for (const key in Object.keys(element)) {
                bodyRows += `<h5>${capitalizeFirstLetter(el[key])}: ${element[el[key]]}</h5>`;
            }
            bodyRows += `</li>`;
        });
    } else {
        bodyRows += `<li class="list-group-item">`;
        let el = Object.keys(json)
        for (const key in Object.keys(json)) {
            bodyRows += `<h5>${capitalizeFirstLetter(el[key])}: ${json[el[key]]}</h5>`;
        }
        bodyRows += `</li>`;
    }

    //bodyRows += `<li class="list-group-item">${JSON.stringify(row[index])}</li>`;

    return (`<ul class="list-group ${classes}" id="">${bodyRows}</ul>`)
}