import { Reviews } from "../review";

export type User  = {
       id : number;
       firstName : string;
       lastName : string;
       password: string;
       email: string;
       reviews : Reviews;
}