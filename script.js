function createNode(value = null, next = null) {
	return { value, next };
}

export function LinkedList() {
	let headNode = createNode(undefined, null);

	const append = function (value) {
		const node = createNode(value, null);

		if (headNode.next == null) {
			headNode.next = node;
		} else {
			let currentNode = headNode.next;
			while (true) {
				if (currentNode.next == null) {
					currentNode.next = node;
					return;
				}
				currentNode = currentNode.next;
			}
		}
	};

	const prepend = function (value) {
		const node = createNode(value, headNode.next);
		headNode.next = node;
	};

	const size = () => {
		let counter = 0;

		let currentNode = headNode.next;
		while (true) {
			if (currentNode == null) {
				break;
			}
			counter++;
			currentNode = currentNode.next;
		}

		return counter;
	};

	const head = () => {
		let currentNode = headNode;
		if (currentNode.next == null) {
			return currentNode;
		} else {
			return currentNode.next;
		}
	};

	const tail = () => {
		let currentNode = headNode;
		while (true) {
			if (currentNode.next == null) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
	};

	const at = function (index) {
		let currentIndex = 0;
		let currentNode = headNode;

		while (true) {
			if (currentIndex == index) {
				return currentNode;
			}
			currentIndex++;
			currentNode = currentNode.next;
		}
	};

	const pop = () => {
		let currentNode = headNode;
		if (currentNode.next == null) {
			return;
		}

		while (true) {
			if (currentNode.next.next == null) {
				currentNode.next = null;
				break;
			}
			currentNode = currentNode.next;
		}
	};

	const contains = function (value) {
		let currentNode = headNode;
		while (true) {
			if (currentNode.value == value) {
				return true;
			}

			if (currentNode.next == null) {
				return false;
			}

			currentNode = currentNode.next;
		}
	};

	const find = function (value) {
		let currentIndex = 0;
		let currentNode = headNode;

		while (true) {
			if (currentNode.value == value) {
				return currentIndex;
			}

			if (currentNode.next == null) {
				return false;
			}

			currentIndex++;
			currentNode = currentNode.next;
		}
	};

	const toString = () => {
		let currentNode = headNode.next;
		let string = "";
		while (true) {
			if (currentNode == null) {
				string += "null";
				break;
			}

			string += `( ${currentNode.value} ) -> `;
			currentNode = currentNode.next;
		}

		return string;
	};

	return {
		append,
		prepend,
		size,
		head,
		tail,
		at,
		pop,
		contains,
		find,
		toString,
	};
}
