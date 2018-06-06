//changing simple javascript to ES6.
let users = [
{

  'email':'jatinrana4755@gmail.com',
  'password':'jatinrana',
  'firstName':'jatin',
  'lastName':'rana',
  'mobileNumber':9811532896,
  'isVerified':true,
  'isPaid':false
},
{

  'email':'nayansharma4755@gmail.com',
  'password':'nayansharma',
  'firstName':'nayan',
  'lastName':'sharma',
  'mobileNumber':9878979696,
  'isVerified':true,
  'isPaid':true
},
{

  'email':'rohansharma4755@gmail.com',
  'password':'rohansharma',
  'firstName':'rohan',
  'lastName':'sharma',
  'mobileNumber':981533322,
  'isVerified':true,
  'isPaid':false
}




]



let checkLogin=(email,password,allUsers)=>{//creating arrow function by passing parameters.

 let isUserFound=false;

 let  passwordCorrect=false;


       for(currentUser of users){//iterating using for of loop.
        console.log(currentUser)

        if(currentUser.email==email){
          if(currentUser.password==password){
           isUserFound=true;
           passwordCorrect=true;
           break;
         }
         else{
           isUserFound=true;
           passwordCorrect=false;
           break;
         }
       }
       else{
         isUserFound=false
       }

              }//end for loop


              if(isUserFound==true&&passwordCorrect==true){
               alert('you are loged in')


             }else if(isUserFound==true&&passwordCorrect==false)
             {
               alert('you have provided a incorrect password')
             }
             else{

              alert('No user with this email found')
            }
          }

          let email=window.prompt('enter your email')
          let password=window.prompt('enter your password')
               checkLogin(email,password,users)//calling function by passing arguments.
