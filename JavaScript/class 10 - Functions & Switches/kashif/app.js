function changeImage() {
    var image = document.getElementsByTagName('img')[0]
    var parent = image.parentElement
    debugger
    var newSrc = "https://i.ytimg.com/vi/ZHDGKqGTY1s/maxresdefault.jpg"
    var oldSrc = "https://1.bp.blogspot.com/-aV2CvGgvM7o/YEI_09o2-zI/AAAAAAAADUQ/_kHUBggcfdsOnNKsk1neowa-qbwE3tt2ACPcBGAYYCw/s900/82602990_2459020644359021_5708096360570232265_n.jpg"
    if (image.src === oldSrc) {
        image.src = newSrc
        parent.className = 'naya-pakistan'
    } else {
        image.src = oldSrc
        parent.className = 'purana-pakistan'
    }
}

/*
    1. document.getElementById()
    2. document.getElementsByTagName()
    3. document.getElementsByClassName()
    4. element.parentElement
    5. element.children[0]
*/