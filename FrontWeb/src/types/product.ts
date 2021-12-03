import { Category } from "./category";

export type Products = {
       id: number;
       name: string;
       description: string;
       price: number;
       imgUrl: string;
       category: Category[];
}