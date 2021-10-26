const database = firebase.database();
const inputnombre = document.getElementById("inputNombre")
const inputpost = document.getElementById("inputPublicacion")
const btnPublicar = document.getElementById("publicarbtn")
let postContainer = document.getElementById("postContainer")



Publicar = ()=>{

    if(inputnombre.value === ""||inputpost===""){

        alert("Por favor complete todos los campos")
    } else{

        let reference= database.ref("Publicaciones").push()
        let post ={
        id: reference.key,
        username:inputnombre.value,
        postmessage:inputpost.value           
        }
        reference.set(post);

        inputnombre.value ="";
        inputpost.value ="";
      

    }

}
btnPublicar.addEventListener("click",Publicar)
    database.ref("Publicaciones").on('value',function(data){

        postContainer.innerHTML="";
        data.forEach(post=>{

            let valor = post.val();

            let tempPost = new Posts(valor);
            postContainer.appendChild(tempPost.render());



        })
    })
