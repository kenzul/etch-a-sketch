const GRID_WIDTH = 600;

const createCell = (dimensions) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = dimensions;
    cell.style.height = dimensions;
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

fillGrid();