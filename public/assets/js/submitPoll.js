console.log("submitPoll");

const question = document.querySelector(".result-question");
const uuid = question.dataset.uuid;
console.log(question.dataset.uuid);

document.querySelector(".submit-vote-btn").addEventListener("click", (e) => {
	e.preventDefault();
	const option = document.querySelector(
		'input[name="vote-option"]:checked'
	).value;
	console.log(option);

	axios
		.patch(`/api/${uuid}?vote=${option}`)
		.then((res) => {
			console.log(res.data.data);
			location.href = `/result/${res.data.data.uuid}`;
		})
		.catch((err) => {
			console.log(err);
		});
});
