// get date and month

months = ['January','Febuarary','March','April','May','June','July','August','September','October','November','December'];

days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

date_data = new Date()
current_day = date_data.getDay()
document.getElementById('day').textContent = days[current_day]

current_month = date_data.getMonth()
current_date = date_data.getDate()
current_year = date_data.getFullYear()

document.getElementById('month_date_year').textContent = months[current_month] + " " + current_date +  " " + current_year




// setting variables
var submitForm = document.querySelector('.add');
var addButton = document.querySelector('.add-todo');
var todoList = document.querySelector('.todos');
var list = document.querySelectorAll('.todos li'); 

let listLenght = list.lenght;

// es6 function for html template
const generateTempalate = (todo) => {
  
  var html = `<li>
                  <input type="checkbox" id="todo_${listLenght}">
                  <label for="todo_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="far fa-trash-alt delete"></i>
                </li>`

// increment the above html code in index.html when a new todo is entered in list.
  todoList.innerHTML += html;
};


// this adds the todo in the list
function addTodos(e) {
// to prevent the default submission, we use preventdefault()
  e.preventDefault();
  var todo = submitForm.add.value;
  if (todo.length) {
    listLenght = listLenght + 1;
    generateTempalate(todo);
    submitForm.reset();
  }
}

submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);


// this function deletedsthe todo from list when icon is clicked.
function deleteTodos(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
}

todoList.addEventListener('click', deleteTodos);


