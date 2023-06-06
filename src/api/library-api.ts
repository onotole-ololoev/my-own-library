import {instance} from "./baseInstance";

export const libraryAPI = {
    getAllBooks() {
        return instance.get<ResponseBooksType>(`/api/books`)
    },
    getCategoryBooks(category: string) {
        return instance.get<ResponseBooksType>(`/api/books?category=${category}`)
    },
    getBook(id: string) {
        return instance.get<BookType>(`/api/book/${id}`)
    },
    addNewBook({...formFields}: BookType){
        return instance.post<BookType>('/api/book/', {...formFields})
    }

}
export type BookType =  {
    _id?: string
    id?: string
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
    currentPage: number
    totalPages: number
}