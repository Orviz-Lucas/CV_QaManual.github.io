

// Animacion al dezplazar
// $( document ).ready(function() {
//     new WOW().init();
//   });


// progres bar  
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 2;
        $("#dynamic")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 50)
            clearInterval(interval);
    }, 1000);
  });
// HTML, CSS, bootstrap
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 2;
        $("#dynamic1")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 60)
            clearInterval(interval);
    }, 1000);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 2;
        $("#dynamic2")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 50)
            clearInterval(interval);
    }, 1000);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 2;
        $("#dynamic3")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 30)
            clearInterval(interval);
    }, 1000);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 2;
        $("#dynamic4")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 60)
            clearInterval(interval);
    }, 1000);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 2;
        $("#dynamic5")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 60)
            clearInterval(interval);
    }, 1000);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 2;
        $("#dynamic6")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 70)
            clearInterval(interval);
    }, 1000);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 2;
        $("#dynamic7")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 50)
            clearInterval(interval);
    }, 1000);
  });
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 2;
        $("#dynamic8")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 50)
            clearInterval(interval);
    }, 1000);
  });
// React 
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 2;
        $("#dynamic10")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 20)
            clearInterval(interval);
    }, 1000);
  });



  // Tooltips Initialization
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// toast 
const alerta = document.querySelector("#alerta");
alerta.addEventListener("click", () =>  {
    toastr.info('Alerta', "PDF EN DESARROLLO", {"progressBar": true});

})
