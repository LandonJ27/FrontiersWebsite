function clickButton() {
    console.log(`Hello World!`);
    const mytext = document.getElementById("mytext");
    mytext.innerHTML = `It worked!`
    mytext.className =`myclass`;
    mytext.style = "color:white";

    const mytext2 = document.getElementById("mytext2");
    mytext2.className = `myclass`;
    mytext2.className = `myclass`;

    const bgcolor = document.getElementById("bgcolor");
    

    const body = document.body;
    body.style = "background-color:red";
    body.style.backgroundColor = bgcolor.value;
    
}
