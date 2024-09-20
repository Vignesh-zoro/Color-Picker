let ClickButton = document.getElementById("btn")
let ColorCode = document.getElementById("code")
let BackGround = document.getElementById("back-ground")
let Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

ClickButton.addEventListener("click", function () {

    let Hex = "#"
    //Using the for loop for getting 6 digit Number
    for (i = 1; i <= 6; i++) {
        Hex += RandomValue()
    }
    ColorCode.innerHTML = Hex
    BackGround.style.backgroundColor = Hex
})

//Using the math.random for select the randomnumber in array
function RandomValue() {
    let Random = Math.floor(Math.random() * 16)
    return Numbers[Random]
}
