
//Changing simple javascript to ES6.
let bubble_sort=(a)=>{//creating function using arrow function


  let  swapp;
  let   n=a.lenght-1;
  let   x=a;
  do{

    swapp=false;
    for(let i=0;i<n;i++)
    {
      if(x[i]<x[i+1])
      {
        let  temp=x[i];
        x[i]=x[i+1];
        x[i+1]=temp;
        swap=true;
      }
    }
    n--;
  }while(swapp);
  return x;
}



