
const baseData = await fetch("https://raw.githubusercontent.com/alexander-rivaldy/stolen-treasure-assets/refs/heads/main/dragons-lair/base/data.json")

for (let idx = 0; idx < array.length; idx++) {
    const element = baseData[idx];
    console.log(element)
}
