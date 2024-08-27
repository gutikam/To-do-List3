document.getElementById("btn").addEventListener("click", function(){
    function agregarTarea(){
      const inputt = document.getElementById("tareInput");
      const valorInput = inputt.value.trim();

      if(valorInput === ""){
        alert("Debe ingresar una tarea")
        return
      }

      const lista = document.getElementById("lista");
      const li = document.createElement("li");
      li.textContent = valorInput;

      const eliminar = document.createElement("button");
      eliminar.textContent = "Eliminar";
      eliminar.classList.add("btn2")
      eliminar.addEventListener("click", function(){
        lista.removeChild(li);
      });

      li.appendChild(eliminar);
      lista.appendChild(li);


      inputt.value = "";
    }


    agregarTarea()
})