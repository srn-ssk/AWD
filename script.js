const button = document.getElementById('colorButton').addEventListener('click', function() {
    const colors = [
        'rgba(255,173,173,0.8)', 
        'rgba(255,214,165,0.8)', 
        'rgba(202,255,191,0.8)', 
        'rgba(155,246,255,0.8)', 
        'rgba(160,196,255,0.8)', 
        'rgba(189,178,255,0.8)'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.container').style.backgroundColor = randomColor
});