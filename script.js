const colorTable = {
    a: "#808080",
    b: "#8080FF",
    c: "#80FF80",
    d: "#80FFFF",
    e: "#FF8080",
    f: "#FF80FF",
    g: "#FFFF80",
    h: "#FFFFFF",
    i: "#000000",
    j: "#000080",
    k: "#008000",
    l: "#008080",
    m: "#800000",
    n: "#800080",
    o: "#808000",
    p: "#C0C0C0",
    q: "#00FFFF",
    r: "#00FF00",
    s: "#FF0000",
    t: "#0000FF",
    u: "#FF00FF",
    v: "#FFFF00",
    w: "#00FFFF",
    x: "#00FF00",
    y: "#FF0000",
    z: "#0000FF",
    A: "#FF00FF",
    B: "#FFFF00",
    C: "#800000",
    D: "#800080",
    E: "#808000",
    F: "#C0C0C0",
    G: "#000080",
    H: "#008000",
    I: "#008080",
    J: "#0000FF",
    K: "#00FF00",
    L: "#FF0000",
    M: "#FF00FF",
    N: "#FFFF00",
    O: "#00FFFF",
    P: "#00FF00",
    Q: "#FF0000",
    R: "#0000FF",
    S: "#FF00FF",
    T: "#FFFF00",
    U: "#800000",
    V: "#800080",
    W: "#808000",
    X: "#C0C0C0",
    Y: "#000080",
    Z: "#008000",
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
    "&": "#000080",
    "*": "#008000",
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
    "\\": "#000080",
    ";": "#008000",
    "'": "#008080",
    ",": "#0000FF",
    ".": "#00FF00",
    "/": "#FF0000",
    " ": "#FFFFFF",
    "\t": "#FFFFFF",
    "\n": "#FFFFFF",
};

function convertTextToImage() {
    const text = document.getElementById("textInput").value;
    const pixelSize = parseInt(document.getElementById("pixelSize").value);
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const width = Math.floor(window.innerWidth / pixelSize);

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

function downloadImage() {
    const canvas = document.getElementById("myCanvas");
    const link = document.createElement("a");
    link.download = "text_image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}
