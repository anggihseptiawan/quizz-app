import React, { useState, useEffect } from "react";

const COMP_URL =
	"https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

function App() {
	const [questions, setQuestion] = useState([]);

	useEffect(() => {
		fetch(COMP_URL)
			.then((res) => res.json())
			.then((data) => setQuestion(data.results));
	}, []);

	if (questions.length > 0) {
		return (
			<div className="container">
				<h5
					className="question text-2xl"
					dangerouslySetInnerHTML={{ __html: questions[0].question }}
				/>

				<div className="grid grid-cols-2 gap-3">
					<button
						className="item p-4"
						dangerouslySetInnerHTML={{
							__html: questions[0].correct_answer,
						}}
					/>
					<button
						className="item p-4"
						dangerouslySetInnerHTML={{
							__html: questions[0].incorrect_answers[0],
						}}
					/>
					<button
						className="item p-4"
						dangerouslySetInnerHTML={{
							__html: questions[0].incorrect_answers[1],
						}}
					/>
					<button
						className="item p-4"
						dangerouslySetInnerHTML={{
							__html: questions[0].incorrect_answers[2],
						}}
					/>
				</div>
			</div>
		);
	} else {
		return "waiting for question";
	}
}

export default App;
