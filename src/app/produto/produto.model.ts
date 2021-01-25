export interface Produto {
    id?: number
    name: string
    description: string
    image: string
    price: number
    discount_amount: number
    status: boolean
    categories: []
}
