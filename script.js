document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("moodboard-container");
    const cursor = document.getElementById("moodboard-cursor");

    container.addEventListener("mousemove", e => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    });

    gsap.utils.toArray(".draggable").forEach(img => {
        const containerRect = container.getBoundingClientRect();
        const centerX = containerRect.width / 2 - 75; // half image width
        const centerY = containerRect.height / 2 - 75; // half image height

        gsap.set(img, { 
            x: centerX + (Math.random() - 0.5) * 300, 
            y: centerY + (Math.random() - 0.5) * 200 
        });

        Draggable.create(img, {
            type: "x,y",
            bounds: "#moodboard-container",
            onPress() {
                cursor.style.left = this.x + img.offsetWidth/2 + "px";
                cursor.style.top = this.y + img.offsetHeight/2 + "px";
                cursor.classList.add("hover");
            },
            onDrag() {
                cursor.style.left = this.x + img.offsetWidth/2 + "px";
                cursor.style.top = this.y + img.offsetHeight/2 + "px";
            },
            onRelease() {
                cursor.classList.remove("hover");
            }
        });

        img.addEventListener("mouseenter", () => cursor.classList.add("hover"));
        img.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
});
