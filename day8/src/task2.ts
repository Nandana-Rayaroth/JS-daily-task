function greet(name: string, greeting: string = "Hello") : void {
    console.log(`${greeting} ${name}`)
}

greet("Alice")
greet("Bob", "Hi")