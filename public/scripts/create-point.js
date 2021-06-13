function populateUFs() {
    const UfSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json() )
    .then(states => {
        for(const state of states) {
            UfSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json() )
    .then(cities => {
        for(const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

document.querySelector("select[name=uf]").addEventListener("change", getCities)

//Ítens de coleta   
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(let item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    //Adicionar ou remover a classe "Selecionado"
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id

    //Verificar se existem itens selecionados
    //Se sim , pegar os itens selecionados

    const alredySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId //True ou false
        return itemFound
    })

    //Se já estiver selecionado , tirar da seleção

    if(alredySelected >= 0) {
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        //Se não estiver selecionado , adicionar a seleção

        selectedItems.push(itemId)
    }

    // Atualizar o campo escondido com os itens selecionados

    collectedItems.value = selectedItems
}