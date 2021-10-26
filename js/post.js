class Posts{

    constructor(post){

        this.post=post;

    }

    render=()=>{

    let component = document.createElement("div");
    component.className = "post"
    let usernamediv = document.createElement("div");
    usernamediv.innerHTML= "@"+this.post.username
    usernamediv.className="username"
    let postdiv = document.createElement("div");
    postdiv.className="postmessage"
    postdiv.innerHTML= this.post.postmessage;
    postdiv.appendChild(usernamediv)
    let inputComment = document.createElement("input")
    inputComment.type="text";
    inputComment.placeholder="Escribe una respuesta";
    inputComment.className ="inputComment"
    let btnComentar = document.createElement("button");
    btnComentar.className="btnComentar"
    let divcomentario = document.createElement("div");
    divcomentario.className="contenedorBoton"
    let divcommentaries = document.createElement("div");
    divcomentario.appendChild(inputComment);
    divcomentario.appendChild(btnComentar);
    btnComentar.textContent="Comentar";
    btnComentar.addEventListener('click',()=>{

        let database = firebase.database();
        if(inputComment.value===""){
            alert("ingrese un comentario")
        }else{
            let coment = {
             
                commentMessage:inputComment.value      
            }
        database.ref("Publicaciones/"+this.post.id+"/Commentaries").push().set(coment);
        }

    })

    database.ref("Publicaciones/"+this.post.id+"/Commentaries").on("value",function(comment){

        comment.forEach(coment=>{

            let valor = coment.val();
            let message = new Comments(valor)
            divcommentaries.appendChild(message.render())

        })

    })


    component.appendChild(usernamediv);
    component.appendChild(postdiv);
    component.appendChild(divcommentaries);
    component.appendChild(divcomentario);
    return component;

    }
}