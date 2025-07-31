
 export function statusVerification (promise){
    let status = "pending"
    let response;

    const verification = promise.then(
        (res) => {
            status = "success"
            response = res
        },
        (error) => {
            status = "error"
            response = err
        }
    )
    const readStatus = () => {
        switch (status) {
            case  "pending":
                throw verification
                    break;
    
                case  "error":
                    throw response;
                        break;
    
            default:
                return response
                }
            }
            return {readStatus}
};


export function resApi (){
        let promise = fetch("https://poetrydb.org/title/love/lines.json")
        .then((response) => response.json())
        .then((data)=> data)
        
        return statusVerification(promise)
}

