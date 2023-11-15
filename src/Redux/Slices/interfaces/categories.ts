import { categoryInfo } from "../../../Types/categories"

export type cat_id = {
    id: number
}

export type categoryOutput = {
    status: number,
    result: string
}

export type categoryState = {
    loading: boolean,
    error: boolean,
    data: categoryOutput
}

export type categoryGetAllOutput = {
    status: number,
    result: categoryInfo[]
}

export type categoryGetAllState = {
    loading: boolean,
    error: boolean,
    data: categoryGetAllOutput
}

export type categoryByIdOutput = {
    status: number,
    result: categoryInfo
}

export type categoryByIdState = {
    loading: boolean,
    error: boolean,
    data: categoryByIdOutput
}