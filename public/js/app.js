let clientHeight = window.innerHeight
let body = document.body

let getElement = (element) => {
    return element = document.querySelector(element)
}

let getElements = (element) => {
    return element = document.querySelectorAll(element)
}

let getHeight = (element) => {
    return element.style.height
}

let setHeight = (element, size) => {
    element.style.height = size + "px"
}

let setWidth = (element, size) => {
    element.style.width = size + "px"
}

let sidebar = getElement('#sidebar')
let section = getElement('section')
let options = getElements('.options')

setHeight(body, clientHeight)
setWidth(section, body.clientWidth - sidebar.clientWidth)
options.forEach((i) => {
    let size = (section.clientWidth / 4) - 10
    setWidth(i, size)
})
