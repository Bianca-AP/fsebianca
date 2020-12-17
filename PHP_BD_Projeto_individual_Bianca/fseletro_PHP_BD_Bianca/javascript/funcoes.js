function exibir_categorias(categoria){
    let elementos = document.getElementsByClassName('celula');
    for(let i=0; i<elementos.length; i++){
        if (categorias == elementos[i].id)
            elementos[i].style="display: inline-block";
        else
            elementos[i].style="display:none";
    }
};

let exibir_todos = () => {
    let elementos = document.getElementsByClassName('celula');
    for(let i=0; i<elementos.length; i++){
        elementos[i].style="display:inline-block";
    }
};

let aumentar = (image) => {
    if (image.width==53)
        image.width=(image.width)*2
    else 
        image.width/=2;
};