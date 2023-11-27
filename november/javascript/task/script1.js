function change() {
    document.getElementById('para').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit commodi molestiae nulla nesciunt! In odit iusto enim quod? Odit facilis expedita aperiam neque ab incidunt itaque doloremque quae autem.";
}

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