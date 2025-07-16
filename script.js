const GRID_WIDTH = 600;

let opacity = 0.1;

const createCell = (dimensions) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = dimensions;
    cell.style.height = dimensions;
    cell.addEventListener("mouseenter", handleCellHover);
    return cell;
}

const fillGrid = (size = 16) => {
    const grid = document.querySelector(".grid");
    const cellDimensions = GRID_WIDTH / size;
    for (let i = 0; i < size * size; i++) {
        const newCell = createCell(`${cellDimensions}px`);
        grid.append(newCell);
    }
}

const handleCellHover = (e) => {
    const randomRGB = generateRGB();
    e.target.style.backgroundColor = createRGBAColor(randomRGB, opacity);
    if (opacity < 1) {
        opacity += 0.1;
    }
}

const createRGBAColor = (rgb, alpha) => {
    return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
}

const addResizeEvent = () => {
    const resizeButton = document.querySelector(".resize-button");
    resizeButton.addEventListener("click", handleResize);
}

const handleResize = (e) => {
    const sizeInput = document.querySelector("#size");
    if (sizeInput.value < 1 || sizeInput.value > 100) {
        return;
    }
    const grid = document.querySelector(".grid");
    grid.replaceChildren();
    fillGrid(sizeInput.value);
}

const generateRGB = () => {
    const RGB = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        const randomRGB = Math.floor(Math.random() * 256);
        RGB[i] = randomRGB;
    }
    return RGB;
}

fillGrid();
addResizeEvent();