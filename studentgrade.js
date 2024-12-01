let mark =  prompt ('Grade results')

function studentGrade(mark){
   if(mark >= 80 && mark  <= 100){
     return 'A'
   }
    
     if(mark >= 60 && mark  <= 79){
     return 'B'
     }

     if(mark >= 50 && mark  <= 59){
     return 'C'
     }


     if(mark >= 40 && mark  <= 49){
     return 'D'
     }

     if(mark >= 0 && mark  <= 39){
     return 'E'
     }

}
 console.log(studentGrade(70))