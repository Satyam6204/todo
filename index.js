let count = 1;
MAX_VALUE = 7;
const fun = () => {

    let box2 = document.getElementById('box2')
    let textValue = document.querySelector('input');
    let text = textValue.value.trim();

    if (text === '') {

        alert("Please Enter Plans")
    } else {

        if (count == MAX_VALUE) {
            alert("box is full")
        } else {
            let text2 = document.createElement("h3");
            text2.style.backgroundColor = "yellow";
            text2.style.borderRadius = "5px"
            text2.style.height = "4vmin"
            text2.style.marginTop = "6px"
            text2.style.fontSize = "3vmin"
            text2.style.width = "100%"
            text2.textContent = `${count}. ${text}`;
            box2.appendChild(text2);

            count++;
        }


    }
    document.querySelector('input').value = '';





}


const fun1 = () => {
    window.location.reload();
};