// add options
let nxtID = 4;
document.querySelector(".btn-add-option").addEventListener("click", (e) => {
  // console.log("adding option");

  const html = ` <div class="mb-3" id="op-${nxtID}">
  <label for="pollOption" class="form-label">Poll option</label>
  <div class="input-group mb-3" >
    <input type="text" class="form-control" placeholder="Poll option" aria-describedby="button-addon2" id="pollOption" required='true'> 
    <button class="btn btn-outline-secondary btn-delete-op op-del-${nxtID}" type="button" id="button-addon2">Delete</button>
  </div>
</div>`;

  document
    .querySelector(".options-container")
    .insertAdjacentHTML("beforeend", html);

  nxtID = nxtID + 1;
});

// delete options
document.addEventListener("click", function(e){
  // console.log(e.target.classList.contains("btn-delete-op"));
  if(e.target && e.target.classList.contains("btn-delete-op")){
    console.log("event on delete button");

    console.log(e.target.parentNode.parentNode.id);
    const elementId = e.target.parentNode.parentNode.id;
    document.getElementById(elementId).remove();
  }
})


/*
const deleteBtns = document.querySelectorAll(".btn-delete-op");
deleteBtns.forEach(function (e) {
  e.addEventListener("click", function (e) {
    // console.log(e);

    console.log(this.parentNode.parentNode.id);
    const elementId = this.parentNode.parentNode.id;
    document.getElementById(elementId).remove();
  });
});
*/


// submit create poll
document.querySelector(".btn-create-poll").addEventListener("click", (e) => {
  console.log("create poll button clicked");
});
