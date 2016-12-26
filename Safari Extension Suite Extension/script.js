document.addEventListener("DOMContentLoaded", function(event) {
  // Be able to detect the page
  var domain = location.origin
  var path = location.pathname
  
  if (path.indexOf("/projects/") === 0 && path.indexOf("/projects/editor") !== 0 && /[0-9]/.test(path[path.lastIndexOf("/") - 1])) {
    // When we see a project...
    
    document.title = document.title.slice(0, document.title.length - 11) // Remove the "on Scratch" from the tab
    
    // And add an "Open In..." buttons
    var openInSVM = document.createElement("a")
    openInSVM.href = "http://llk.github.io/scratch-vm/#" + path.slice(10, path.lastIndexOf("/"))
    openInSVM.innerHTML = "<div class=\"button\"><span class=\"white\">Scratch-VM</span></div>"
    
    var openInP = document.createElement("a")
    openInP.href = "http://phosphorus.github.io/#" + path.slice(10, path.lastIndexOf("/"))
    openInP.innerHTML = "<div class=\"button\"><span class=\"white\">Phosphorus</span></div>"
    
    var buttonBar = document.querySelector(".box-head .buttons");
    buttonBar.insertBefore(openInSVM, buttonBar.children[1])
    buttonBar.insertBefore(openInP, buttonBar.children[1])
  }else if (path.indexOf("/discuss/topic/") === 0) {
    // When we see a discussion topic...
    
    document.title = document.title.slice(0, document.title.length - 18) // Remove the " - Discuss Scratch" from the tab
    
    // Add a go down button
    var goDownBtn = document.createElement("a")
    goDownBtn.href = "#markItUpId_body";
    goDownBtn.style.position = "fixed";
    goDownBtn.style.right = "20px";
    goDownBtn.style.bottom = "25px";
    goDownBtn.className = "grey button";
    goDownBtn.innerHTML = "<span>Go Down</span>";
    document.body.appendChild(goDownBtn);
  }
  
  // When we see anything...
    
  if (document.querySelector("li.search > form.form")) {
    // On the updated site...
    
    // Switch to google
    var searchForm = document.querySelector("li.search > form.form")
    searchForm.addEventListener("submit", function(e){
      e.preventDefault()
      e.stopPropagation()
      var searchBoxContent = document.querySelector("li.search > form.form > .form-group > .col-sm-9 > input[type=text]").value
      location.assign("https://google.com/#q=site%3Ascratch.mit.edu%20" + encodeURIComponent(searchBoxContent));
    })
  }else{
    // On the old site...
    
    // Switch to google
    var searchForm = document.querySelector("form.search[method=get]")
    searchForm.addEventListener("submit", function(e){
      e.preventDefault()
      e.stopPropagation()
      var searchBoxContent = document.getElementById("search-input").value
      location.assign("https://google.com/#q=site%3Ascratch.mit.edu%20" + encodeURIComponent(searchBoxContent));
    })
  }
});
