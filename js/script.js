let filterBtn = document.querySelector(".filterBar")
    menuBtn = document.querySelector(".resD")
	closeBtn = document.querySelector(".closeBtn")
	closeBtn1 = document.querySelector(".closeBtn1")
    sideBar = document.querySelector(".sideBar")
    menubg = document.querySelector(".menubg")
    likeProduct = document.querySelectorAll(".likeProduct i")
function openSideBar(ele, cBtn) {
	ele.style.transform = "translateX(0)"
	cBtn.style.display = "inline-block"
}
function closeSideBar(ele) {
	ele.style.transform = 'translateX(-100%)'
}
likeProduct.forEach(item=>{
	item.addEventListener("click", function(){
		item.classList.toggle("red")
	})
})
filterBtn.addEventListener("click", ()=>{
	openSideBar(sideBar, closeBtn)
})
closeBtn.addEventListener("click", ()=>{
	closeSideBar(sideBar)
})

menuBtn.addEventListener("click", ()=>{
	openSideBar(menubg, closeBtn1)
	document.body.style.overflow = 'hidden'
})
closeBtn1.addEventListener("click", ()=>{
	closeSideBar(menubg)
	document.body.style.overflow = ''

})
menubg.addEventListener("click", ()=>{
	closeSideBar(menubg)
	document.body.style.overflow = ''

} )