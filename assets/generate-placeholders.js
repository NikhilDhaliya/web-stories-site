function generatePlaceholderImage(text, width, height, backgroundColor) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Add text
    ctx.fillStyle = '#ffffff';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width/2, height/2);

    return canvas.toDataURL('image/jpeg', 0.8);
}

// Generate placeholder images
const images = {
    'publisher-logo.png': ['Publisher Logo', 512, 512, '#333333'],
    'story1-cover.jpg': ['Bali Cover', 720, 1280, '#4CAF50'],
    'story2-cover.jpg': ['Pasta Cover', 720, 1280, '#FF5722'],
    'bali-cover.jpg': ['Bali Beach', 720, 1280, '#03A9F4'],
    'bali-temple.jpg': ['Bali Temple', 720, 1280, '#9C27B0'],
    'pasta-cover.jpg': ['Fresh Pasta', 720, 1280, '#FF9800'],
    'pasta-ingredients.jpg': ['Ingredients', 720, 1280, '#795548'],
    'pasta-making.jpg': ['Making Pasta', 720, 1280, '#607D8B']
};

// Save images (you'll need to implement this part based on your environment)
for (const [filename, [text, width, height, color]] of Object.entries(images)) {
    const dataUrl = generatePlaceholderImage(text, width, height, color);
    // Save dataUrl as file
    console.log(`Generated placeholder for ${filename}`);
} 