
function getCats() {
    
axios
.get("https://aws.random.cat/meow")
.then(response => {
  // handle success
  return response.data;
})
.then(data => {
  document.getElementById("catpic").innerHTML = `
 <img style="max-width: 356px;" src ="${data.file}"/>
   `;
});
}