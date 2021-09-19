// add options
let nxtID = 4;
document.querySelector(".btn-add-option").addEventListener("click", (e) => {
	// console.log("adding option");

	const html = ` <div class="mb-3" id="op-${nxtID}">
  <label for="pollOption" class="form-label">Poll option</label>
  <div class="input-group mb-3" >
    <input type="text" class="form-control poll-options" placeholder="Poll option" aria-describedby="button-addon2" id="pollOption"> 
    <button class="btn btn-outline-secondary btn-delete-op op-del-${nxtID}" type="button" id="button-addon2">Delete</button>
  </div>
</div>`;

	document
		.querySelector(".options-container")
		.insertAdjacentHTML("beforeend", html);

	nxtID = nxtID + 1;
});

// delete options
document.addEventListener("click", function (e) {
	// console.log(e.target.classList.contains("btn-delete-op"));
	if (e.target && e.target.classList.contains("btn-delete-op")) {
		console.log("event on delete button");

		console.log(e.target.parentNode.parentNode.id);
		const elementId = e.target.parentNode.parentNode.id;
		document.getElementById(elementId).remove();
	}
});

// submit create poll
document.querySelector(".btn-create-poll").addEventListener("click", (e) => {
	e.preventDefault();
	console.log("create poll button clicked");
	const question = document.querySelector("#poll-question").value;
	const pollOptions = document.querySelectorAll(".poll-options");
	const options = [];
	for (const node of pollOptions) {
		// console.log(node.value);
		if (node.value) {
			options.push(node.value);
		}
	}
	console.log({ question, options });

	if (!question) {
		window.alert("Please enter a question");
		return;
	}

	if (options.length <= 1) {
		window.alert("Please specify atleast 2 options");
		return;
	}
	if (options.length > 6) {
		window.alert("Cannot have more than 6 options");
		return;
	}

	console.log("hello");

	axios
		.post("/api", {
			question,
			options,
		})
		.then((res) => {
			console.log(res.data.data);
			location.href = `/vote/${res.data.data.uuid}`;
		})
		.catch((err) => {
			console.log(err);
		});
});
