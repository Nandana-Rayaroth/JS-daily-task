"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyzeHeatmap = AnalyzeHeatmap;
function AnalyzeHeatmap(heatmap) {
    var arr = [];
    var result = { maxTemp: 0, minTemp: 0, averageTemp: 0, hottestPoint: [0, 0], coldestPoint: [0, 0] };
    var avgT;
    var htP = [];
    var cldP = [];
    for (var i = 0; i < heatmap.length; i++) {
        for (var j = 0; j < heatmap[i].length; j++) {
            arr.push(heatmap[i][j]);
        }
    }
    if (arr.length === 0)
        return 'Invalid input';
    var maxT = Math.max.apply(Math, arr);
    var minT = Math.min.apply(Math, arr);
    for (var i = 0; i < heatmap.length; i++) {
        for (var j = 0; j < heatmap[i].length; j++) {
            if (htP.length === 2)
                break;
            if (maxT === heatmap[i][j]) {
                htP.push(i, j);
            }
        }
    }
    for (var i = 0; i < heatmap.length; i++) {
        for (var j = 0; j < heatmap[i].length; j++) {
            if (cldP.length === 2)
                break;
            if (minT === heatmap[i][j]) {
                cldP.push(i, j);
            }
        }
    }
    avgT = arr.reduce(function (acc, curr) { return acc + curr; }, 0);
    avgT = Number((avgT / arr.length).toFixed(1));
    result.maxTemp = maxT, result.minTemp = minT, result.averageTemp = avgT, result.hottestPoint = htP, result.coldestPoint = cldP;
    return (result);
}
// console.log(AnalyzeHeatmap([[30, 32, 35], [28, 40, 33], [31, 36, 38]]))
// console.log(AnalyzeHeatmap([[30, 28, 35], [28, 40, 33], [31, 36, 38]]))
// console.log(AnalyzeHeatmap([[40, 32, 35], [28, 40, 33], [31, 36, 38]]))
// console.log(AnalyzeHeatmap([[40, 32, 35], [28, 40, 33], [31, 28, 38]]))
