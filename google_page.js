window.onload = function() {
    setup();
}
const setup = () => {
    //get the divs
    LT = document.getElementById("leftTop");
    RT = document.getElementById("rightTop");
    mainDiv = document.getElementById("mainDiv");
    //create small text links (about, store, gmail, images, sign in)
    about = document.createElement("button");
    about.setAttribute("class", "blankButton");
    about.innerHTML = "  About  ";
    LT.appendChild(about);
    store = document.createElement("button");
    store.setAttribute("class", "blankButton");
    store.innerHTML = "  Store  ";
    LT.appendChild(store);
    gmail = document.createElement("button");
    gmail.setAttribute("class", "blankButton");
    gmail.innerHTML = "  Gmail  ";
    RT.appendChild(gmail);
    images = document.createElement("button");
    images.setAttribute("class", "blankButton");
    images.innerHTML = "  Images  ";
    RT.appendChild(images);
    signIn = document.createElement("button");
    signIn.setAttribute("id", "signIn");
    signIn.innerHTML = "  Sign in  ";
    RT.appendChild(signIn);
    //search button and luckyy button
    search = document.createElement("button");
    search.setAttribute("id", "search");
    search.innerHTML = "  Google Search  ";
    mainDiv.appendChild(search);
    lucky = document.createElement("button");
    lucky.setAttribute("id", "lucky");
    lucky.innerHTML = "  I'm Feeling Lucky  ";
    mainDiv.appendChild(lucky);
}