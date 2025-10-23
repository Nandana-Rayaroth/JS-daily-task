enum Directions {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

function directionSelector(direction : Directions) : string{
    return `You moved ${direction}`
}

console.log(directionSelector(Directions.Down))