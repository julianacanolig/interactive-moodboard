document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("moodboard-container");

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
            bounds: "#moodboard-container"
        });
    });
});

