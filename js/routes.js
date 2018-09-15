
function getCats() {
    
axios
.get("https://aws.random.cat/meow")
.then(response => {
  // handle success
  return response.data;
})
.then(data => {
  document.getElementById("catpic").innerHTML = `
 <img class="z-depth-3" style="max-width: 356px; min-width: 356px; max-height: 433px;" src ="${data.file}"/>
   `;
});
}