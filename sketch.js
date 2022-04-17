//Data Jenis Kelamin//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLLGBs3PHjiXh2BCxT8RhPLjBBPqBSgiUDkr-J3LFtHwu8Y-WVSkY-4WJP-eNtC0Q2leMF6drkNLp/pub?gid=0&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  jeniskelaminChartline(object);
  
  
});
function jeniskelaminChartline(dataJenisKelamin) {
  const label = dataJenisKelamin.map((value) => value["JenisKelamin"]);

  const data = {
    labels: label,
    datasets: [
      {
      label: 'Data Jenis Kelamin',            
      data: dataJenisKelamin.map((value) => value["Jumlah"]),
        fill: false,
        backgroundColor : [
          "rgb(54, 162, 235)",
          "rgba(255, 159, 64)"
        ],
        borderColor: [
          "rgb(54, 162, 235)",
          "rgba(255, 159, 64)"
        ]
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
     
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const jeniskelaminChartline = new Chart(document.getElementById("jk").getContext('2d'),
    config
  );
}
//Akhir Data Jenis Kelamin//

//Data Usia Penduduk//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLLGBs3PHjiXh2BCxT8RhPLjBBPqBSgiUDkr-J3LFtHwu8Y-WVSkY-4WJP-eNtC0Q2leMF6drkNLp/pub?gid=439772999&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  usiapendudukChartline(object);
  
  
});
function usiapendudukChartline(dataUsiaPenduduk) {
  const label = dataUsiaPenduduk.map((value) => value["Usia"]);

  const data = {
    labels: label,
    datasets: [
      {
        label:'Usia Penduduk',
        data: dataUsiaPenduduk.map((value) => value["Jumlah"]),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
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
        hoverOffset: 3,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
    
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("UsiaPenduduk").getContext('2d'),
    config
  );
}
//Akhir Data Usia Penduduk//

//Data Pendidikan Penduduk//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLLGBs3PHjiXh2BCxT8RhPLjBBPqBSgiUDkr-J3LFtHwu8Y-WVSkY-4WJP-eNtC0Q2leMF6drkNLp/pub?gid=52677706&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  pendidikanpendudukChartpolar(object);
  
  
});
function pendidikanpendudukChartpolar(dataPendidikanPenduduk) {
  const label = dataPendidikanPenduduk.map((value) => value["Pendidikan"]);

  const data = {
    labels: label,
    datasets: [
      {
        label:'Data Pendidikan Penduduk',
        data: dataPendidikanPenduduk.map((value) => value["Jumlah"]),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
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
        hoverOffset: 3,
      },
    ],
  };

  const config = {
    type: 'polarArea',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
     
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const pieChart = new Chart(document.getElementById("PendidikanPenduduk").getContext('2d'),
    config
  );
}
//Akhir Data Pendidikan Penduduk//

//Data Pekerjaan Penduduk//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLLGBs3PHjiXh2BCxT8RhPLjBBPqBSgiUDkr-J3LFtHwu8Y-WVSkY-4WJP-eNtC0Q2leMF6drkNLp/pub?gid=1313959464&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  pekerjaanpendudukChartpolar(object);
  
  
});
function pekerjaanpendudukChartpolar(dataPekerjaanPenduduk) {
  const label = dataPekerjaanPenduduk.map((value) => value["Pekerjaan"]);

  const data = {
    labels: label,
    datasets: [
      {
        label:'Data Pekerjaan Penduduk',
        data: dataPekerjaanPenduduk.map((value) => value["Jumlah"]),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
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
        hoverOffset: 3,
      },
    ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
     
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const pieChart = new Chart(document.getElementById("PekerjaanPenduduk").getContext('2d'),
    config
  );
}
//Akhir Data Pekerjaan Penduduk//

//Data Penganut Agama//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSOcuPLAJCEi9Blg9NcY5Hxj1FnRcYGDiahW1EgN2nGXHTkbovvB5kiwF1ILSlP2TH90NDwVplao2/pub?gid=0&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  penganutagamaChartpie(object);
  
  
});
function penganutagamaChartpie(dataPenganutAgama) {
  const label = dataPenganutAgama.map((value) => value["data"]);

  const data = {
    labels: label,
    datasets: [
      {
        data: dataPenganutAgama.map((value) => value["jumlah"]),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
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
        hoverOffset: 3,
      },
    ],
  };

  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
     
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const pieChart = new Chart(document.getElementById("PenganutAgama").getContext('2d'),
    config
  );
}
//Akhir Data Penganut Agama//

//Data Kepadatan Penduduk//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSOcuPLAJCEi9Blg9NcY5Hxj1FnRcYGDiahW1EgN2nGXHTkbovvB5kiwF1ILSlP2TH90NDwVplao2/pub?gid=0&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  kepadatanpendudukChartline(object);
  
  
});
function kepadatanpendudukChartline(dataKepadatanPenduduk) {
  const label = dataKepadatanPenduduk.map((value) => value["data"]);

  const data = {
    labels: label,
    datasets: [
      {
      label: 'Pendidikan',            
      data: dataKepadatanPenduduk.map((value) => value["jumlah"]),
        fill: false,
        backgroundColor : [
          "rgb(54, 162, 235)",
        ],
        borderColor: [
          "rgb(54, 162, 235)",
        ]
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
    
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("KepadatanPenduduk").getContext('2d'),
    config
  );
}
//Akhir Data Kepadatan