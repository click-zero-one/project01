'use strict'

const $ = document

const itemSearch = $.querySelector('.itemSearch')
const search = $.querySelector('#search')
const iconSearch = $.querySelector('.containerIconSearch')
const containerItem = $.querySelector('.containerMenu')

let frELement = $.createDocumentFragment() 
let flagSearch = false  // this flag is for search

const menuDB = [      // dataBase for making itemMenus (so you can make a lot) in 'hover' & 'no hover' 
                      

    {id : 1 , cr : 'C' , title : 'onnect'} ,
    {id : 2 , cr : 'A' , title : 'lbume'} ,
    {id : 3 , cr : 'S' , title : 'tore'} ,
    {id : 4 , cr : 'H' , title : 'ome'} ,
]

const showTitle = (Case , caseValue) => {

    menuDB.forEach((Element) => {
        if(Element.cr === caseValue) {
            Case.innerHTML += Element.title
        }
    })
}

const hideTitle = (Case , caseValue) => {

    menuDB.forEach((Element) => {
        if((Element.cr + Element.title) === caseValue) {
            Case.innerHTML = Element.cr
        }
    })
}

menuDB.forEach(Case => {

    let element = $.createElement('div')
    element.className = `itemMenu case0${Case.id}`
    element.innerHTML = Case.cr

    element.addEventListener('mouseenter' , () => {

        showTitle(element , element.innerHTML)
    })
    
    element.addEventListener('mouseleave' , () => {

        hideTitle(element , element.innerHTML)
    })

    frELement.append(element)
})

containerItem.appendChild(frELement)

const funcSearchBox = () => {

    search.value=''
    search.style.display = 'none'
    search.style.flexGrow = 0
    itemSearch.classList.replace('activeSearch','deActiveSearch')
    itemSearch.style.cssText = `background-color:rgba(0, 0, 0, 0);color:black;border:1px solid black;`
    iconSearch.style.cssText = `iconSearch.style.cssText = 'background-color:black;color:whitesmoke;position:relative;bottom:1%;width:60px;`
}

const funcSearch = () => {

    search.style.display = 'block'
    search.style.flexGrow = 1
    search.style.height = '60px'
}

const showSearch = () => {   

    itemSearch.classList.add('activeSearch')
    itemSearch.classList.remove('deActiveSearch')

    itemSearch.style.cssText = 'height:60px;border:none;'
    iconSearch.style.cssText = 'background-color:black;color:whitesmoke;position:relative;bottom:1%;width:60px;'
   
    setTimeout(() => {

        funcSearch()
    }, 100);
}

const hideSearch = () => {
    
    if(!flagSearch){
        funcSearchBox()
    }
}

search.addEventListener('keydown' , (event) => {

    if(event.key == 'Enter'){
        funcSearchBox()
        flagSearch = false
    }
})

search.addEventListener('click' , () => {
    
    flagSearch = true
    funcSearch()
})

window.addEventListener('scroll' , () => {
    funcSearchBox()
    flagSearch = false
})
window.addEventListener('click' , (event) => {
    if(event.target != search) {
        funcSearchBox()
        flagSearch = false
    }
})

itemSearch.addEventListener('mouseenter' , showSearch)
itemSearch.addEventListener('mouseleave' , hideSearch)