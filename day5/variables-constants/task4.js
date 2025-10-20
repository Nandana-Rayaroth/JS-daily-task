function ScopeChecker() {
    var varVariable = 10
    for(let i = 0; i < 3; i++) {
        console.log(i)
        console.log(varVariable)
    }
    console.log(varVariable, "Scope of var outside loop")
}

ScopeChecker()