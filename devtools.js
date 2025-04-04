const oLog = console.log;
const oInfo = console.info;
const oWarn = console.warn;
const oError = console.error;

const devtools = $c("devtools")
const resizer = $c("resizer");
const iframe = $s("iframe");
const content = $i("top-content");
const sec = $i("bottom-content");
let tabs = $a(".pri .item");
let cTab = $c("selected");
let cTabN = cTab.id;

resizer.$e("mousedown", (e) => {
    devtools.style.cursor = " ew-resize";
    document.$e("mousemove", resize);
    document.$e("mouseup", stopResize);
});

function resize(e) {
    let newWidth = e.clientX;
    let userW = window.innerWidth;
    let min = Number(userW * 30 / 100)
    let max=  Number(userW / 2)
    if (newWidth <= min) {
        devtools.style.width = `${min}px`;
    } else if (newWidth >= max) {
        devtools.style.width = `${max}px`;
    } else {
        devtools.style.width = `${newWidth}px`;
    }
}

function stopResize() {
    document.$re("mousemove", resize);
    document.$re("mouseup", stopResize);
}

function toElements() {

}

function toConsole() {

}

function toSources() {

}

function toLocalS() {

}

function toNetwork() {

}

function toApp() {

}



function switchTab(nTab) {
    if (cTab.id == nTab) return;

    tabs.forEach((tab) => {
        if (tab.id == nTab) {
            tab.classList.add("selected");
            cTab = tab;
            cTabN = tab.id;
        } else {
            tab.classList.remove("selected");
        }
    })

    switch(nTab) {
        case 'elements':
            return toElements();
        case 'console':
            return toConsole();
        case 'sources':
            return toSources();
        case 'local-storage':
            return toLocalS();
        case 'network':
            return toNetwork();
        case 'app':
            return toApp();
        default:
            return;

    }
}

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