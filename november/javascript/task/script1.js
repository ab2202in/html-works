// 1
function change() {
    document.getElementById('para').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit commodi molestiae nulla nesciunt! In odit iusto enim quod? Odit facilis expedita aperiam neque ab incidunt itaque doloremque quae autem.";
}

// 2
function addItems() {
    tasks = document.getElementById('task').value;
    const list = document.querySelector('ol');
    list.append(Object.assign(document.createElement('li'), { textContent: tasks }));
};

function submit() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let pass = document.getElementById('pass').value;

  if (name == "" || email=="" || pass==""){
    alert("Please Provide Necessary Information!");
    return false;
  }

}

// 3
var imageArray=["1.avif","2.avif","3.avif"];
var imageIndex=0;
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const myImage = document.getElementById('mainImage');

function prevImage(){
  imageIndex=(imageIndex-1+imageArray.length)%imageArray.length;
  myImage.setAttribute("src",imageArray[imageIndex]);
}
function nextImage(){
  imageIndex=(imageIndex+1)%imageArray.length;
  myImage.setAttribute("src",imageArray[imageIndex]);
}

//4