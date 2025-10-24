async function Firstfetch(){
    
    let response1 = await fetch("https://jsonplaceholder.typicode.com/posts")
    let response2 = await fetch("https://jsonplaceholder.typicode.com/users");

    try {
        let result
        let result2
        let Container = document.getElementById("container")
      if (response1.ok) {
        result = await response1.json();
      }

      if(response2.ok) {
        result2 = await response2.json()
      }

      if(result.userId === result2.id){
        
        result2.forEach((item) => {
            result.forEach((post) =>{                
                let list = document.createElement("li");
                list.style = "border: 1px solid black; padding: 20px;"
                list.style.listStyle = "none";
                list.innerHTML = `
                <p>${post.id}</p>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <h4>${item.name}</h4>
                <h5>${item.email}</h5>
               
            `;
                Container.appendChild(list);
            })
            
        })
      } 
    }
    catch (error) {
      console.error("Something is missing", error);
    }
}
Firstfetch()

