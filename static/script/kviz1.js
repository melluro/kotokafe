const input = document.querySelector('.input')
const button = document.querySelector('.button')

const fetchData = async () => {
    let response = await fetch('http://localhost:4444/', {  // url сервера
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(input.value)
    });

    let result = await response.json();
}

button.addEventListener('click', (e) => {
    e.preventDefault()

    if (input.value === '') {
        return;
    }

    try {
        fetchData()
        console.log(4)
        window.open('../../../')
    } catch (error) {
        console.log(error)
    }

})