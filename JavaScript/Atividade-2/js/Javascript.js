let clique = document.querySelector(".enivar");

let cont = 0;

async function objetos() {
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if ( cont > 99){
            cont = 0;
        }
        let json = await res.json();
        inserirNoticia(json, cont);
    }catch (error) {
        console.log("deu erro: " + error)
    }

    
}

function inserirNoticia(arr, num){
    let titlee = document.querySelector(".titulo");
    let reportagem = document.querySelector(".noticia");

    titlee.innerHTML = arr[num].title;
    reportagem.innerHTML = arr[num].body;

    num += 20;

    return cont = num;
}

async function enviarFoto(){
    let arquivo = document.querySelector(".arq").files[0];
    let body = new FormData();
    body.append('Arquivo', arquivo);


    let req = fetch("nome-do-site.com/bla-bla-bla", {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });


}