let e;
setTimeout(() => {
    e = document.querySelector(".loader");
    console.log("🚀 ~ loader:", e);
    e.classList.add("remove")
}, 2000)