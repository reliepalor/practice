let colleges = [["PE","ARTS","Music"],"CICS","CTED","CBEA","CCJE","CHM","CA"];
let campuses = ["CSU-Gonzaga","CSU-Lallo","CSU-Carig","CSU-Aparri","CSU-Piat","CSU-Sanchez Mira",];

const show = document.getElementById("show");
const showCampuses = document.getElementById("showCampuses");
const campusbtn = document.getElementById("campusbtn");

document.getElementById("btn").addEventListener('click',function(){
    if(btn.textContent.toLowerCase() == "show colleges"){
   
        for(let i = 1; i < colleges.length; i++){
            show.innerHTML += `<div class="colleges p-1 text-gray-800">
                                <span>${i}. ${colleges[i]}</span>
                            </div>`;
        }
        btn.textContent = "Hide";
    }
    else{
        show.innerHTML = "";
        btn.textContent = "show colleges";
    }
});   

document.getElementById("campusbtn").addEventListener('click', function (){
    if(campusbtn.textContent.toLowerCase() == "show campuses"){
        for(let j = 1; j < campuses.length;j++){
            showCampuses.innerHTML += `<div class="p-1 text-gray-800">
                                <span>${j}. ${campuses[j]}</span>
                                </div>`;
        }
        campusbtn.textContent = "Hide";
    }else{
        showCampuses.innerHTML = "";
        campusbtn.textContent = "Show Campuses";
    }
})
