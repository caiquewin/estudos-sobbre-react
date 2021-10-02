
const url = "https://ranekapi.origamid.dev/json/api/produto/"

export const getOrigamid = async (name) => {
    
    let option ={
        method:"GET",
        headers:{'Content-Type': 'application/json'}
    }

    return fetch(url+name,option)

} 