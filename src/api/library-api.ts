import {instance} from "./baseInstance";

export const libraryAPI = {
    getAllBooks() {
        return instance.get<ResponseBooksType>(`/api/books`)
    }
}
export type BookType =  {
    id: string
    title: string
    author: string
    category: string
    rating?: number
    year?: string
    publishingHouse?: string
    pages?: string
    binding?: string
    format?: string
    genre?: string
    weight?: string
    description?: string
    manufacturer?: string
    bookedFor?: string
    isAvailable?: boolean
    isBooked?: boolean
    reviews?: [string]
    cover?: [string]
}
export type ResponseBooksType = {
    books: BookType[]
}