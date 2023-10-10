export default function hexToRgb(color: string) {
    let hex = color[0] === '#' ? color.slice(1) : color
    let c

    // expand the short hex by doubling each character, fc0 -> ffcc00
    if (hex.length !== 6) {
        hex = ((() => {
        const result = []
        for (c of Array.from(hex)) {
            result.push(`${c}${c}`)
        }
        return result
        })()).join('')
    }
    const colorStr = hex.match(/#?(.{2})(.{2})(.{2})/)?.slice(1)
    const rgb = colorStr?.map(col => parseInt(col, 16))
    rgb?.push(1)
    return rgb
}