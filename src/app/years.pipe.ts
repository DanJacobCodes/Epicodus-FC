import {Pipe, PipeTransform} from '@angular/core';
import {Member} from './member.model';

@Pipe({
  name:"years",
  pure:false

})


export class YearsPipe implements PipeTransform {
  transform(input: Member[], desiredYears){
    var output: Member[] = [];
    if(desiredYears === "amateur") {
       for (var i = 0; i< input.length; i++){
         if (input[i].yearsPro <= 2)
         {
           output.push(input[i]);
         }
       }
       return output;
     }
     else if(desiredYears === "veteran")
     {
       for (var i = 0; i< input.length; i++)
       {
         if (input[i].yearsPro > 2)
         {
           output.push(input[i]);
         }
       }
       return output;
     }
     else
     {
       return input;
     }
   }
 }
