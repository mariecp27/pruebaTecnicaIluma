window.addEventListener('load', function(){
    let deleteButtons = document.querySelectorAll('.deleteButton');
    let deleteForm =  document.querySelectorAll('.deleteForm');

    deleteButtons.forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', function(e){
        e.preventDefault();

        Swal.fire({
          title: '¿Desea eliminar este producto?',
          html: '<p class="warning__text">Este proceso no se puede revertir</p>',
          icon: 'warning',
          padding: '1rem',
          backdrop: true,
          position: 'center',
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          stopKeydownPropagation: false,
          showCancelButton: true,
          confirmButtonColor: '#1F312F',
          cancelButtonColor: '#092538',
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar',

          customClass: {
            popup: 'warning__popup',
            title:'warning__title',
            confirmButton: 'warning__confirm',
            cancelButton: 'warning__cancel'
          }

        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: '¡Eliminado!',
              html: '<p class="warning__text">El producto ha sido eliminado</p>',
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#1F312F',
              confirmButtonText: 'Cerrar',

              customClass: {
                title:'warning__title',
                confirmButton: 'warning__confirm',
              }

            }).then((result) => {
              if (result.isConfirmed) {
                deleteForm[index].submit();
              }
            })
          }
        })
    })
  })
    
})