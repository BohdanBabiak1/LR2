let startButton = document.getElementById("button")

startButton.addEventListener("click", function () {
    startButton.remove()
    
    var firstRow = document.querySelector('table tr');
    var secondRow = firstRow.nextElementSibling;
    var thirdRow = secondRow.nextElementSibling;
    thirdRow.remove()

    var textContainer = document.getElementById('text-container')
    var photo = document.getElementById('photo-container')


    for(i=0; i<3; i++){
        firstRow.querySelectorAll('td')[i].innerHTML = document.getElementById(`Title${i+1}`).innerHTML
        firstRow.querySelectorAll('td')[i].style.fontWeight = "bold"

        secondRow.querySelectorAll('td')[i].innerHTML = document.getElementById(`Paragraph${i+1}`).innerHTML
    }
    
    textContainer.textContent = ""
    textContainer.innerHTML = photo.outerHTML
    photo.remove()
});