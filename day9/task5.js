function Reponse1() {
    return new Promise((response, reject) => {
        response("promise1-reponse")
    })
}

function Response2(){
    return new Promise((response, reject) => {
        response("promise2-response")
    })
}

function Response3(){
    return new Promise((response, reject) => {
        response("promie3-response")
    })
}

Promise.all([Reponse1(),Response2(),Response3()])
    .then((messages) => console.log(messages)) 