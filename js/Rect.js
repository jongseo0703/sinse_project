class Rect {
    constructor(container, x, y, width, height, bg) {
        this.div = document.createElement("div");
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bg = bg;

        this.div.style.position = "absolute";
        this.div.style.top = this.y + "px";
        this.div.style.left = this.x + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundColor = this.bg;

        this.container.appendChild(this.div);
    }
}