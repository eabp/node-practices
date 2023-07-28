const sharp = require('sharp');

sharp('light.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');