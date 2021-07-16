let url = "https://www.eltiempo.com/servicios/feeds/tag/consultorio-juridico";

export function GetByTxt(type, count){
    return fetch(`${url}+${type}/1/${count}`)
            .then((resp) => resp.json());
}

export function GetAll(count){
    return fetch(`${url}/1/${count}`)
            .then((resp) => resp.json());
}

export function GetData(type, page, resultCount){
    if(type != "main"){
        return fetch(`${url}+${type}/${page}/${resultCount}`)
            .then((resp) => {
                if(!resp.ok){
                    throw Error("could not fetch");
                }
                return resp.json();
            })
    }else{
        return fetch(`${url}/${page}/${resultCount}`)
            .then((resp) => resp.json())
            
    }
}