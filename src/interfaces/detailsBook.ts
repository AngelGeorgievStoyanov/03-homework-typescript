export interface Images {
    smallThumbnail?:string;
    thumbnail?:string;
}

export interface Items extends Images{
    authors?:string|[];
    description?:string;
    publishedDate?:string;
    imageLinks?:{
        [key: string]: Images
    };
    title?:string;
    toString():string;
    join(arg: string): string;
    split(arg0: string): [];
}

export interface BookDetails extends Items {
    kind:string;
    id:string;
    etag:string;
    selfLink?:string;
    volumeInfo: {
        [key: string]: Items
    };
    
   

}
