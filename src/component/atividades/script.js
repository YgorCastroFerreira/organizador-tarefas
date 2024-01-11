export function add(lista){
    var title = prompt("Atividade:"),
        description = prompt("Descrição:");

    var cont = 0;

    lista.map(()=>{
        cont++;
    })

    let task = {
        "id" : cont,
        "title" : title,
        "description" : description,
        "completed" : false,
    }
    
    lista.push(task);

}






