import Plante from '../model/Plante'
import axios from "axios";

export async function getPlantes(url: string) {
    return await axios.get<Plante[]>(url)
}

export async function getPlante(url: string, id: number) {
    return await axios.get<Plante>(url + `/${id}`)
}

export async function getPlanteType(url: string, type: string) {
    return await axios.get<Plante>(url + `/${type}`)
}

export async function deletePlante(url: string, id: number) {
    return await axios.delete(url + `/${id}`)
}

export async function postPlante(url: string, plante: Plante) {
    return await axios.post(url, plante)
}

export async function updatePlante(url: string, id: number, plante: Plante) {
    return await axios.put(url + `/${id}`, plante)
}