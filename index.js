
let count = 1;
console.log(count);
MAX_VALUE = 8;
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

            ////////////////////////////////////
            let div = document.createElement('div');
            div.classList.add("div1");
            const closeText = () => {
                text2.remove();
                Cimg.remove();
                count--;
                console.log(count)
            }
            let timeBag = new Date();
            let hours = timeBag.getHours()
            let min = timeBag.getMinutes()
            let time = `${hours}:${min}`;
            div.addEventListener('click', closeText);
            ////////////////////////////////////
            let text2 = document.createElement("h3");
            let Cimg = document.createElement("img");
            Cimg.src = "close-circle-svgrepo-com.svg";
            Cimg.style.width = "20px";
            text2.style.backgroundColor = "yellow";
            text2.style.borderRadius = "5px"
            text2.style.height = "3.5vmin"
            text2.style.marginTop = "6px"
            text2.style.fontSize = "2vmin"
            text2.style.width = "100%"
            text2.textContent = `(Time:${time}) ${text}`;
            div.append(text2, Cimg);
            box2.appendChild(div);
            count++;
            console.log(count)

        }
    }
    document.querySelector('input').value = '';

}
const fun1 = () => {
    window.location.reload();
};


