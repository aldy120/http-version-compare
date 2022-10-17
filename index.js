const container = document.getElementById("container");

for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
        const number =  1 + j + i * 30
        const numberString = number.toString().padStart(3, '0');
        imgSrc = `images/image_part_${numberString}.jpg`
        const img = document.createElement("img");
        img.src=imgSrc;
        container.appendChild(img);
    }
}