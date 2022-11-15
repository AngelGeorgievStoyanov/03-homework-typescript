import { BookDetails } from "./detailsBook.js";

export interface Book extends BookDetails{
    id:string;
    title:string;
    authors?:[];
    date?:string;
    description:string;
    img?:string;
   


}