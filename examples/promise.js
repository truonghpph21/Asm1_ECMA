const LoadScript = (src) => {
    return new Promise((resolve, reject) => {
        const srcipt = document.createElement("script");
        //gán đường dẫn cho thẻ script
        srcipt.src = src;
        srcipt.onload = () => resolve(srcipt); // nếu đúng sẽ trả về thẻ script
        srcipt.onerror = () => reject(new Error("load failed"));// nếu sai sẽ thông báo ra loadfail
        document.head.append(srcipt);
    })
}
LoadScript("https://developer.mozilla.org")
    .then((srcipt) => console.log(srcipt))
    .catch((error) => console.log(error))