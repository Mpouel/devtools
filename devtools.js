const oLog = console.log;
const oInfo = console.info;
const oWarn = console.warn;
const oError = console.error;

const devtools = $c("devtools")
const resizer = $c("resizer");
const iframe = $s("iframe");
let tabs = $a(".pri .item");
let cTab = $c("selected");

resizer.addEventListener("mousedown", (e) => {
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
});

function resize(e) {
    let newWidth = e.clientX; // Position X de la souris
    devtools.style.width = `${newWidth}px`; // Applique la nouvelle largeur
}

function stopResize() {
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
}

function switchTab(nTab) {
    try {
        if (cTab.id == nTab) return;

        tabs.forEach((tab) => {
            if (tab.id == nTab) {
                tab.classList.add("selected");
                cTab = tab;
            } else {
                tab.classList.remove("selected");
            }
        })
    } catch (e) {
        document.writeln("Error: ", e)
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