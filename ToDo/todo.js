window.addEventListener('load',() => {
    const form = document.querySelector('#new-task-form');
    const input = document.getElementById('new-task-input');
    const task_list = document.getElementById('tasks');
    const pleaseFillInput = document.getElementById('pleaseFillInput');

    let func = form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputVal = input.value;

        if(!inputVal){
            pleaseFillInput.classList.add('active')
            setTimeout(()=>{
                pleaseFillInput.classList.remove('active')
            },3500)
        }

        const task = document.createElement('div')
        task.classList.add('task')

        const task_content = document.createElement('div')
        task_content.classList.add('content')

        task.appendChild(task_content)

        ////////TASKINPUTS
        const taskInput = document.createElement('input')
        taskInput.classList.add('text')
        taskInput.type = 'text'
        taskInput.value = inputVal
        taskInput.setAttribute("readonly","readonly")

        task_content.appendChild(taskInput)

        ///////////////TASKBTNS
        const task_buttons = document.createElement('div')
        task_buttons.classList.add('actions')

        const task_edit = document.createElement('button')
        task_edit.classList.add('edit')
        task_edit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'

        const task_delete = document.createElement('button')
        task_delete.classList.add('delete')
        task_delete.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

        task_buttons.appendChild(task_edit)
        task_buttons.appendChild(task_delete)

        task.appendChild(task_buttons)

        task_list.appendChild(task)

        input.value = ""
        input.focus()

        task_edit.addEventListener('click',()=>{
            if(task_edit.innerHTML === '<i class="fa-solid fa-pen-to-square"></i>'){
                taskInput.removeAttribute("readonly")
                taskInput.focus()
                task_edit.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>'
            }else{
                taskInput.setAttribute("readonly","readonly")
                task_edit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
            }
        })

        task_delete.addEventListener("click",()=>{
            task_list.removeChild(task)
        })

        if(!inputVal && inputVal == ""){
            task.style.display = 'none'
        }
    })
    input.addEventListener('keydown',(e)=>{
        if(e.key === 13){
            func
        }
    })
})
