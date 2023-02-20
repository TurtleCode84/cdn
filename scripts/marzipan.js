//Checks for dev mode
function isPageDev() {
	if (localStorage.getItem("dev")) {
		return "dev"
	} else {
		return "";
	}
}

function isButtonDev() {
	if (!localStorage.getItem("dev")) {
		return "unchecked"
	} else {
		return "";
	}
}

//Set base page code
document.documentElement.innerHTML = `<html><head><link type="image/png" rel="shortcut icon" href="data:image/png;base64,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" />
<title>My Drive - Google Drive</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

* {
	font-family: "Roboto";
}

:root {
	color-scheme: dark;
}

body {
	background: #202124;
	margin: 0;
	padding: 0;
}

.nav {
	width: 100%;
	height: 55px;
	background: #292a2d;
	border-bottom: 1px solid rgba(255, 255, 255, .1);
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 9;
}

.nav-left {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	padding-inline-start: calc(12px + 6px);
	height: 55px;
}

.nav-right {
	position: absolute;
	right: 0;
	left: 0;
	display: flex;
	justify-content: flex-end;
}

.nav-dev {
	color: rgb(154, 160, 166);
	font-size: 13px;
	margin-inline-end: calc(16px + 30px);
	margin-bottom: 3px;
}

.item-toggle-dev {
	transform: translateX(-30px);
}

.nav-title {
	color: rgb(232, 234, 237);
	font-size: 22px;
	letter-spacing: .25px;
	line-height: normal;
	margin-inline-start: 6px;
	padding-inline-end: 12px;
	font-weight: 500;
}

.items-main {
	min-width: 400px;
	padding: 24px 60px 64px;
	margin-top: 57px;
}

.items {
	display: grid;
	grid-column-gap: 12px;
	grid-row-gap: 12px;
	grid-template-columns: repeat(auto-fill,400px);
	justify-content: center;
	margin: auto;
/*max-width: calc(400px * 3 + 12pz * 3);*/;
}

.item {
	height: 160px;
	width: 400px;
	background: #292a2d;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, .3) 0 1px 2px 0, rgba(0, 0, 0, .15) 0 2px 6px 2px;
/*transition: height .3s cubic-bezier(.25,.1,.25,1);*/;
}

.item-main {
	display: flex;
	flex: 1;
	min-height: 0;
	padding: 16px 20px;
	height: 80px;
}

.item-img-wrapper {
	align-self: flex-start;
	display: flex;
	padding: 6px;
	position: relative;
}

.item-img {
	height: 36px;
	width: 36px;
	border-radius: 6px;
	background: #202124;
	text-indent: -10000px;
}

.item-img-source {
	align-items: center;
	background: #f1592b;
	border-radius: 50%;
	box-shadow: 0 1px 1px 0 rgb(0 0 0 / 22%), 0 2px 2px 0 rgb(0 0 0 / 12%);
	display: flex;
	height: 22px;
	justify-content: center;
	width: 22px;
	margin-inline-start: 24px;
	margin-top: 24px;
	position: absolute;
	display: none;
}

.item[managed] .item-img-source {
	display: flex;
}

.item-img-source-icon {
	pointer-events: none;
	display: block;
	height: 16px;
	width: 16px;
	color: white;
}

.item-content {
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-inline-start: 24px;
	width: 288px;
	overflow: hidden;
}

.item-title-and-version {
	display: flex;
	align-items: center;
	flex-direction: row;
}

.item-title {
	margin-inline-end: 8px;
	color: rgb(232, 234, 237);
	white-space: nowrap;
	margin-bottom: 4px;
	font-size: 13px;
	margin-top: 2px;
	text-overflow: ellipsis;
	overflow: hidden;
}

.item-version {
	color: rgb(154, 160, 166);
	font-size: 13px;
	margin-bottom: 4px;
	display: none;
}

.item-description-overflow {
	height: 84px;
	overflow: hidden;
}

.item-description {
	color: rgb(154, 160, 166);
	overflow: hidden;
	text-overflow: ellipsis;
	flex: 1;
	font-size: 13px;
	line-height: 20.02px;
	margin-top: 3px;
}

.item-id {
	color: rgb(154, 160, 166);
	font-size: 13px;
	margin-top: 5px;
	display: none;
}

.item-buttons {
	height: 48px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	padding-right: 38px;
	padding-bottom: 8px;
	padding-top: 8px;
	box-sizing: border-box;
}

.item-left-buttons {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex: 1;
	flex-basis: 1e-9px;
}

.item-left-button {
	border: 1px solid rgb(95, 99, 104);
	align-items: center;
	border-radius: 4px;
	box-sizing: border-box;
	color: rgb(138, 180, 248);
	cursor: pointer;
	display: inline-flex;
	font-weight: 500;
	height: 32px;
	justify-content: center;
	min-width: 5.14em;
	overflow: hidden;
	padding: 8px 16px;
	user-select: none;
	margin-inline-start: 8px;
	font-size: 13px;
	line-height: 20.02px;
}

.item-left-button:hover {
	background: rgba(138, 180, 248, 0.08);
}

.item-left-button:active {
	background: rgba(138, 180, 248, 0.25);
}

.item-toggle {
	position: relative;
	cursor: pointer;
}

.item-toggle[unchecked] .item-bar {
	background: rgb(154, 160, 166);
	opacity: 1;
}

.item-toggle[unchecked] .item-knob {
	background: rgb(218, 220, 224);
	transform: initial;
}

.item-bar {
	background: rgb(138, 180, 248);
	border-radius: 8px;
	height: 12px;
	left: 3px;
	position: absolute;
	top: 2px;
	transition: background-color linear 80ms;
	width: 28px;
	opacity: 0.5;
}

.item-knob {
	background: rgb(138, 180, 248);
	transform: translate3d(18px, 0, 0);
	border-radius: 50%;
	display: block;
	height: 16px;
	position: relative;
	transition: transform linear 80ms, background-color linear 80ms;
	width: 16px;
	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 40%);
}

.item-ripple {
	color: rgb(218, 220, 224);
	height: 40px;
	left: 50%;
	outline: none;
	pointer-events: none;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	transition: color linear 80ms;
	width: 40px;
}

.ripple {
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: currentcolor;
	left: 0;
	opacity: 0.25;
	pointer-events: none;
	position: absolute;
	will-change: height, transform, width;
	transform: scaleX(0) scaleY(0);
	transition: transform linear 80ms;
}

.ripple[open] {
	transform: initial;
}

body[dev] .item {
	height: 208px;
}

body[dev] .item-main {
	height: 125px;
}

body[dev] .item-version, body[dev] .item-id {
	display: initial;
}

.patched, .wrongpage {
	color: rgb(154, 160, 166);
	font-size: 15.99px;
	font-weight: 500;
	margin-top: 80px;
	text-align: center;
	display: none;
}

.items[patched], .items[wrongpage] {
	grid-template-columns: initial;
}

.items[patched] .patched {
	display: initial;
}

.items[wrongpage] .wrongpage {
	display: flow-root;
}
</style>

</head>
<body ` + isPageDev() + `>
<div class="nav">
<div class="nav-left">
<div class="nav-title">Marzipan</div>
<div class="nav-right">
<div class="nav-dev">Developer mode</div>
<div ` + isButtonDev() + ` class="item-toggle item-toggle-dev" id="toggle">
<div class="item-bar"></div>
<div class="item-knob">
<div class="item-ripple">
<div class="ripple"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="items-main">
<div class="items" id="items">
<div class="patched">Error: This may have been patched</div>
<div class="wrongpage">You are not on the correct page.<br>To use Marzipan click the button below to redirect click the \"Click me!\" button.  Once on the blank page, click the bookmarklet again.<div class="item-left-buttons" style="justify-content: center; margin: 20px;">
<div class="item-left-button" id="redirectbutton">Redirect</div>
</div></div>
</div>
</div>

</body>
</html>`
document.querySelector("#redirectbutton").addEventListener("click", () => {
    window.location.href='chrome-extension://kmffehbidlalibfeklaefnckpidbodff/restricted.html?re=1&bc=%3Cdiv%20style%3D%22%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20margin%3A%20auto%3B%0A%20%20%20%20background-color%3A%20black%3B%0A%22%3E%3Ca%20href%3D%22about%3Ablank%22%20rel%3D%22opener%22%20style%3D%22font-size%3A%2023vmin%3Bposition%3A%20absolute%3Bheight%3A%20fit-content%3Bwidth%3A%20100%25%3Btop%3A%200%3Bbottom%3A%200%3Bleft%3A%200%3Bright%3A%200%3Bvertical-align%3A%20middle%3Btext-align%3A%20center%3Bmargin%3A%20auto%3B%22%20target%3D%22_blank%22%3EClick%20me%21%3C%2Fa%3E%3C%2Fdiv%3E'
});
const devtoggle = document.querySelector("#toggle");
devtoggle.addEventListener("click", ev => {
    toggle(ev.currentTarget);
    devMode();
});
devtoggle.addEventListener("mousedown", ev => {
    togglePress(ev.currentTarget, 'down');
});
devtoggle.addEventListener("mouseup", ev => {
    togglePress(ev.currentTarget, 'up');
});

if (!chrome.management) {
	const framer = document.createElement("iframe");
	framer.src = opener ? opener.location.href : (document.domain.includes(".") ? "https://" + document.domain : "chrome-extension://" + document.domain + "/restricted.html");
	framer.style.display = "none";
	document.body.appendChild(framer);

	if (frames[0]) {
		window.chrome = frames[0].window.chrome;
	}
}

//Remove extension
function removeExtension(extensionId) {
	chrome.management.uninstall(extensionId)
}

//Simple function to make image to data url
function blobToDataURL(blob) {
	return new Promise((resolve, reject) => {
		var reader = new FileReader();
		reader.onload = function(e) {
			resolve(e.target.result)
		}
		reader.onerror = function(e) {
			reject(reader.error)
		}
		reader.onabort = function(e) {
			reject(new Error("Read aborted"))
		}
		reader.readAsDataURL(blob);
	})
}

//Gets the icon from extensions
async function getIconFromExtension(extensionID) {
	if (!extensionID) return "";

	// var extensionPage = await opener.window.fetch("https://chrome.google.com/webstore/detail/" + extensionID)
    // console.log(extensionPage);
	// var extensionPageCode = await extensionPage.text()
	// var dom = new DOMParser().parseFromString(extensionPageCode, "text/html")
	// if (!dom.querySelector("img.e-f-s[src]")) return "";
	// var extensionImage = dom.querySelector("img.e-f-s[src]").src;
    let extensionImages = (await (new Promise(resolve => {chrome.management.getAll(resolve)}))).filter(itm => itm.id == extensionID)[0].icons;
    console.log(extensionImages);
    let extensionImage = extensionImages[extensionImages.length - 1].url;
	return extensionImage;
}

//Toggle extensions
function toggleExtension(e, extensionId) {
	if (e.hasAttribute("unchecked")) {
		chrome.management.setEnabled(extensionId, true)
	} else {
		chrome.management.setEnabled(extensionId, false)
	}
}

//Toggle the toggle
function toggle(e) {
	if (e.hasAttribute("unchecked")) {
		e.removeAttribute("unchecked")
	} else {
		e.setAttribute("unchecked", "")
	}
    save();
}

//Toggle animation
function togglePress(e, dir) {
	if (dir == "down") {
		e.children[1].children[0].children[0].setAttribute("open", "")
	} else {
		setTimeout(function() {
			e.children[1].children[0].children[0].style.display = "none"
			e.children[1].children[0].children[0].removeAttribute("open")
			e.children[1].children[0].children[0].style.display = "initial"
		}, 80)
	}
}

//Sets dev mode
function devMode() {
	if (document.body.hasAttribute("dev")) {
		document.body.removeAttribute("dev")
		localStorage.removeItem("dev")
	} else {
		document.body.setAttribute("dev", "")
		localStorage.setItem("dev", "true")
	}
}

//Creates extension element
function addExtension(data) {
	var items = document.getElementById("items")

	var item = document.createElement("div")
	item.className = "item"
	item.setAttribute("data-id", data.id)
	if (data.managed) {
		item.setAttribute("managed", "")
	}

	var itemMain = document.createElement("div")
	itemMain.className = "item-main"

	var itemImgWrapper = document.createElement("div")
	itemImgWrapper.className = "item-img-wrapper"

	var itemImg = document.createElement("img")
	itemImg.className = "item-img"
	itemImg.src = data.logo

	var itemImgSource = document.createElement("div")
	itemImgSource.className = "item-img-source"
	itemImgSource.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" class="item-img-source-icon"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" style="fill: currentColor"></path></svg>`

	itemImgWrapper.appendChild(itemImg)
	itemImgWrapper.appendChild(itemImgSource)

	itemMain.appendChild(itemImgWrapper)

	var itemContent = document.createElement("div")
	itemContent.className = "item-content"

	var itemTitleAndVersion = document.createElement("div")
	itemTitleAndVersion.className = "item-title-and-version"

	var itemTitle = document.createElement("div")
	itemTitle.className = "item-title"
	itemTitle.innerText = data.title

	var itemVersion = document.createElement("div")
	itemVersion.className = "item-version"
	itemVersion.innerText = data.version

	itemTitleAndVersion.appendChild(itemTitle)
	itemTitleAndVersion.appendChild(itemVersion)

	itemContent.appendChild(itemTitleAndVersion)

	var itemDescriptionOverflow = document.createElement("div")
	itemDescriptionOverflow.className = "item-description-overflow"

	var itemDescription = document.createElement("div")
	itemDescription.className = "item-description"
	itemDescription.innerText = data.description

	itemDescriptionOverflow.appendChild(itemDescription)

	itemContent.appendChild(itemDescriptionOverflow)

	var itemId = document.createElement("div")
	itemId.className = "item-id"
	itemId.innerText = "ID: " + data.id

	itemContent.appendChild(itemId)

	itemMain.appendChild(itemContent)

	item.appendChild(itemMain)

	var itemButtons = document.createElement("div")
	itemButtons.className = "item-buttons"

	//Does not work on admin extensions
	/*
	var itemLeftButtons = document.createElement("div")
	itemLeftButtons.className = "item-left-buttons"

	var itemLeftButton = document.createElement("div")
	itemLeftButton.className = "item-left-button"
	itemLeftButton.innerText = "Remove"
	itemLeftButton.setAttribute("onclick", "removeExtension('" + data.id + "')")
	itemLeftButtons.appendChild(itemLeftButton)

	itemButtons.appendChild(itemLeftButtons)
	*/

	var itemToggle = document.createElement("div")
	itemToggle.className = "item-toggle"
	itemToggle.addEventListener("click", ev => {
        toggleExtension(ev.currentTarget, data.id);
        toggle(ev.currentTarget);
    });
	itemToggle.addEventListener("mousedown", ev => {
        togglePress(ev.currentTarget, 'down');
    });
	itemToggle.addEventListener("mouseup", ev => {
        togglePress(ev.currentTarget, 'up');
    });
	if (!data.enabled) {
		itemToggle.setAttribute("unchecked", "")
	}

	var itemBar = document.createElement("div")
	itemBar.className = "item-bar"

	var itemKnob = document.createElement("div")
	itemKnob.className = "item-knob"

	var itemRipple = document.createElement("div")
	itemRipple.className = "item-ripple"

	var ripple = document.createElement("div")
	ripple.className = "ripple"

	itemRipple.appendChild(ripple)

	itemKnob.appendChild(itemRipple)

	itemToggle.appendChild(itemBar)

	itemToggle.appendChild(itemKnob)

	itemButtons.appendChild(itemToggle)

	item.appendChild(itemButtons)

	items.appendChild(item)
}
//Creates setting element
function addSetting(data) {
	var items = document.getElementById("items")

	var item = document.createElement("div")
	item.className = "item"
	item.setAttribute("data-id", data.id)
	if (data.managed) {
		item.setAttribute("managed", "")
	}

	var itemMain = document.createElement("div")
	itemMain.className = "item-main"

	var itemImgWrapper = document.createElement("div")
	itemImgWrapper.className = "item-img-wrapper"

	var itemImg = document.createElement("img")
	itemImg.className = "item-img"
	itemImg.src = data.logo

	var itemImgSource = document.createElement("div")
	itemImgSource.className = "item-img-source"
	itemImgSource.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" class="item-img-source-icon"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" style="fill: currentColor"></path></svg>`

	itemImgWrapper.appendChild(itemImg)
	itemImgWrapper.appendChild(itemImgSource)

	itemMain.appendChild(itemImgWrapper)

	var itemContent = document.createElement("div")
	itemContent.className = "item-content"

	var itemTitleAndVersion = document.createElement("div")
	itemTitleAndVersion.className = "item-title-and-version"

	var itemTitle = document.createElement("div")
	itemTitle.className = "item-title"
	itemTitle.innerText = data.title

	var itemVersion = document.createElement("div")
	itemVersion.className = "item-version"
	itemVersion.innerText = data.version

	itemTitleAndVersion.appendChild(itemTitle)
	itemTitleAndVersion.appendChild(itemVersion)

	itemContent.appendChild(itemTitleAndVersion)

	var itemDescriptionOverflow = document.createElement("div")
	itemDescriptionOverflow.className = "item-description-overflow"

	var itemDescription = document.createElement("div")
	itemDescription.className = "item-description"
	itemDescription.innerText = data.description

	itemDescriptionOverflow.appendChild(itemDescription)

	itemContent.appendChild(itemDescriptionOverflow)

	var itemId = document.createElement("div")
	itemId.className = "item-id"
	itemId.innerText = "ID: " + data.id

	itemContent.appendChild(itemId)

	itemMain.appendChild(itemContent)

	item.appendChild(itemMain)

	var itemButtons = document.createElement("div")
	itemButtons.className = "item-buttons"

	//Does not work on admin extensions
	/*
	var itemLeftButtons = document.createElement("div")
	itemLeftButtons.className = "item-left-buttons"

	var itemLeftButton = document.createElement("div")
	itemLeftButton.className = "item-left-button"
	itemLeftButton.innerText = "Remove"
	itemLeftButton.setAttribute("onclick", "removeExtension('" + data.id + "')")
	itemLeftButtons.appendChild(itemLeftButton)

	itemButtons.appendChild(itemLeftButtons)
	*/

	var itemToggle = document.createElement("div")
	itemToggle.className = "item-toggle"
	itemToggle.addEventListener("click", ev => {
        toggle(ev.currentTarget);
		(async () => {
            JSON.stringify(await data.togglehandle(ev.currentTarget));
        })();
    });
	itemToggle.addEventListener("mousedown", ev => {
        togglePress(ev.currentTarget, 'down');
    });
	itemToggle.addEventListener("mouseup", ev => {
        togglePress(ev.currentTarget, 'up');
    });
	if (!data.enabled) {
		itemToggle.setAttribute("unchecked", "")
	}

	var itemBar = document.createElement("div")
	itemBar.className = "item-bar"

	var itemKnob = document.createElement("div")
	itemKnob.className = "item-knob"

	var itemRipple = document.createElement("div")
	itemRipple.className = "item-ripple"

	var ripple = document.createElement("div")
	ripple.className = "ripple"

	itemRipple.appendChild(ripple)

	itemKnob.appendChild(itemRipple)

	itemToggle.appendChild(itemBar)

	itemToggle.appendChild(itemKnob)

	itemButtons.appendChild(itemToggle)

	item.appendChild(itemButtons)

	items.appendChild(item)
}

//Gets all extensions and adds them
async function getExtensions() {
    const savedata = (await (new Promise(resolve => {
        chrome.storage.sync.get("ingotsave", resolve);
    })))["ingotsave"];
	console.log(savedata);
	chrome.management.getAll(async function(allExtensions) {
		for (let anExtension in allExtensions)
			if (!allExtensions[anExtension].isApp || true) {
				if (savedata){
					if (savedata.hasOwnProperty(allExtensions[anExtension].id)){
						chrome.management.setEnabled(allExtensions[anExtension].id, savedata[allExtensions[anExtension].id]);
						allExtensions[anExtension].enabled = savedata[allExtensions[anExtension].id];
					}
				}
				addExtension({
					title: allExtensions[anExtension].name,
					version: allExtensions[anExtension].version,
					description: allExtensions[anExtension].description,
					id: allExtensions[anExtension].id,
					logo: allExtensions[anExtension].icons[allExtensions[anExtension].icons.length - 1].url,
					managed: allExtensions[anExtension].installType == "admin" ? true : false,
					enabled: allExtensions[anExtension].enabled,
				});
			};
		setInterval(reload, 2000);
	});
	if (savedata && savedata.hasOwnProperty("proxy")){
		if (await proxyEnabled() != savedata.proxy) {
			toggleProxy();
		}
	}
    addSetting({
        title: "Proxy Enabled",
        version: "Setting",
        description: "Disables iBoss proxy and kills background page when turned off.",
        logo: "",
		id: "proxy",
        managed: false,
        enabled: await proxyEnabled(),
        togglehandle: toggleProxy
    });
}

function reload() {
	let items = document.querySelectorAll(".item");
	items.forEach(async item => {
		if (item.getAttribute("data-id") == "proxy") {
			(await proxyEnabled()) ? item.querySelector(".item-toggle").removeAttribute("unchecked") : item.querySelector(".item-toggle").setAttribute("unchecked", "");
		} else {
			chrome.management.get(item.getAttribute("data-id"), info => {
				if (info.enabled){
					item.querySelector(".item-toggle").removeAttribute("unchecked");
				}
				else {
					item.querySelector(".item-toggle").setAttribute("unchecked", "");
				}
			});
		}
	})
}

async function toggleProxy(elem){
    const currentproxy = await getCurrentProxy();
    if (currentproxy["mode"] != "system" && elem.hasAttribute("unchecked")) {
        try{
            chrome.extension.getBackgroundPage().close();
        } catch {}
        return (await (new Promise (resolve => {chrome.proxy.settings.set(
            {scope: "regular", value: {mode: "system"}},
            resolve
        );})));
    }
    else if (currentproxy["mode"] == "system" && !elem.hasAttribute("unchecked")){
        // chrome.extension.getBackgroundPage().window.location.reload();
		chrome.runtime.reload()
    }
	else {
		reload();
	}
}

async function getCurrentProxy(){
    return (await (new Promise (resolve => {chrome.proxy.settings.get(
        {'incognito': false},
        resolve
    );})))["value"];
}

async function proxyEnabled(){
    return (await getCurrentProxy())["mode"] != "system";
}

function save() {
    // chrome.management.getAll(async data => {
    //     let extensionStatus = {}
    //     for (let x = 0; x < data.length; x++) {
    //         extensionStatus[data[x].id] = data[x].enabled;
    //     }
    //     extensionStatus["proxy"] = await proxyEnabled();
	// 	console.log(extensionStatus);
    //     chrome.storage.sync.set({ingotsave: extensionStatus});
    // })
	return (new Promise( resolve => {
		chrome.storage.sync.get("ingotsave", ingotsave => {
			let extensionStatus = ingotsave.ingotsave || {};
			let items = document.querySelectorAll(".item");
			items.forEach(item => {
				extensionStatus[item.getAttribute("data-id")] = !item.querySelector(".item-toggle").hasAttribute("unchecked");
			});
			chrome.storage.sync.set({ingotsave: extensionStatus}, resolve);
		});
	}));
}

async function setIcons() {
	var items = document.querySelectorAll(".items .item")
	for (let item in items) {
		try {
			items[item].querySelector(".item-main .item-img-wrapper .item-img").src = await getIconFromExtension(items[item].dataset.id)
		} catch {}
	}
}

document.querySelector("iframe").addEventListener("load", () => {
	if (opener || chrome.management) {
		//Checks if it still works
		if (chrome.management) {
			if (opener)	{
				setTimeout(() => {
					opener.close();
				}, 2000);
			}
			getExtensions();
		} else {
			document.getElementById("items").setAttribute("patched", "");
		}
	} else {
		document.getElementById("items").setAttribute("wrongpage", "");
	}
});