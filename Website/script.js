fetch("https://dummyjson.com/products/categories")
  .then((data) => {
    return data.json();
  })
  .then((json) => console.log(json));

//call all products
function default1() {
  fetch("https://dummyjson.com/products?Limit=180")
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      let data1 = "";
      completedata.products.map((values) => {
        data1 += `<div class="card d-inline-block col-lg-3" style="width: 18rem";>
        <h1 class="title">${values.title}</h1>
        <img src='${values.thumbnail}' alt="" class="image" width="100%" height="200">
        <p class="category">${values.category}</p>
        <p class="description">${values.description}</p>
        <p class="price">$${values.price}</p>
        <span style="color: green; font-size: 15px; background-color:none; border:1px solid gray;border-radius:5px; padding-top:2px;padding-bottom:3px; font-style: bold;"><b>(${values.discountPercentage}% off)</b></span><br><hr>
        <button class="addtocart" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')" >ADD TO CART</button>
        <button class="buy" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')">BUY</button>
        <br><hr>
    </div>`;
      });
      document.getElementById("cards").innerHTML = data1;
    })
    .catch((error) => {
      console.log(error);
    });
}
//call all smartphones
function smartphones() {
  fetch("https://dummyjson.com/products/category/smartphones")
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      let data1 = "";
      completedata.products.map((values) => {
        data1 += `<div class="card d-inline-block col-lg-3" style="width: 18rem";>
        <h1 class="title">${values.title}</h1>
        <img src='${values.thumbnail}' alt="" class="image" width="100%" height="200">
        <p class="category">${values.category}</p>
        <p class="description">${values.description}</p>
        <p class="price">$${values.price}</p>
        <span style="color: green; font-size: 15px; background-color:none; border:1px solid gray;border-radius:5px; padding-top:2px;padding-bottom:3px; font-style: bold;"><b>(${values.discountPercentage}% off)</b></span><br><hr>
        <button class="addtocart" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')" >ADD TO CART</button>
        <button class="buy" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')">BUY</button>
        <br><hr>
    </div>`;
      });
      document.getElementById("cards").innerHTML = data1;
    })
    .catch((error) => {
      console.log(error);
    });
}
//call all laptops
function laptops() {
  fetch("https://dummyjson.com/products/category/laptops")
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      let data1 = "";
      completedata.products.map((values) => {
        data1 += `<div class="card d-inline-block col-lg-3" style="width: 18rem";>
        <h1 class="title">${values.title}</h1>
        <img src='${values.thumbnail}' alt="" class="image" width="100%" height="200">
        <p class="category">${values.category}</p>
        <p class="description">${values.description}</p>
        <p class="price">$${values.price}</p>
        <span style="color: green; font-size: 15px; background-color:none; border:1px solid gray;border-radius:5px; padding-top:2px;padding-bottom:3px; font-style: bold;"><b>(${values.discountPercentage}% off)</b></span><br><hr>
        <button class="addtocart" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')" >ADD TO CART</button>
        <button class="buy" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')">BUY</button>
        <br><hr>
    </div>`;
      });
      document.getElementById("cards").innerHTML = data1;
    })
    .catch((error) => {
      console.log(error);
    });
}
//call all fragrances
function fragrances() {
  fetch("https://dummyjson.com/products/category/fragrances")
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      let data1 = "";
      completedata.products.map((values) => {
        data1 += `<div class="card d-inline-block col-lg-3" style="width: 18rem";>
        <h1 class="title">${values.title}</h1>
        <img src='${values.thumbnail}' alt="" class="image" width="100%" height="200">
        <p class="category">${values.category}</p>
        <p class="description">${values.description}</p>
        <p class="price">$${values.price}</p>
        <span style="color: green; font-size: 15px; background-color:none; border:1px solid gray;border-radius:5px; padding-top:2px;padding-bottom:3px; font-style: bold;"><b>(${values.discountPercentage}% off)</b></span><br><hr>
        <button class="addtocart" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')" >ADD TO CART</button>
        <button class="buy" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')">BUY</button>
        <br><hr>
    </div>`;
      });
      document.getElementById("cards").innerHTML = data1;
    })
    .catch((error) => {
      console.log(error);
    });
}
//call all lighting
function lighting() {
  fetch("https://dummyjson.com/products/category/lighting")
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      let data1 = "";
      completedata.products.map((values) => {
        data1 += `<div class="card d-inline-block col-lg-3" style="width: 18rem";>
        <h1 class="title">${values.title}</h1>
        <img src='${values.thumbnail}' alt="" class="image" width="100%" height="200">
        <p class="category">${values.category}</p>
        <p class="description">${values.description}</p>
        <p class="price">$${values.price}</p>
        <span style="color: green; font-size: 15px; background-color:none; border:1px solid gray;border-radius:5px; padding-top:2px;padding-bottom:3px; font-style: bold;"><b>(${values.discountPercentage}% off)</b></span><br><hr>
        <button class="addtocart" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')" >ADD TO CART</button>
        <button class="buy" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')">BUY</button>
        <br><hr>
    </div>`;
      });
      document.getElementById("cards").innerHTML = data1;
    })
    .catch((error) => {
      console.log(error);
    });
}
//call all sunglasses
function sunglasses() {
  fetch("https://dummyjson.com/products/category/sunglasses")
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      let data1 = "";
      completedata.products.map((values) => {
        data1 += `<div class="card d-inline-block col-lg-3" style="width: 18rem";>
        <h1 class="title">${values.title}</h1>
        <img src='${values.thumbnail}' alt="" class="image" width="100%" height="200">
        <p class="category">${values.category}</p>
        <p class="description">${values.description}</p>
        <p class="price">$${values.price}</p>
        <span style="color: green; font-size: 15px; background-color:none; border:1px solid gray;border-radius:5px; padding-top:2px;padding-bottom:3px; font-style: bold;"><b>(${values.discountPercentage}% off)</b></span><br><hr>
        <button class="addtocart" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')" >ADD TO CART</button>
        <button class="buy" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')">BUY</button>
        <br><hr>
    </div>`;
      });
      document.getElementById("cards").innerHTML = data1;
    })
    .catch((error) => {
      console.log(error);
    });
}

function searchitm(url) {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      let data1 = "";
      completedata.products.map((values) => {
        data1 += `<div class="card d-inline-block col-lg-3" style="width: 18rem";>
        <h1 class="title">${values.title}</h1>
        <img src='${values.thumbnail}' alt="" class="image" width="100%" height="200">
        <p class="category">${values.category}</p>
        <p class="description">${values.description}</p>
        <p class="price">$${values.price}</p>
        <span style="color: green; font-size: 15px;">(${values.discountPercentage}% off)</span><br><hr>
        <button class="addtocart" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')" >ADD TO CART</button>
        <button class="buy" onClick="addtocartitem('${values.id}','${values.title}','${values.thumbnail}','${values.price}')">BUY</button>
        <br><hr>
    </div>`;
      });
      document.getElementById("cards").innerHTML = data1;
    })
    .catch((error) => {
      console.log(error);
    });
}
//dropdown search
let productslist = [];
const productlistelement = document.querySelector("#input-list");
const searchInputElement = document.querySelector("#search-input");

function fetchsearch() {
  fetch("https://dummyjson.com/products?Limit=100")
    .then((response) => response.json())
    .then((data) => {
      productslist = data.products.map((x) => x.title);
      productslist.sort();
      loadData(productslist, productlistelement);
    });
}

function loadData(data, element) {
  if (data) {
    element.innerHTML = "";
    let innerElement = "";
    data.forEach((title) => {
      innerElement += `<li>${title}</li>`;
    });
    element.innerHTML = innerElement;
  }
}

function filterdata(data, searchText) {
  return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
}
fetchsearch();
searchInputElement.addEventListener("input", function () {
  const filteredData = filterdata(productslist, searchInputElement.value);
  x = searchInputElement.value;
  if(x==""){
    default1();
  }
  else{
  url1="https://dummyjson.com/products/category/";
  searchitm("https://dummyjson.com/products/category/"+x);
  }
  if(x==""){
    default1();
  }
  loadData(filteredData, productlistelement);
});

function demoDisplay() {
  document.getElementById("input-list").style.display = "block";
}
function hidedisplay() {
  document.getElementById("input-list").style.display = "none";
}
hidedisplay();

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
//CART
function addtocartitem(id, name, image, price) {
  var id1 = id;
  var name1 = name;
  var image1 = image;
  var price1 = price;
  addtocart(id1, name1, image1, price1);
}
let cartitems = [];
let cartitemsid = [];

function addtocart(id, name, image, price) {
  if (cartitemsid.includes(id)) {
    increments(id);
    noofitems();
  } else {
    var obj = {};
    obj.id = id;
    obj.name = name;
    obj.image = image;
    obj.price = price;
    obj.count = 1;
    cartitems.push(obj);
    cartitemsid.push(obj.id);
    noofitems();
    totcost();
  }
  totcost();
  loadcart();
  console.clear();
  displaycart();
}

function deletetocart(id){
  if(cartitemsid.includes(id)){
    decrements(id);
    noofitems();
    totcost();
  }
  loadcart();
  
  displaycart();
}
//increments cartitems
function increments(id) {
  for (var i = 0; i < cartitems.length; i++) {
    if (cartitems[i].id == id) {
      cartitems[i].count += 1;
    }
  }
}
function decrements(id) {
  for (var i = 0; i < cartitems.length; i++) {
    if (cartitems[i].id == id) {
      cartitems[i].count -= 1;
    }
    if (cartitems[i].count<=0){
      itempop(id);
    }
  }
}

function itempop(id){
  for (var i = 0; i < cartitems.length; i++) {
    if (cartitems[i].id == id) {
      cartitems.splice(i,1);
    }
  }
}

function displaycart() {
  for (var i = 0; i < cartitems.length; i++) {
    console.log(cartitems[i]);
  }
  for (var i = 0; i < cartitems.length; i++) {
    console.log(cartitemsid[i]);
  }
}
function calctotal(){
    let total=0;
    for (var i = 0; i < cartitems.length; i++) {
        total+=cartitems[i].count;
      }
    return total;
}
function calctotal2(){
    let total1=0;
    for (var i = 0; i < cartitems.length; i++) {
        total1+=(cartitems[i].count)*cartitems[i].price;
      }
    return total1;
}
function noofitems(){
    document.getElementById("itemno").innerHTML=calctotal();
}
function totcost(){
  document.getElementById("total_cost").innerHTML=calctotal2();
}
function loadcart() {
  let data1 = "";
  const cartitemss=cartitems.map(carti=>{
    data1 += `<div class="card" style="width: 14rem;";>
      <h1 class="title">${carti.name}</h1>
      <img src='${carti.image}' alt="" class="image" width="100%" height="50px">
      <p class="price"><b>Price: </b>$${(carti.price)*(carti.count)}</p>
      <div class="" style="display:flex;justify-content:center;"><button style="width:40px; height:30px; background-color:green;"onclick="addtocartitem('${carti.id}','${carti.title}','${carti.thumbnail}','${carti.price}')"><b>+</b></button><p id="itct">&nbsp;&nbsp;${carti.count}&nbsp;&nbsp;</p><button style="width:40px; height:30px;background-color:red;"onclick="deletetocart('${carti.id}')"><b>-</b></button></div>
  </div><br>`;
  })

  document.getElementById("cart_item").innerHTML = data1;
  }



  



