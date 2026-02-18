$(document).ready(function () {
  //Rich Text Editor
  const toolbarOptions = [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: ["small", false, "large", "huge"] }],

    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    ["table"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    ["clean"],
  ];
  const quill = new Quill("#editor", {
    theme: "snow",
    modules: {
      table: true,
      toolbar: toolbarOptions,
    },
  });
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Confetti Button
  $(".confetti").click(function (e) {
    party.confetti(this, {
      count: party.variation.range(10, 40),
    });
  });

  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Folder tree
  $(".folder").each(function () {
    var folder = $(this);
    if (folder.hasClass("close")) {
      folder.children("span").before('<i class="arrow close"></i>');
    } else {
      folder.children("span").before('<i class="arrow"></i>');
    }
  });

  $(".folder")
    .children("span")
    .click(function (e) {
      // $(this)
      //   .parent()
      //   .siblings()
      //   .addClass("close")
      //   .children(".child")
      //   .addClass("close")
      //   .children('.folder')
      //   .addClass('close')
      // $(this).siblings('.child').find('.arrow').addClass('close')
      // $(this)
      //   .parent()
      //   .siblings()
      //   .addClass("close")
      //   .children(".arrow")
      //   .addClass("close");
      // $(this).siblings(".arrow").toggleClass("close");
      // $(this)
      //   .parent()
      //   .toggleClass("close")
      //   .children(".child")
      //   .toggleClass("close")
      //   .children(".folder")
      //   .addClass("close")
      //   .children(".child")
      //   .addClass("close");
      // $(this).parents(".tree-root").find("span").removeClass("select");
      $(this).toggleClass("select");
      if ($(this).hasClass("select")) {
        $(this).parent().removeClass("close");
        $(this)
          .siblings()
          .removeClass("close")
          .find(".child")
          .children(".folder")
          .addClass("close");
        $(this).parent().siblings().find(".select").removeClass("select");
        $(this)
          .parent()
          .siblings()
          .children("span")
          .siblings()
          .addClass("close");
      } else if (!$(this).hasClass("select")) {
        $(this).siblings().addClass("close");
        $(this).parent().siblings().find(".select").removeClass("select");
        $(this).parent().addClass("close");
        $(this)
          .siblings(".child")
          .find(".folder")
          .addClass("close")
          .children(".child")
          .addClass("close")
          .siblings(".arrow")
          .addClass("close");
        $(this).siblings(".child").find(".select").removeClass("select");
      }
    });

  $(".folder")
    .children(".arrow")
    .click(function (e) {
      //     $(this)
      //       .parent()
      //       .siblings()
      //       .addClass("close")
      //       .children(".child")
      //       .addClass("close");
      //       $(this)
      //       .parent()
      //       .siblings()
      //       .addClass("close")
      //       .children(".arrow")
      //       .addClass("close");
      //     $(this).toggleClass("close");
      //     $(this)
      //       .parent()
      //       .toggleClass("close")
      //       .children(".child")
      //       .toggleClass("close")
      //       .children(".folder")
      //       .addClass("close")
      //       .children(".child")
      //       .addClass("close");
      //     $(this).parents(".tree-root").find("span").removeClass("select");

      //     $(this).siblings("span").toggleClass("select");
      let span = $(this).siblings('span');
      span.toggleClass("select");
      if (span.hasClass("select")) {
        span.parent().removeClass("close");
        span
          .siblings()
          .removeClass("close")
          .find(".child")
          .children(".folder")
          .addClass("close");
        span.parent().siblings().find(".select").removeClass("select");
        span
          .parent()
          .siblings()
          .children("span")
          .siblings()
          .addClass("close");
      } else if (!span.hasClass("select")) {
        span.siblings().addClass("close");
        span.parent().siblings().find(".select").removeClass("select");
        span.parent().addClass("close");
        span
          .siblings(".child")
          .find(".folder")
          .addClass("close")
          .children(".child")
          .addClass("close")
          .siblings(".arrow")
          .addClass("close");
        span.siblings(".child").find(".select").removeClass("select");
      }
    });

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Tabs
  $("#tabs2").scrollTabs();

  var tabId = $(".tab_selected").index();

  $("#content .tab-content").hide();

  $("#content .tab-content").eq(0).show();

  $(".tab").click(function () {
    tabId = $(".tab_selected").index();
    if (tabId == 0) {
      tabId = 0;
    } else {
      tabId = tabId - 1;
    }
    $("#content .tab-content").hide();
    $("#content .tab-content").eq(tabId).show();
  });

  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Date Range Picker
  flatpickr("#startDate", {
    plugins: [new rangePlugin({ input: "#endDate" })],
    dateFormat: "d-M-Y",
  });

  flatpickr("#dateRange", {
    showMonths: 2,
    dateFormat: "d-M-Y",
    mode: "range",
  });

  $("#dateRangePicker").daterangepicker(
    {
      startDate: "02/05/2026",
      endDate: "02/11/2026",
      buttonClasses: "btn",
      cancelClass: "btn-secondary",
    },
    function (start, end, label) {
      console.log(
        "New date range selected: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD") +
          " (predefined range: " +
          label +
          ")",
      );
    },
  );
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Multi Pick
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  $("#multiPick").multiPick({
    limit: 5,
    search: true,
  });
  $("#select").selectivity({
    multiple: true,
    placeholder: "Select Country",
    items: countryList,
  });
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // alert
  $(".alert").hide();

  $(".close").click(function (e) {
    $(this).parents(".alert").hide();
    $(this).parents(".modal-box").hide();
  });

  $(".call-alert").click(function (e) {
    var type = $(this).data("type");

    var message = $(this).data("message");

    $(".alert." + type + "-alert")
      .appendTo(".alert-display-area")
      .find(".message")
      .text(message);

    $(".alert." + type + "-alert")
      .fadeIn()
      .delay(2000)
      .fadeOut();
  });

  // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Charts
  const labels2 = ["Q1 (Winter)", "Q2 (Spring)", "Q3 (Summer)", "Q4 (Autumn)"];
  const labels = [
    "jan",
    "feb",
    "march",
    "apr",
    "may",
    "jun",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };
  const data2 = {
    labels: labels2,
    datasets: [
      {
        label: "Revenue Share",
        data: [2500, 3200, 4500, 1800],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(255, 99, 132, 0.7)",
        ],
        hoverOffset: 20,
      },
    ],
  };
  const data3 = {
    labels: labels2,
    datasets: [
      {
        label: "Revenue Share",
        data: [2500, 3200, 4500, 1800],
        fill: false,
        borderColor: "rgba(255, 206, 86, 0.7)",
        tension: 0.1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  const config2 = {
    type: "pie",
    data: data2,
  };
  const config3 = {
    type: "doughnut",
    data: data2,
  };
  const config4 = {
    type: "line",
    data: data3,
  };

  const bar = $("#bar")[0];
  const pie = $("#pie")[0];
  const doughnut = $("#doughnut")[0];
  const line = $("#line")[0];

  const chart = new Chart(bar, config);
  const chart2 = new Chart(pie, config2);
  const chart3 = new Chart(doughnut, config3);
  const chart4 = new Chart(line, config4);

  // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //calender
  $("#container").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay",
    },

    navLinks: true,
    editable: true,
    eventLimit: true,
    events: [
      {
        title: "All Day Event",
        start: "2019-01-01",
      },
      {
        title: "Long Event",
        start: "2019-01-07",
        end: "2019-01-10",
      },
      {
        id: 999,
        title: "Repeating Event",
        start: "2019-01-09T16:00:00",
      },
      {
        id: 999,
        title: "Repeating Event",
        start: "2019-01-16T16:00:00",
      },
      {
        title: "Conference",
        start: "2019-01-11",
        end: "2019-01-13",
      },
      {
        title: "Meeting",
        start: "2019-01-12T10:30:00",
        end: "2019-01-12T12:30:00",
      },
      {
        title: "Lunch",
        start: "2019-01-12T12:00:00",
      },
      {
        title: "Meeting",
        start: "2019-01-12T14:30:00",
      },
      {
        title: "Happy Hour",
        start: "2019-01-12T17:30:00",
      },
      {
        title: "Dinner",
        start: "2019-01-12T20:00:00",
      },
      {
        title: "Birthday Party",
        start: "2019-01-13T07:00:00",
      },
      {
        title: "Click for Google",
        url: "http://google.com/",
        start: "2019-01-28",
      },
    ],
  });
  // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
});

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Modalbox
$(".modal-box").hide();

$(".overlay").hide();

function callModel(header, message) {
  $(".modal-box").find(".modal-header").text(header);

  $(".modal-box").find(".message").text(message);

  $(".overlay").fadeIn();

  $("body").addClass("no-scroll");

  $(".modal-box").appendTo(".overlay").fadeIn(1000);
}

$(".close-modal").click((e) => {
  $(".overlay").fadeOut();
  $("body").removeClass("no-scroll");
});
