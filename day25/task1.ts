// const items = document.getElementById("items");
// let pageParam = 1
// async function fetchItems(page){
//     try{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_${page}&_limit=10`)
//         if(!response.ok){
//             throw new Error("Response is not okay", response.status)
//         }
//         else{
//             const result = await response.json()
//             result.forEach((data) => {
//                 let dataId = document.createElement("li")
//                 dataId.textContent = data.id

//                 let dataTitle = document.createElement("p")
//                 dataTitle.textContent = data.title
//                 dataId.appendChild(dataTitle)

//                 let  dataBody = document.createElement("p")
//                 dataBody.textContent = data.body
//                 dataId.appendChild(dataBody)
//                 items.appendChild(dataId)
//             })
//         }
//     }
//     catch (error){
//         console.error(error.message)
//     }
// }
// fetchItems(pageParam)

// document.addEventListener("scrollend", function(){
//     pageParam++
//     fetchItems(pageParam)
// })

const items = document.getElementById("items") as HTMLUListElement
var pageParam: number = 1;
async function fetchItems() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_${pageParam}&_limit=10`
    );
    if (!response.ok) {
      throw new Error("Response is not okay", response.status);
    } else {
      const result = await response.json();
      result.forEach((data) => {
        let dataId = document.createElement("li");
        dataId.textContent = data.id;

        let dataTitle = document.createElement("p");
        dataTitle.textContent = data.title;
        dataId.appendChild(dataTitle);

        let dataBody = document.createElement("p");
        dataBody.textContent = data.body;
        dataId.appendChild(dataBody);
        items.appendChild(dataId);
      });
    }
  } catch (error) {
    console.error(error.message);
  }
}
fetchItems(pageParam);

document.addEventListener("scrollend", function () {
  pageParam++;
  fetchItems(pageParam);
});