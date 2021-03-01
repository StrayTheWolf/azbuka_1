window.onscroll = function() {
    scrollFunction()
};

export function scrollFunction() {
    if (document.body.scrollTop > 200  || document.documentElement.scrollTop > 200) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}

document.getElementById('top-btn').addEventListener('click',topFunction);

export function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}