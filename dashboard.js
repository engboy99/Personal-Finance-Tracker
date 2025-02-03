const chart= document.querySelector("#chart").getContext('2d');

new Chart(chart, {
    type: 'line',
    data: {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','sep','oct','Nov','Dec'],
    
    datasets: [
        {
            label: 'BTC',
            data: [120,250,120,41,12,45,785,41,52,63,45,14],
            borderColor: 'red',
            borderwidth:2
        },

        {
            label: 'ETH',
            data: [120,250,120,410,12,450,785,41,52,63,45,14],
            borderColor: 'blue',
            borderwidth:2
        }

    ]
    
    },
    options :{
        responsive: true
    }
   
})