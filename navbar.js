// var html = '<nav class="navbar navbar-dark bg-dark navbar-expand-sm">\
//                 <div class="container-fluid">\
//                 <a class="navbar-brand" href="index.html">Brand</a>\
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\
//                     <span class="navbar-toggler-icon"></span>\
//                 </button>\
//                 <div class="collapse navbar-collapse" id="navbarNav">\
//                     <ul class="navbar-nav">\
//                         <li class="nav-item">\
//                             <a class="nav-link btn btn-secondary mr-1 ml-1" href="index.html">Home</a>\
//                         </li>\
//                         <li class="nav-item">\
//                             <a class="nav-link btn btn-secondary mr-1 ml-1" href="author_navigation.html">Authors</a>\
//                         </li>\
//                         <li class="nav-item">\
//                             <a class="nav-link btn btn-secondary mr-1 ml-1" href="topic_navigation.html">Topics</a>\
//                         </li>\
//                     </ul>\
//                 </div>\
//                 </div>\
//             </nav>'

var html = '<nav class="navbar navbar-expand-md navbar-dark bg-crimson">\
              <a class="navbar-brand" href="index.html" title="Home">Site Name</a>\
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="navbar-toggler-icon"></span>\
              </button>\
              <div class="collapse navbar-collapse" id="navbarSupportedContent">\
                <ul class="navbar-nav mr-auto">\
                  <li class="nav-item">\
                    <a class="nav-link" href="author_navigation.html">Authors</a>\
                  </li>\
                  <li class="nav-item">\
                    <a class="nav-link" href="topic_navigation.html">Topics</a>\
                  </li>\
                  <li class="nav-item">\
                    <a class="nav-link" href="category_navigation.html">Categories</a>\
                  </li>\
                </ul>\
              </div>\
            </nav>'

document.getElementById('navigationbar').innerHTML = html;