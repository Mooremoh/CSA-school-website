


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show")
            entry.target.classList.remove("hidden")
        }
        else {
            entry.target.classList.remove('show')
            entry.target.classList.add('hidden')
    }
    });
});
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el));


const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("view")
            entry.target.classList.remove("hide")
        }
        else {
            entry.target.classList.remove('view')
            entry.target.classList.add('hide')
    }
    });
});
const hideElements = document.querySelectorAll('.hide')
hideElements.forEach((el)=>observer2.observe(el));

const bar = document.getElementById('bars').addEventListener("click", barShow)
function barShow(){
    document.getElementById('barView').style.display = "block";
    document.getElementsByClassName("Flex").visibility="hidden";
}
const barC = document.getElementById('barss').addEventListener("click", barClose)
function barClose(){
    document.getElementById('barView').style.display = "none";
    document.getElementsByClassName("Flex").visibility="hidden";
console.log(document.getElementsByClassName("Flex"))
}


console.log(document.getElementsByClassName("ssnav-bar"))