let state = {
    count :0
}

//updates the value of the counter
//state equivalent
function onButtonPress(){
    state.count++;
    console.log(state.count);
    buttonComponentRender();
}

//rendering functionality of react
function buttonComponentRender(){
    document.getElementById("buttonParent").innerHTML = "";
    const component = buttonComponent(state.count);
    document.getElementById("buttonParent").appendChild(component);
}

//creates a button updates the value of the counter 
//button component
function buttonComponent(count){
    const button = document.createElement("button");
    button.innerHTML = `Counter ${count}`;
    button.setAttribute("onClick" , `onButtonPress()`);
    return button;
}

buttonComponentRender();