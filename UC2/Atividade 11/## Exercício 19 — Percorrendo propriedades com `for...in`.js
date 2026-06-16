const computador = {
    marca:"Commodore",
    processador:"Motorola 68000 @ 7.16 MHz 7.09 MHz (PAL)",
    memoria:"1 MB",
    armazenamento:"6 MB"
}
for (const key in computador) {
    console.log(key + ":", computador[key]);
}