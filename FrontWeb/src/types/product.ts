import { Category } from "./category";

export type Product = {
       id: number;
       name: String;
       price: number;
       imgUrl: String;
       category: Category[];
}