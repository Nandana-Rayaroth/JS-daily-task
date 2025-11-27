export function BinarySearch(arr: number[], item: number){
    if(arr.length === 0) return "Invalid input"
    let ascend = [...arr].sort((a, b) => a - b)
    let isAscedn = false
    let descend = [...arr].sort((a, b) => b - a)
    let isDescend = false

    if(JSON.stringify(ascend) === JSON.stringify(arr)){
        isAscedn = true
    }
    if(JSON.stringify(descend) === JSON.stringify(arr)){
        isDescend = true
    }
    
    
    if(isAscedn || isDescend){
      let firstMid: number = Math.floor(arr.length / 2);
      if (item === arr[firstMid]) return `Value ${item} found`;
      else if(isAscedn) {
        if (item < arr[firstMid]) {
          return spliter(arr.slice(0, firstMid), item);
        } else if (arr[firstMid] < item) {
          return spliter(arr.slice(firstMid + 1), item);
        }
      }
      else if(isDescend){
        if( arr[firstMid] > item) return spliter(arr.slice(firstMid+1), item)
        else if(item > arr[firstMid]) return spliter(arr.slice(0, firstMid), item)
      }
    }else return "Invalid input"
}
function spliter(k : number[], num: number){
    let ascend = [...k].sort((a, b) => a - b)
    let isAscedn = false
    let isDescend = false
    if(JSON.stringify(ascend) === JSON.stringify(k)) isAscedn = true
    else isDescend = true
    if(k.length === 1){
        if(k[0] === num) return `Value ${num} found`
        else return `Value ${num} not found`
    }
    else{
        let mid : number = Math.floor(k.length / 2)
        if(isAscedn){
          if (k[mid] === num) return `Value ${num} found`;
          else if (num < k[mid]) {
            return spliter(k.slice(0, mid), num);
          } else if (k[mid] < num) {
            return spliter(k.slice(mid + 1), num);
          }
        }
        if(isDescend){
            if(k[mid] === num) return `Value ${num} found`
            else if(k[mid] > num) return spliter(k.slice(mid+1), num)
            else if(num > k[mid]) return spliter(k.slice(0, mid), num)
        }

    }
}

// console.log(BinarySearch([2, 3, 5, 7, 11, 15, 25], 15))
// console.log(BinarySearch([43, 54, 65, 76, 87], 86))
// console.log(BinarySearch([12, 23, 32, 43, 54, 65,76], 32))
// console.log(BinarySearch([12, 23, 32, 43, 54, 65, 76], 0))
// console.log(BinarySearch([76, 65, 54, 43, 32, 23, 12], 32));