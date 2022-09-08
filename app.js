const questions = ["qwqde", "sadfdaesf", "dasfsafasdfas"]
/*
function initPopupFactory(parent) {
	return (question) => {
		return showPopup(parent, question)
	}
}

function showPopup(parent, question) {
	return new Promise((resolve) => {
		const popup = new Popup(parent, question)
		popup.onClose = (result) => {
			resolve(result)
		}
	})
}

async function startQuiz(parent, questions) {
	const res = []
	const showPopup = initPopupFactory(parent)

	for (const question of questions) {
		res.push(await showPopup(question))
	}

	return res
	/*

	const forEach = (onFinish) => {
		showPopup(document.body, questions[res.length]).then((result) => {
			res.push(result)
			forEach(onFinish)

			if (res.length == questions.length) {
				onFinish(res)
			}
		})
	}

	return new Promise((resolve) => {
		forEach(resolve)
	})
	*/
//}

function popupFactory(parent) {
	return (question) => {
		return createPopup(parent, question)
	}
}

function createPopup(parent, question) {
	return new Promise((resolve) => {
		const popup = new Popup(parent, question)
		popup.onClose = (answer) => {
			resolve(answer)
		}
	})
}

function startQuiz(parent, questions) {
	return new Promise(async (resolve) => {
		const result = []
		const createPopup = popupFactory(parent)

		for (const question of questions)
			result.push(await createPopup(question))

		resolve(result)
	})
}

/*
function startQuiz(parent, questions) {
	function getAnswer(onFinish, result = []) {
		return new Promise(() => {
			if (result.length === questions.length) return onFinish(result)

			const popup = new Popup(parent, questions[result.length])
			popup.onClose = (answer) => {
				getAnswer(onFinish, [...result, answer])
			}
		})
	}

	return new Promise((resolve) => {
		getAnswer(resolve)
	})
}
*/

class Popup {
	/**
	 * @type {(result: boolean)=>void}
	 */
	onClose

	/**
	 *
	 * @param {HTMLElement} parent
	 * @param {string} question
	 */
	constructor(parent, question) {
		const popup = document.createElement("div")
		parent.append(popup)
		this.node = popup

		const questionElement = document.createElement("div")
		questionElement.textContent = question
		popup.append(questionElement)

		const yesButton = document.createElement("button")
		yesButton.textContent = "yes"
		popup.append(yesButton)
		yesButton.onclick = () => {
			this.onClose?.(true)
			this.destroy()
		}

		const noButton = document.createElement("button")
		noButton.textContent = "no"
		popup.append(noButton)
		noButton.onclick = () => {
			this.onClose?.(false)
			this.destroy()
		}
	}

	destroy() {
		this.node.remove()
	}
}

startQuiz(document.body, questions).then((results) => {
	console.log(results)
	//[true, false, true]
})
