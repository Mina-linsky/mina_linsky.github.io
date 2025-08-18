const track = document.getElementById("image-track");

// tracking starting point of per mouse click
window.onmousedown = e =>
{
    e.clientX;
    track.dataset.mouseDownAt = e.clientX;
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmouseup = () =>
{
    track.dataset.mouseDownAt = "0";
}

// mouse slider as it spans across the scene
window.onmousemove = e =>
{
    if(track.dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(track.dataset.nmouseDownAt) - e.clientX,
            maxDelta = window.innerWidth /2;

    const percentage = (mouseDelta / maxDelta) * -100;
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
        Math.min(nextPercentage, 0);
        Math.max(nextPercentage, -100);

    track.dataset.percentage = nextPercentage;

    track.style.transform = 'translate(${percentage}%, -50%)';

    track.animate(
        {
            transform: 'translate(${nextPercentage}%, -50%)'
        },
        {
            duration: 100, fill:"forwards"
        }
    );

    image.animate({
        objectPosition: '${100 + nextPercentage}% center'
    }, {duration: 1200, fill: "forwards"});
}
