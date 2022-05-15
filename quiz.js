document.querySelector("#q1f").addEventListener("click", function() {
    if (document.querySelector("#q1").value == 15) {
        ans = document.querySelector("#q1a");
        ans.classList.add("green");
        ans.classList.remove("red");
        ans.innerHTML = "CORRECT :)";
    }
    else {
        ans = document.querySelector("#q1a");
        ans.innerHTML = "Try Again :(";
        ans.classList.add("red");
        ans.classList.remove("green");
    }
});
document.querySelector("#q2f").addEventListener("click", function() {
    if (document.querySelector("#q2").value == 355) {
        ans = document.querySelector("#q2a");
        ans.classList.add("green");
        ans.classList.remove("red");
        ans.innerHTML = "CORRECT :)";
    }
    else {
        ans = document.querySelector("#q2a");
        ans.innerHTML = "Try Again :(";
        ans.classList.add("red");
        ans.classList.remove("green");
    }
});
document.querySelector("#q3f").addEventListener("click", function() {
    if (document.querySelector("#q3").value == "B" || document.querySelector("#q3").value == "b") {
        ans = document.querySelector("#q3a");
        ans.classList.add("green");
        ans.classList.remove("red");
        ans.innerHTML = "CORRECT :)";
    }
    else {
        ans = document.querySelector("#q3a");
        ans.innerHTML = "Try Again :(";
        ans.classList.add("red");
        ans.classList.remove("green");
    }
});