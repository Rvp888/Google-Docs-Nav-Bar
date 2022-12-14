
/*====================== Selection of Elements ==============================================================*/

const docsHome = document.querySelector(".label-docs");
const rename = document.querySelector(".label-rename");
const star = document.querySelector(".label-star");
const move = document.querySelector(".label-move");
const seeDocumentStatus = document.querySelector(".label-see-document-status");
const commentHistory = document.querySelector(".label-comment-history");
const joinACall = document.querySelector(".label-join-a-call");
const private = document.querySelector(".label-private");
const googleAccount = document.querySelector(".google-account");
const list = document.querySelector(".list");
const sideBar = document.querySelector(".side-bar");
const fileBar = document.querySelector(".file-bar");
const editBar = document.querySelector(".edit-bar");
const viewBar = document.querySelector(".view-bar");
const insertBar = document.querySelector(".insert-bar");
const formatBar = document.querySelector(".format-bar");
const toolsBar = document.querySelector(".tools-bar");
const extensionsBar = document.querySelector(".extensions-bar");
const helpBar = document.querySelector(".help-bar");

const chatIconPopUp = document.querySelector(".chat-icon-popUp");
const cameraDivPopUp = document.querySelector(".camera-div-popUp");
const profileImgPopUp = document.querySelector(".profile-img-popUp");




/*================================ To display labels on hover ========================================*/


document.addEventListener("mouseover", (e)=>{

    if (e.target.classList.contains("logo-img")){
        docsHome.style.display = "block";
    };

    if (e.target.classList.contains("title")){
        rename.style.display = "block";
    };

    if (e.target.classList.contains("bi-star")){
        star.style.display = "block";
    };

    if (e.target.classList.contains("bi-folder-symlink")){
        move.style.display = "block";
    };

    if (e.target.classList.contains("bi-cloud-check")){
        seeDocumentStatus.style.display = "block";
    };

    if (e.target.classList.contains("bi-chat-right-text")){
        commentHistory.style.display = "block";
    };

    if (e.target.classList.contains("camera")){
        joinACall.style.display = "block";
    };

    if (e.target.classList.contains("share-div")){
        private.style.display = "block";
    };

    if (e.target.classList.contains("bi-lock-fill")){
        private.style.display = "block";
    };

    if (e.target.classList.contains("share-span")){
        private.style.display = "block";
    };

    if (e.target.classList.contains("profile-img")){
        googleAccount.style.display = "block";
    };

})


document.addEventListener("mouseout", (e)=>{

    if (e.target.classList.contains("logo-img")){
        docsHome.style.display = "none";
    };

    if (e.target.classList.contains("title")){
        rename.style.display = "none";
    };

    if (e.target.classList.contains("bi-star")){
        star.style.display = "none";
    };

    if (e.target.classList.contains("bi-folder-symlink")){
        move.style.display = "none";
    };

    if (e.target.classList.contains("bi-cloud-check")){
        seeDocumentStatus.style.display = "none";
    };

    if (e.target.classList.contains("bi-chat-right-text")){
        commentHistory.style.display = "none";
    };

    if (e.target.classList.contains("camera")){
        joinACall.style.display = "none";
    };

    if (e.target.classList.contains("share-div")){
        private.style.display = "none";
    };

    if (e.target.classList.contains("bi-lock-fill")){
        private.style.display = "none";
    };

    if (e.target.classList.contains("share-span")){
        private.style.display = "none";
    };

    if (e.target.classList.contains("profile-img")){
        googleAccount.style.display = "none";
    };

})


/*================================ To display Menu-Bars on click ========================================*/


document.addEventListener("click",(e)=>{
    
    if (e.target.classList.contains("file")){
        fileBar.style.display = "block";
    }else{
        fileBar.style.display = "none"; 
    }

    if (e.target.classList.contains("edit")){
        editBar.style.display = "block";
    }else{
        editBar.style.display = "none"; 
    }

    if (e.target.classList.contains("view")){
        viewBar.style.display = "block";
    }else{
        viewBar.style.display = "none"; 
    }

    if (e.target.classList.contains("insert")){
        insertBar.style.display = "block";
    }else{
        insertBar.style.display = "none"; 
    }

    if (e.target.classList.contains("format")){
        formatBar.style.display = "block";
    }else{
        formatBar.style.display = "none"; 
    }

    if (e.target.classList.contains("tools")){
        toolsBar.style.display = "block";
    }
    else{
        toolsBar.style.display = "none"; 
    }

    if (e.target.classList.contains("extensions")){
        extensionsBar.style.display = "block";
    }else{
        extensionsBar.style.display = "none"; 
    }

    if (e.target.classList.contains("help","search-input")){
        helpBar.style.display = "block";
    }
    else if (e.target.classList.contains("search-input")){
        helpBar.style.display = "block";
    }
    else{
        helpBar.style.display = "none"; 
    }

})







/*================================ Nav-Bar/right-div on-click Pop-ups ========================================*/


document.addEventListener("click", (e) => {

    if (e.target.classList.contains("bi-chat-right-text")){
        chatIconPopUp.style.display = "flex";
        commentHistory.style.display = "none";
    }else {
        chatIconPopUp.style.display = "none";
    }

    if (e.target.classList.contains("camera")){
        cameraDivPopUp.style.display = "flex";
        joinACall.style.display = "none";
    }else {
        cameraDivPopUp.style.display = "none";
    }

    if (e.target.classList.contains("profile-img")){
        profileImgPopUp.style.display = "flex";
        googleAccount.style.display = "none";
    }else {
        profileImgPopUp.style.display = "none";
    }

})








/*================================= To access the side-bar menu in Mobile-View ==============================================*/


document.addEventListener("click", (e)=>{

    if (e.target.classList.contains("list")){
        sideBar.style.display = "flex";
    }
    else if (e.target.classList.contains("bi-list")){
        sideBar.style.display = "flex";
    }
    else {
        sideBar.style.display = "none";
    }
    
})

