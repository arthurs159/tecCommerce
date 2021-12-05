import { Products } from "./product";
import { User } from "./vendor/user";

export type Reviews = {
       id: number;
       text: string;
       user: User;
       product : Products;
}