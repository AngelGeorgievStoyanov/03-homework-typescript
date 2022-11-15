import {getBookById} from './services/bookServices.js'

export  function favorites(id:string){
    
   return  getBookById(id);

}