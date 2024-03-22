var a = [
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
];

function Hello() {

var gg=a.map((val)=>{

    
    return (

        <>
         <img src={val} width="100" alt="k"/>
        </>
    )
})


  return (


<table>


    
{
    gg
}
</table>
     
 

  );
}

export default Hello;
