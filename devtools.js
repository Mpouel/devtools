const oLog = console.log;
const oInfo = console.info;
const oWarn = console.warn;
const oError = console.error;

const iframe = $s("iframe");
const pageContent = iframe.ownerDocument;
let tabs = $a("div.pri > div.item")
let console = [];

function newLog(...data) {
    data.forEach(log => {
        
    });
}

function newInfo(...data) {
    data.forEach(log => {
        
    });
}

function newWarn(...data) {
    data.forEach(log => {
        
    });
}

function newError(...data) {

    data.forEach(log => {
        
    });
}





console.log = function (...data) {
    oLog(data)
    newLog(data)
}

console.info = function (...data) {
    oInfo(data)
    newInfo(data)
}

console.warn = function (...data) {
    oWarn(data)
    newWarn(data)
}

console.error = function (...data) {
    oError(data)
    newError(data)
}

function ls() {
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    // Créer un en-tête de tableau
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");

    ["Key", "Value"].forEach(text => {
        let th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Utiliser forEach pour parcourir localStorage
    Object.keys(localStorage).forEach(key => {
        let value = localStorage.getItem(key);

        let row = document.createElement("tr");

        [key, value].forEach(text => {
            let td = document.createElement("td");
            td.textContent = text;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    content.appendChild(table);

}

function switchTab(tab) {
    tabs.forEach((item) => {
        if (tabs.id == tab) {
            item.classList.add("selected")
        } else {
            item.classList.remove("selected")
        }
    })
}