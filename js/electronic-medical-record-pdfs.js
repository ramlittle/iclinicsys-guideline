const PDFContainer=document.querySelector('#electronic-medical-record-pdfs-container');
const PDFUrl = '../json/electronic-medical-record-pdfs.json';

function fetchData(){
    fetch(PDFUrl)
    .then(res=>res.json())
    .then(data=>{
       displayData(data);
    })
}

function displayData(data){
    if(!data.length){
        return PDFContainer.insertAdjacentHTML('beforeend',`
            <span>No Menu List Found</span>
        `)
    }
    //display menu list here
    for(let i=0;i<data.length;i++){
        PDFContainer.insertAdjacentHTML('beforeend',`
            <div>
                <a href='${data[i].link}' target='_blank'>
                    ${data[i].title}
                </a>
            </div>
        `)
    }
}

//Obtain Menu and Display
fetchData();