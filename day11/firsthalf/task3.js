let person = {
    firstName : "John",
    lastName : "Doe",
    birthYear : 1990,
    getFullName() {
        return (this.firstName+" "+this.lastName)
    },
    getAge(){
        const now = new Date().getFullYear()
        return now - this.birthYear
    }
}
console.log(person.getFullName())
console.log(person.getAge())

//