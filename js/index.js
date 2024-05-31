var inputName = document.getElementById("name");
var inputLink = document.getElementById("link");
var bookList = []

if (localStorage.getItem("thebooklist") !== null) {
   bookList = JSON.parse(localStorage.getItem("thebooklist"));
   display();
}
function addIteams() {
   if (nameValidation() == true && linkValidation() == true) {
      var book = {
         // name=[(inputName.value).toUppercase],
         name: inputName.value,
         link: inputLink.value
      };
      bookList.push(book);
      localStorage.setItem("thebooklist", JSON.stringify(bookList));
      display();
      clear();
   }
   else{
      document.getElementById("mesg").classList.remove("visually-hidden");
   }
}
function clear() {
   inputName.value = "";
   inputLink.value = null;
}
function display() {
   var cartona = "";
   for (var i = 0; i < bookList.length; i++) {
      cartona += `<tr >
      <td class="the-color">${i + 1}</td>
      <td class="the-color">${bookList[i].name}</td>
      <td><button onclick="visitLink(${bookList[i].link})"    id="visi" class="px-4 py-2 first text-light rounded the-calor"><i class="fa-solid fa-eye pe-2"></i> Visit</button></td>
      <td><button onclick="deleteBook(${i})" class="px-4 py-2 second text-light rounded the-calor"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
  </tr>`
   }
   document.getElementById("tbody").innerHTML = cartona;

}
function deleteBook(indexNumber) {
   bookList.splice(indexNumber, 1);
   localStorage.setItem("thebooklist", JSON.stringify(bookList));
   display();
}
function nameValidation() {
   var text = inputName.value;
   var nameRegex = /^\w{3,}(\s+\w+)*$/;
   if (nameRegex.test(text)) {
      inputName.classList.add("is-valid");
      inputName.classList.remove("is-invalid");
      return true;
   }
   else {
      inputName.classList.add("is-invalid");
      inputName.classList.remove("is-valid");
      return false;
   }
}
function linkValidation() {
   var text = inputLink.value;
   var linkRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
   if (linkRegex.test(text)) {
      inputLink.classList.add("is-valid");
      inputLink.classList.remove("is-invalid");
      return true;
   }
   else {
      inputLink.classList.add("is-invalid");
      inputLink.classList.remove("is-valid");
      return false;
   }
}
function closeBox(){
   document.getElementById("mesg").classList.add("d-none");
}
// function visitLink(theLink){
//    regex=/^(https?:\/\/)/;
//    if(regex.test(theLink)==true){
// document.getElementById("visi").innerHTML(`<a>${theLink}</a>`)
//    }
//    else{
//       document.getElementById("visi").innerHTML(`<a>https://${theLink}</a>`);
//    }
// }
