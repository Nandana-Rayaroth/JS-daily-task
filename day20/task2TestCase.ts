import { AnalyzeHeatmap } from "./task2.ts";

let TestCase = [
    {
        id: 1,
        Input: [[30, 32, 35], [28, 40, 33], [31, 36, 38]],
        output: { maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1, 1], coldestPoint: [ 1, 0 ] }
    },
    {
        id: 2,
        Input: [[30, 28, 35], [28, 40, 33], [31, 36, 38]],
        output: { maxTemp: 40, minTemp: 28, averageTemp: 33.2, hottestPoint: [1, 1], coldestPoint: [0, 1] }
    },
    {
        id: 3,
        Input: [[40, 32, 35], [28, 40, 33], [31, 36, 38]],
        output: { maxTemp: 40, minTemp: 28, averageTemp: 34.8, hottestPoint: [0, 0], coldestPoint: [ 1, 0 ] }
    },
    {
        id: 4,
        Input: [[40, 32, 35], [28, 40, 33], [31, 28, 38]],
        output: {maxTemp: 40, minTemp: 28, averageTemp: 33.9, hottestPoint: [0, 0], coldestPoint: [1, 0]}
    },
    {
        id: 5,
        Input: [[32, 56], [12, 54], [89, 54]],
        output: { maxTemp: 89, minTemp: 12, averageTemp: 49.5, hottestPoint: [2, 0], coldestPoint: [1, 0]}
    },
    {
        id: 6,
        Input: [[32, 56], [12, 54], [89], [54]],
        output: {maxTemp: 89, minTemp: 12, averageTemp: 49.5, hottestPoint: [2, 0], coldestPoint: [1, 0]}
    },
    {
        id: 7,
        Input: [[32, 32, 32], [32] ,[32, 32]],
        output: {maxTemp: 32, minTemp: 32, averageTemp: 32, hottestPoint: [0, 0], coldestPoint: [0, 0]}
    },
    {
        id: 8,
        Input: [[-43, 45, -23], [-41, 39], [32]],
        output: {maxTemp: 45, minTemp: -43, averageTemp: 1.5, hottestPoint: [0, 1], coldestPoint: [0,0]}
    },
    {
        id: 9,
        Input: [[23.5, 54, 12], [34, 34.5]],
        output: {maxTemp: 54, minTemp: 12, averageTemp: 31.6, hottestPoint: [0, 1], coldestPoint: [0, 2]}
    },
    {
        id: 10,
        Input: [[], [], []],
        output: 'Invalid input'
    },
    {
        id: 11,
        Input: [[12, 54], [45], []],
        output: {maxTemp: 54, minTemp: 12, averageTemp: 37, hottestPoint: [0, 1], coldestPoint: [0, 0]}
    }
]

TestCase.forEach(({Input, output, id}) => {
    let result = AnalyzeHeatmap(Input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id, result, output)
})