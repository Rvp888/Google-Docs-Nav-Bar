
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

    if (e.target.classList.contains("camera-div")){
        joinACall.style.display = "block";
    };

    if (e.target.classList.contains("camera-img")){
        joinACall.style.display = "block";
    };

    if (e.target.classList.contains("bi-caret-down-fill")){
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

    if (e.target.classList.contains("camera-div","bi-caret-down-fill")){
        joinACall.style.display = "none";
    };

    if (e.target.classList.contains("camera-img")){
        joinACall.style.display = "none";
    };

    if (e.target.classList.contains("bi-caret-down-fill")){
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

