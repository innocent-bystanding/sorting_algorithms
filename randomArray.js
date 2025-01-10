export function generateArray() {
    let arr = [];

    for (let i = 0; i < 1000; i++) {
        let num = (Math.floor(Math.random() * 1000))
        arr.push(num)
    }

    return arr
}