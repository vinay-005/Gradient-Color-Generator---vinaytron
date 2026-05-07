const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".direction-select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector(".gradient-code");

const refreshBtn = document.querySelector(".refresh-btn");
const copyBtn = document.querySelector(".copy-btn");

/* Generate Random Color */
const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex.padStart(6, "0")}`;
};

/* Generate Gradient */
const generateGradient = () => {

    const color1 = colorInputs[0].value;
    const color2 = colorInputs[1].value;

    const direction = selectMenu.value;

    const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;

    gradientBox.style.background = gradient;

    textarea.value = `background-image: ${gradient};`;
};

/* Random Gradient */
const randomGradient = () => {

    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();

    generateGradient();
};

/* Copy Code */
const copyCode = () => {

    navigator.clipboard.writeText(textarea.value);

    copyBtn.innerText = "Copied!";

    setTimeout(() => {
        copyBtn.innerText = "Copy Code";
    }, 1500);
};

/* Events */
colorInputs.forEach(input => {
    input.addEventListener("input", generateGradient);
});

selectMenu.addEventListener("change", generateGradient);

refreshBtn.addEventListener("click", randomGradient);

copyBtn.addEventListener("click", copyCode);

/* Initial Gradient */
generateGradient();