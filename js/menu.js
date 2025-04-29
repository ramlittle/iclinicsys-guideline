const MenuListContainer=document.querySelector('.menu-list-container');
const url = '../json/menu.json';

function fetchMenu(){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
       displayMenu(data);
    })
}

function displayMenu(data){
    if(!data.length){
        return MenuListContainer.insertAdjacentHTML('beforeend',`
            <span>No Menu List Found</span>
        `)
    }
    //display menu list here
    for(let i=0;i<data.length;i++){
        MenuListContainer.insertAdjacentHTML('beforeend',`
            <div>
                <a href='${data[i].link}'>
                    <img src='${data[i].image}'/>
                <a>
            </div>
        `)
    }
}

//Obtain Menu and Display
fetchMenu();