const app = () => {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "HELLO WEBPACK"

    return element;
}

const ele = document.getElementById('app');
ele.appendChild(app());