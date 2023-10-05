function toggleCourseNav(e) {
    if (e) {
        e.stopPropagation();
    }
    
    var courseNav = document.querySelector(".course-navigation");
    if (courseNav.style.display === "block") {
        courseNav.style.display = "none";
    } else {
        courseNav.style.display = "block";
    }
}


function uploadProfilePicture() {
    let upload = document.createElement('input');
    upload.type = 'file';
    upload.style.display = 'none';  
    upload.accept = 'image/*'; 
    upload.onchange = function(event) {
        let file = event.target.files[0];
        console.log(file);
    };
    document.body.appendChild(upload);
    upload.addEventListener("click", function(e) {
        e.stopPropagation();
    });
    upload.click();
}

