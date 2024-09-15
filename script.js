
const search = document.querySelector("#search");

search.addEventListener("click", getData);




async function getData() {
    const name = document.querySelector("#name");
    const url = `"https://api.github.com/users/${name}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  
