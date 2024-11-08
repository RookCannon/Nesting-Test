var kingdom = {
    info: [],
    province1: {
        info: [],
    },
    province2: {
        info: [],
        city1: {
            info: [],
        }

    }

}

function addSubLocation(caller) {
    var newLocation = prompt('New Location Name?')
    var path = arguments[0].split('.')
    //console.log(path)
    var parentLocation = window[path[0]]
    for (let i = 1; i < path.length; i++) {
        parentLocation = parentLocation[path[i]];
      } 
    //console.log(parentLocation[newLocation])
    if(parentLocation[newLocation] !== undefined) {return}
    //console.log(newLocation)
    //console.log(parentLocation)
    //parentLocation[newLocation] = {info: []}
    Object.defineProperty(parentLocation, newLocation, {value :{info: [],}})
    //var targetHTML
    //for (let i = 0; i < path.length; i++) {
    //    targetHTML = path[i];
    //    document.getElementById()
    //  } 
    let newElement = document.createElement("div")
    newElement.id = newLocation
    newText = document.createElement("p")
    newText.appendChild(document.createTextNode(newLocation))
    newText.setAttribute('onclick', 'addSubLocation("' + arguments[0] + '.' + newLocation + '")')
    //newText.onclick = "addSubLocation(arguments[0] + '.' + newLocation)"
    newElement.appendChild(newText)
    //console.log(newElement)
    let mainContainer = document.getElementById("main_container")
    let targetHTML = mainContainer.querySelector("#" + path.join('>#'))
    //console.log(mainContainer.querySelector("#" + path.join('>#')))
    //console.log(targetHTML)
    targetHTML.appendChild(newElement)
    save()
}

function save() {
    localStorage.setItem("kingdom", JSON.stringify(kingdom))
}