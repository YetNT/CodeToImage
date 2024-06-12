const colorTable2 = {
    a: "#808080",
    b: "#8080FF",
    c: "#80FF80",
    d: "#80FFFF",
    e: "#FF8080",
    f: "#FF80FF",
    g: "#FFFF80",
    h: "#FFFFF1",
    i: "#000005",
    j: "#000010",
    k: "#008080",
    l: "#008180",
    m: "#804000",
    n: "#806080",
    o: "#808030",
    p: "#C0C020",
    q: "#0F7FFF",
    r: "#20FF00",
    s: "#FF0009",
    t: "#0000AF",
    u: "#FA00FF",
    v: "#FFAF20",
    w: "#00FFAF",
    x: "#A2FF00",
    y: "#FF30A0",
    z: "#0A004F",
    A: "#FF30DF",
    B: "#FFEE00",
    C: "#8099FF",
    D: "#800680",
    E: "#808F00",
    F: "#C0F0C0",
    G: "#FF0081",
    H: "#00811F",
    I: "#008F48",
    J: "#AB00FF",
    K: "#00FF0F",
    L: "#FF0023",
    M: "#FF00PO",
    N: "#FFAD00",
    O: "#09FF9F",
    P: "#A04F00",
    Q: "#FF0A60",
    R: "#0A10FF",
    S: "#D400FF",
    T: "#FB1F00",
    U: "#820FFF",
    V: "#800080",
    W: "#808000",
    X: "#C0C0C0",
    Y: "#000082",
    Z: "#008002",
    1: "#008080",
    2: "#0000FF",
    3: "#00FF00",
    4: "#FF0000",
    5: "#FF00FF",
    6: "#FFFF00",
    7: "#00FFFF",
    8: "#00FF00",
    9: "#FF0000",
    0: "#0000FF",
    "!": "#FF00FF",
    "@": "#FFFF00",
    "#": "#800000",
    $: "#800080",
    "%": "#808000",
    "^": "#C0C0C0",
    "&": "#000083",
    "*": "#008003",
    "(": "#008080",
    ")": "#0000FF",
    _: "#00FF00",
    "+": "#FF0000",
    "{": "#FF00FF",
    "}": "#FFFF00",
    "|": "#00FFFF",
    ":": "#00FF00",
    '"': "#FF0000",
    "<": "#0000FF",
    ">": "#FF00FF",
    "?": "#FFFF00",
    "-": "#800000",
    "=": "#800080",
    "[": "#808000",
    "]": "#C0C0C0",
    "\\": "#000084",
    ";": "#008004",
    "'": "#008080",
    ",": "#0000FF",
    ".": "#00FF00",
    "/": "#FF0000",
    " ": "#FFFFFF",
    "\t": "#FFFFFF",
    "\n": "#FFFFFF",
};

const colorTable = {
    0: "#02a3a0",
    1: "#054740",
    2: "#07eae0",
    3: "#0a8e80",
    4: "#0d3220",
    5: "#0fd5c0",
    6: "#127960",
    7: "#151d00",
    8: "#17c0a0",
    9: "#1a6440",
    a: "#1d07e0",
    b: "#1fab80",
    c: "#224f20",
    d: "#24f2c0",
    e: "#279660",
    f: "#2a3a00",
    g: "#2cdda0",
    h: "#2f8140",
    i: "#3224e0",
    j: "#34c880",
    k: "#376c20",
    l: "#3a0fc0",
    m: "#3cb360",
    n: "#3f5700",
    o: "#41faa0",
    p: "#449e40",
    q: "#4741e0",
    r: "#49e580",
    s: "#4c8920",
    t: "#4f2cc0",
    u: "#51d060",
    v: "#547400",
    w: "#5717a0",
    x: "#59bb40",
    y: "#5c5ee0",
    z: "#5f0280",
    A: "#61a620",
    B: "#6449c0",
    C: "#66ed60",
    D: "#699100",
    E: "#6c34a0",
    F: "#6ed840",
    G: "#717be0",
    H: "#741f80",
    I: "#76c320",
    J: "#7966c0",
    K: "#7c0a60",
    L: "#7eae00",
    M: "#8151a0",
    N: "#83f540",
    O: "#8698e0",
    P: "#893c80",
    Q: "#8be020",
    R: "#8e83c0",
    S: "#912760",
    T: "#93cb00",
    U: "#966ea0",
    V: "#991240",
    W: "#9bb5e0",
    X: "#9e5980",
    Y: "#a0fd20",
    Z: "#a3a0c0",
    "!": "#a64460",
    "@": "#a8e800",
    "#": "#ab8ba0",
    $: "#ae2f40",
    "%": "#b0d2e0",
    "^": "#b37680",
    "&": "#b61a20",
    "*": "#b8bdc0",
    "(": "#bb6160",
    ")": "#be0500",
    _: "#c0a8a0",
    "+": "#c34c40",
    "{": "#c5efe0",
    "}": "#c89380",
    "|": "#cb3720",
    ":": "#cddac0",
    '"': "#d07e60",
    "<": "#d32200",
    ">": "#d5c5a0",
    "?": "#d86940",
    "-": "#db0ce0",
    "=": "#ddb080",
    "[": "#e05420",
    "]": "#e2f7c0",
    "\\": "#e59b60",
    ";": "#e83f00",
    "'": "#eae2a0",
    ",": "#ed8640",
    ".": "#f029e0",
    "`": "#f2cd80",
    "~": "#f57120",
    "/": "#f814c0",
    " ": "#FFFFFF",
    "\t": "#FFFFFF",
    "\n": "#FFFFFF",
};

/**
 * @type {boolean}
 */

function convertTextToImage(colorTable, canvasId, v) {
    const text = document.getElementById("textInput").value;
    const pixelSize = parseInt(document.getElementById("pixelSize").value);
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    const width = !v
        ? Math.floor(window.innerWidth / pixelSize)
        : Math.floor(Math.floor(window.innerWidth / pixelSize) / 2);

    // Calculate required canvas height
    const lines = text.split("\n");
    let maxLineLength = 0;
    for (const line of lines) {
        if (line.length > maxLineLength) {
            maxLineLength = line.length;
        }
    }
    const height =
        (lines.length + Math.ceil(maxLineLength / width)) * pixelSize;
    canvas.width = width * pixelSize;
    canvas.height = height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x = 0;
    let y = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === "\n") {
            x = 0;
            y += pixelSize;
            continue;
        }
        const color = colorTable[char] || "#FFFFFF"; // Default to white for undefined characters
        ctx.fillStyle = color;
        ctx.fillRect(x, y, pixelSize, pixelSize);
        x += pixelSize;
        if (x >= canvas.width) {
            x = 0;
            y += pixelSize;
        }
    }

    document.getElementById("downloadButton").style.display = "inline";
}

function run() {
    var v = document.getElementById("old").checked;
    console.log(v);

    convertTextToImage(colorTable, "myCanvas", v);
    if (v) {
        convertTextToImage(colorTable2, "myCanvas2", v);
    }
}

function downloadImage() {
    var v = (document.getElementById("old").checked = true);

    const canvas1 = document.getElementById("myCanvas");
    const canvas2 = document.getElementById("myCanvas2");
    const link = document.createElement("a");
    const link2 = document.createElement("a");
    link.download = "c2i.png";
    link.href = canvas1.toDataURL("image/png");
    link.click();
    if (v) {
        link2.download = "c2i-old.png";
        link2.href = canvas2.toDataURL("image/png");
        link2.click();
    }
}
