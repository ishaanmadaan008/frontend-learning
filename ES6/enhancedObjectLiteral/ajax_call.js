function saveFile(url , data)
{
    return {
        method: "Post",
        url,
        data

    }
}

const url = "http://fileupload.com"

const data = { color: "red"}

console.log(saveFile(url,data))
