document.addEventListener('DOMContentLoaded', () => {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const redValueSpan = document.getElementById('red-value');
    const greenValueSpan = document.getElementById('green-value');
    const blueValueSpan = document.getElementById('blue-value');
    const colorBox = document.getElementById('color-box');
    const hexCodeSpan = document.getElementById('hex-code');

    function updateColor() {
        const r = redSlider.value;
        const g = greenSlider.value;
        const b = blueSlider.value;

        // Update the color box background
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        colorBox.style.backgroundColor = rgbColor;

        // Update the slider value displays
        redValueSpan.textContent = r;
        greenValueSpan.textContent = g;
        blueValueSpan.textContent = b;

        // Convert RGB to HEX and update the hex code display
        const hexColor = rgbToHex(r, g, b);
        hexCodeSpan.textContent = hexColor;
    }

    function rgbToHex(r, g, b) {
        const toHex = (c) => {
            const hex = parseInt(c).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    // Add event listeners to all sliders
    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    // Set initial color
    updateColor();
});
