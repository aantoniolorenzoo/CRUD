document.addEventListener("DOMContentLoaded", function () {
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const confirmDelete = confirm(
        "¿Está seguro de querer eliminar este registro?"
      );
      if (confirmDelete) {
        // Aquí puedes agregar la lógica para eliminar el registro
        console.log("Registro eliminado");
      }
    });
  });
});
