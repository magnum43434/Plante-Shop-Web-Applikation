import IPlante from '../model/IPlante'
import axios from "axios";

export async function getPlantes(url: string) {
    return await axios.get<IPlante[]>(url)
}

export async function getPlante(url: string, id: number) {
    return await axios.get<IPlante>(url + `/${id}`)
}

export async function getPlanteType(url: string, type: string) {
    return await axios.get<IPlante>(url + `/${type}`)
}

export async function deletePlante(url: string, id: number) {
    return await axios.delete(url + `/${id}`)
}

export async function postPlante(url: string, plante: IPlante) {
    return await axios.post(url, plante)
}

export async function updatePlante(url: string, id: number, plante: IPlante) {
    return await axios.put(url + `/${id}`, plante)
}