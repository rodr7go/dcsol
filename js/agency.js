(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: $('#mainNav').height()
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#logo-image").attr('src', './img/SmallLogo.png');
            $(".navbar-toggler i").css('font-size', '1.5em');
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $("#logo-image").attr('src', './img/SmallLogoWhite.png');
            $(".navbar-toggler i").css('font-size', '2em');
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        $(".navbar").removeClass("d-none");
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $('ul.timeline>li').addClass('lightSpeedIn animated');
        }
    });


    // backgrounds to slider
    $('.carousel-item').each( function(index, element) {
        element = $(element);
        var bgPos = element.attr('data-bg-pos');
        var bg = element.attr('data-bg');

        element.css('background-image', 'url("'+bg+'")');

        if (bgPos !== undefined) {
            element.css('background-position', bgPos);
        }
    });

    // Datatables
    $('.dataTable').DataTable({
        language: {
            search: "Buscar ",
            paginate: {
                next: 'Sig',
                previous: 'Prev'
            },
            infoEmpty: 'Viendo 0 de 0 registros',
            emptyTable: 'No hay registros en la tabla',
            info: "<em><small>Mostrando _START_ a _END_ de _TOTAL_ registros</small></em>",
            lengthMenu: "Ver _MENU_ registros"
        }
    });

    $('.filter .table').DataTable();

    $('.buttons .table').DataTable({
        dom: 'Bflrtp',
        buttons: [
            {
                extend: 'copy',
                'text': 'Copiar'

            },
            'pdf',
            'excel'
        ],
        language: {

            search: "Buscar ",
            paginate: {
                next: 'Sig',
                previous: 'Prev'
            },
            infoEmpty: 'Viendo 0 de 0 registros',
            emptyTable: 'No hay registros en la tabla',
            info: "<em><small>Mostrando _START_ a _END_ de _TOTAL_ registros</small></em>",
            lengthMenu: "Ver _MENU_ registros"
        }
    });

    var editor = new $.fn.dataTable.Editor( {
        // ajax: "../php/staff.php",
        table: "#example",
        idSrc: "id",
        fields: [
            {
                label: "id",
                name: "id"
            },
            {
                label: "First name:",
                name: "first_name"
            },
            {
                label: "Last name:",
                name: "last_name"
            },
            {
                label: "Position:",
                name: "position",
                type: "select",
                options: [
                    { label: "1 (highest)", value: "1" },
                    { label: "2",           value: "2" },
                    { label: "3",           value: "3" },
                    { label: "4",           value: "4" },
                    { label: "5 (lowest)",  value: "5" }
                ]
            },
            {
                label: "Email",
                name: "email"
            },
            {
                label: "Office:",
                name: "office"
            },
            // {
            //     label: "Extension:",
            //     name: "extn"
            // },
            {
                label: "Age",
                name: "age"
            },
            // {
            //     label: "Salary:",
            //     name: "salary"
            // },
            {
                label: "Start date:",
                name: "start_date",
                type: "datetime"
            }
        ]
    } );

    // Activate an inline edit on click of a table cell
    $('#example').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this );
    } );



    $('#example').DataTable( {
        dom: "Bfrtip",
        data: dataToPopulate,
        // ajax: "../php/staff.php",
        order: [[ 1, 'asc' ]],
        columns: [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            {data: "id"},
            {data: "first_name"},
            {data: "last_name"},
            {data: "position"},
            {data: "email"},
            {data: "office"},
            //{data: "extn"},
            {data: 'age'},
            //{data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' )},
            {data: "start_date"},


        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        buttons: [
            {
                extend: "create",
                text: "Crear",
                editor: editor
            },
            {
                extend: "edit",
                text: "Editar",
                editor: editor
            },
            {
                extend: "remove",
                text: "Borrrar",
                editor: editor
            }
        ]
    } );

    // Collapse
    var group = $('#tablesGroup');
    var samples = $('#samples-tab');
    var filesTab = $('#files-management-tab');
    var ecommerceTab = $('#ecommerce-tab');
    group.on('show.bs.collapse','.collapse', function() {
        group.find('.collapse.show').collapse('hide');
    });
    samples.on('click', function () {
        group.find('.collapse.show').collapse('hide');
    });
    filesTab.on('click', function () {
        group.find('.collapse.show').collapse('hide');
    });
    ecommerceTab.on('click', function () {
        group.find('.collapse.show').collapse('hide');
    });

    $('.portfolio-link').on('click', function(){
        var itemCollapsed = $(this).attr('data-target');

        $(itemCollapsed).on('shown.bs.collapse', function (e) {
            $('html,body').animate({
                scrollTop: $('#itemToScroll').offset().top - 100
            }, 500);
        });

    });

    // Select2
    $('.advanced .select2').select2({ width: '100%' });

    // DatePicker
    $('.advanced .datepicker').datepicker({
        format: 'yyyy/mm/dd' // El formato por defecto es dd/mm/yyyy
    });

    // Save new record in table
    var btnSave = $('.btn_save_dummy_record');

    btnSave.on('click', function (event) {
        event.preventDefault();
        var that = $(this);

        var name = that.parent().find('input.name');
        var jobPosition = that.parent().find('select.jobPosition');
        var office = that.parent().find('input.office');
        var age = that.parent().find('input.age');
        var startDate = that.parent().find('input.startDate');
        var salary = that.parent().find('input.salary');

        $('.table tbody').prepend(
            '<tr>' +
            '<td>'+name.val()+'</td>' +
            '<td>'+jobPosition.val()+'</td>' +
            '<td>'+office.val()+'</td>' +
            '<td>'+age.val()+'</td>' +
            '<td>'+startDate.val()+'</td>' +
            '<td>$'+salary.val()+'</td>' +
            '</tr>'
        );

        name.val('');
        jobPosition.val('');
        office.val('');
        age.val('');
        startDate.val('');
        salary.val('');

        // SweetAlert
        swal({
                title: "Bien hecho!",
                text: "El registro ha sido guardado correctamente",
                type: "success",
                // showCancelButton: true,
                confirmButtonClass: "btn-primary",
                confirmButtonText: "Ok",
                closeOnConfirm: true
            },
            function(){
                $('#collapseFilterTable').collapse('show');
            });
    });

    // Wizard Form
    var form = $("#wizard_form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {
            confirm: {
                equalTo: "#password"
            }
        }
    });
    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        stepsOrientation: 1,
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            swal({
                    title: "Bien hecho!",
                    text: "Formulario finalizado",
                    type: "success",
                    // showCancelButton: true,
                    confirmButtonClass: "btn-primary",
                    confirmButtonText: "Ok",
                    closeOnConfirm: true
                },
                function(){
                    $('#collapseWizardForm').collapse('hide');
                });
        }
    });

    // Cleave
    var creditCard = new Cleave($('#creditCard'), {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
            $('.type').html(type.toUpperCase());
        }
    });

    var cleaveDate = new Cleave($('#cleaveDate'), {
       date: true,
       datePattern: ['Y', 'm', 'd']
    });

    var cleaveSalary = new Cleave($('#cleaveSalary'), {
        numeral: true,
        prefix: '$'
    })

    $('.category').select2({
        width: '100%'
    });

    // MultiSelect
    $('#my-select').multiSelect()

    // UISlider
    var sliderBasic = document.getElementById('nouislider_basic_example');
    noUiSlider.create(sliderBasic, {
        start: [30],
        connect: 'lower',
        step: 1,
        range: {
            'min': [0],
            'max': [100]
        }
    });
    getNoUISliderValue(sliderBasic, true);

    //Range Example
    var rangeSlider = document.getElementById('nouislider_range_example');
    noUiSlider.create(rangeSlider, {
        start: [32500, 62500],
        connect: true,
        range: {
            'min': 25000,
            'max': 100000
        }
    });
    getNoUISliderValue(rangeSlider, false);

    //Get noUISlider Value and write on
    function getNoUISliderValue(slider, percentage) {
        slider.noUiSlider.on('update', function () {
            var val = slider.noUiSlider.get();
            if (percentage) {
                val = parseInt(val);
                val += '%';
            }
            $(slider).parent().find('span.js-nouislider-value').text(val);
        });
    }

    // Light Gallery
    $('#animated-thumbnails').lightGallery({
        thumbnail:true,
        animateThumb: false,
        showThumbByDefault: false,
        selector: '.item'
    });

    // Chart JS Bars
    var chart = document.getElementById("barChart");
    var ctx = chart.getContext('2d');

    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [7, 9, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
        }
    });

    //Lineal Chart
    var chart = document.getElementById("myLineChart");
    var ctx = chart.getContext('2d');

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
            datasets: [{
                label: '# de votos',
                data: [7, 9, 3, 5, 2, 3],
                borderWidth: 3,
                borderColor: '#FF6384',
                backgroundColor: 'transparent'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

    // light gallery - image manager
    // Light Gallery
    $('#image-manager').lightGallery({
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: false,
        selector: '.item'
    });
    $('#ecommerce').lightGallery({
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: false,
        selector: '.item'
    });
})(jQuery); // End of use strict


//////////////////////////////////////// variables



//
//
// var svg = document.getElementById('svg');
// var dotMatrix = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
// var dots = [];
// var lineMatrix = document.createElementNS("http://www.w3.org/2000/svg", 'line');
// var lines = [];
// var dotNumber = 500;
// var lineNumber = 5;
//
// var screenW;
// var screenH;
// var dotColumns;
// var dotRows;
// var dotRandomMax = 2;
//
// var mouseMoving = false;
// var mouse = {};
//     mouse.distances = [];
//     mouse.power = 10;
//
//
//
//
//
// //////////////////////////////////////// init
//
//
// function init() {
//   console.log('--- init')
//   screenW = window.innerWidth;
//   screenH = window.innerHeight;
//
//   dotRows = Math.sqrt(dotNumber * (screenH / screenW));
//   dotColumns = dotNumber / dotRows;
//   var dotPosStepX = Math.round(screenW / dotColumns);
//   var dotPosStepY = Math.round(screenH / dotRows);
//   dotRows = Math.round(dotRows);
//   dotColumns = Math.round(dotColumns);
//   console.log('--- calc done');
//
//
//
//
//   for (i = 0, j = 0, k = 0; i < dotNumber; i++, k++) {
//     if (i % dotColumns === 0) {
//       j++;
//       k = 0;
//     }
//
//     dots[i] = {};
//     dots[i].distances = [];
//     dots[i].el = dotMatrix.cloneNode(false);
//     dots[i].X = k * dotPosStepX + dotPosStepX / 2;
//     dots[i].X += Math.floor((Math.random() * dotRandomMax) + 1 - dotRandomMax / 2);
//     dots[i].Y = j * dotPosStepY - dotPosStepY / 2;
//     dots[i].Y += Math.floor((Math.random() * dotRandomMax) + 1 - dotRandomMax / 2);
//     dots[i].r = 1;
//     dots[i].lines = [];
//     dots[i].el.setAttribute('cx', dots[i].X);
//     dots[i].el.setAttribute('cy', dots[i].Y);
//     dots[i].el.setAttribute('r', dots[i].r);
//
//     svg.appendChild(dots[i].el);
//
//     for(l=0;l<lineNumber;l++) {
//       dots[i].lines[l] = {};
//       dots[i].lines[l].el = lineMatrix.cloneNode(false);
//       dots[i].lines[l].X1 = dots[i].X;
//       dots[i].lines[l].Y1 = dots[i].Y;
//       dots[i].lines[l].X2 = dots[i].X;
//       dots[i].lines[l].Y2 = dots[i].Y;
//       dots[i].lines[l].el.setAttribute('x1', dots[i].lines[l].X1);
//       dots[i].lines[l].el.setAttribute('y1', dots[i].lines[l].Y1);
//       svg.appendChild(dots[i].lines[l].el);
//     }
//   }
//   console.log('--- dots positioned');
//
// }
//
// function destroy(){
//
//   while (svg.firstChild) {
//     svg.removeChild(svg.firstChild);
// }
//   dots.length = 0;
//   lines.length = 0;
//   console.log('--- destroying')
// }
//
// init();
//
// //////////////////////////////////////// update dots and lines position
//
//
//
//
//
// function dotUpdate() {
//   for (i=0;i<dotNumber;i++) {
//     dots[i].el.setAttribute('cx', dots[i].X);
//     dots[i].el.setAttribute('cy', dots[i].Y);
//     dots[i].el.setAttribute('r', dots[i].r);
//     for(l=0;l<lineNumber;l++) {
//       dots[i].lines[l].el.setAttribute('x1',dots[i].lines[l].X1);
//       dots[i].lines[l].el.setAttribute('y1',dots[i].lines[l].Y1);
//       dots[i].lines[l].el.setAttribute('x2',dots[i].lines[l].X2);
//       dots[i].lines[l].el.setAttribute('y2',dots[i].lines[l].Y2);
//     }
//   }
// }
//
//
//
//
//
// //////////////////////////////////////// helpers
//
//
//
//
//
// function getDistance(obj1, obj2) {
//   return Math.floor(Math.sqrt(Math.pow((obj1.X - obj2.X), 2) + Math.pow((obj1.Y - obj2.Y), 2)));
// }
//
// function Comparator(a, b) {
//    if (a[1] < b[1]) return -1;
//    if (a[1] > b[1]) return 1;
//    return 0;
//  }
//
//
//
//
//
// //////////////////////////////////////// movement function
//
//
//
//
//
// function moveDots(){
//   for (i=0;i<dotNumber;i++) {
//     dots[i].X += Math.floor((Math.random() * 5)  - 2);
//     dots[i].Y += Math.floor((Math.random() * 5)  - 2);
//     for (j=0;j<dotNumber;j++) {
//       dots[i].distances[j] = [j , getDistance(dots[i], dots[j])];
//     }
//     dots[i].distances = dots[i].distances.sort(Comparator);
//      for(k=0;k<lineNumber;k++) {
//         dots[i].lines[k].X1 = dots[i].X;
//         dots[i].lines[k].Y1 = dots[i].Y;
//         dots[i].lines[k].X2 = dots[dots[i].distances[k][0]].X;
//         dots[i].lines[k].Y2 = dots[dots[i].distances[k][0]].Y;
//     }
//   }
//   dotUpdate();
// }
//
//
//
//
//
// //////////////////////////////////////// mouse interaction function
//
//
//
//
// function mouseInteraction() {
//   if(mouseMoving) {
//
//     mouse.X = mouseX;
//     mouse.Y = mouseY;
//
//     for (i=0;i<dotNumber;i++) {
//       dots[i].r = 1;
//       mouse.distances[i] = [i, getDistance(mouse, dots[i])];
//     }
//     mouse.distances = mouse.distances.sort(Comparator);
//
//     for(j=0;j<mouse.power;j++) {
//
//       var maxDist = mouse.distances[mouse.power-1][1];
//       var thisDist = mouse.distances[j][1];
//       dots[mouse.distances[j][0]].r = 2;
//
//       if(mouseX >= dots[mouse.distances[j][0]].X) {
//         dots[mouse.distances[j][0]].X -= (maxDist - thisDist)/15;
//       } else {
//         dots[mouse.distances[j][0]].X += (maxDist - thisDist)/15;
//       }
//       if(mouseY >= dots[mouse.distances[j][0]].Y) {
//         dots[mouse.distances[j][0]].Y -= (maxDist - thisDist)/15;
//       } else {
//         dots[mouse.distances[j][0]].Y += (maxDist - thisDist)/15;
//       }
//
//     }
//
//     mouseMoving = false;
//   }
// }
//
//
//
//
//
// //////////////////////////////////////// listeners
//
//
//
//
//
// var initInterval = setInterval(function(){
//   moveDots();
//   mouseInteraction();
// }, 20);
//
//
// svg.addEventListener('mousemove', function(e){
//   mouseMoving = true;
//   mouseX = e.pageX;
//   mouseY = e.pageY - document.getElementById("portfolio").offsetTop;
// });
//
// window.addEventListener('resize', function(){
//   destroy();
//   init();
// });
//
