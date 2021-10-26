class Comments{


    constructor(comment){

        this.comment=comment;

    }


    render=()=>{

        let component = document.createElement("div");
        component.className="messageContainer"
        let message = document.createElement("div");
        message.innerHTML=this.comment.commentMessage;
        component.appendChild(message);
        return component;
    }

}