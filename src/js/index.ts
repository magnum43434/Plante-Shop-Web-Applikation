import * as api from './functions/apiMethods'
import json2table from './functions/jsonToTable'
import json2listgroup from './functions/jsonToListgroup'
import Plante from './model/Plante';

let GetAllPlanterBTN: HTMLButtonElement = <HTMLButtonElement>document.getElementById("GetAllPlanterBTN");
let GetAllPlanterDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("GetAllPlanterDiv");

GetAllPlanterBTN.addEventListener('click', async () => {
    let response = await api.getPlantes("https://planteshoprestservice.azurewebsites.net/api/PlanteController")
    GetAllPlanterDiv.innerHTML = json2table(response.data, "table table-striped table-dark")
})

let GetPlanteInput: HTMLInputElement = <HTMLInputElement>document.getElementById("GetPlanteInput")
let GetPlanteBTN: HTMLButtonElement = <HTMLButtonElement>document.getElementById("GetPlanteBTN");
let GetPlanteDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("GetPlanteDiv");

GetPlanteBTN.addEventListener('click', async () => {
    let selectedId = GetPlanteInput.value
    let response = await api.getPlante("https://planteshoprestservice.azurewebsites.net/api/PlanteController/PlanteId/", Number(selectedId))
    GetPlanteDiv.innerHTML = json2listgroup(response.data)
})

let GetPlanteTypeInput: HTMLInputElement = <HTMLInputElement>document.getElementById("GetPlanteTypeInput")
let GetPlanteTypeBTN: HTMLButtonElement = <HTMLButtonElement>document.getElementById("GetPlanteTypeBTN");
let GetPlanteTypeDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("GetPlanteTypeDiv");

GetPlanteTypeBTN.addEventListener('click', async () => {
    if (GetPlanteTypeInput.value == "") { return }
    let selectedType = GetPlanteTypeInput.value
    let response = await api.getPlanteType("https://planteshoprestservice.azurewebsites.net/api/PlanteController/PlanteType/", selectedType)
    GetPlanteTypeDiv.innerHTML = json2table(response.data, "table table-striped table-dark")
})

let AddPlanteInputPlanteType: HTMLInputElement = <HTMLInputElement>document.getElementById("AddPlanteInputPlanteType")
let AddPlanteInputPlanteNavn: HTMLInputElement = <HTMLInputElement>document.getElementById("AddPlanteInputPlanteNavn")
let AddPlanteInputMaksHoejde: HTMLInputElement = <HTMLInputElement>document.getElementById("AddPlanteInputMaksHoejde")
let AddPlanteInputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("AddPlanteInputPrice")
let AddPlanteButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("AddPlanteButton");
let AddPlanteDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("AddPlanteDiv");

AddPlanteButton.addEventListener('click', async () => {
    let uri = "https://planteshoprestservice.azurewebsites.net/api/PlanteController"
    let PlanteListCount = await api.getPlantes(uri);
    if (AddPlanteInputPlanteType.value == "" || AddPlanteInputPlanteNavn.value == "") { return }
    let newPlante: Plante = {
        PlanteId: PlanteListCount.data.length + 1,
        PlanteType: AddPlanteInputPlanteType.value,
        PlanteNavn: AddPlanteInputPlanteNavn.value,
        MaksHoejde: Number(AddPlanteInputMaksHoejde.value),
        Price: Number(AddPlanteInputPrice.value)
    }
    console.log(newPlante)
    let response = await api.postPlante(uri, newPlante)
    console.log(response)
    AddPlanteDiv.innerHTML = response.statusText
})

let DeletePlanteInput: HTMLInputElement = <HTMLInputElement>document.getElementById("DeletePlanteInput")
let DeletePlanteBTN: HTMLButtonElement = <HTMLButtonElement>document.getElementById("DeletePlanteBTN");
let DeletePlanteDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("DeletePlanteDiv");

DeletePlanteBTN.addEventListener('click', async () => {
    let selectedId = DeletePlanteInput.value
    let response = await api.deletePlante("https://planteshoprestservice.azurewebsites.net/api/PlanteController", Number(selectedId))
    console.log(response)
    DeletePlanteDiv.innerHTML = response.statusText
})