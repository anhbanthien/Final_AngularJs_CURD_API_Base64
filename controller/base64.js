
function listenEvent() {
    const pre = document.getElementById("getUpload")
    const file = document.getElementById("upload").files[0]
    const reader = new FileReader()
    reader.addEventListener("load", (
    ) => { pre.src = reader.result }, false)
    if (file) {
        reader.readAsDataURL(file)
    }
}
