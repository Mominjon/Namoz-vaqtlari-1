const tbodyElement = document.querySelector(`#tbody`)
async function getData() {
    navigator.geolocation.getCurrentPosition(async function(data) {
        const lat = data.coords.latitude
        const long = data.coords.longitude
        let linkElement = await fetch(`http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${long}&method=3&month=${new Date().getMonth()+ 1}&year=${new Date().getFullYear()}`)
        let json = await linkElement.json()
        await json.data.forEach(element => {
            console.log(element.date.gregorian.date)
            console.log(element.meta)
            console.table(element.timings)

            const tr = document.createElement(`tr`)
            const kun = document.createElement(`td`)
            const bomdod = document.createElement(`td`)
            const tong = document.createElement(`td`)
            const peshin = document.createElement(`td`)
            const asr = document.createElement(`td`)
            const shom = document.createElement(`td`)
            const xufton = document.createElement(`td`)

            kun.textContent = element.date.gregorian.date
            bomdod.textContent = element.timings.Fajr
            tong.textContent = element.timings.Sunrise
            peshin.textContent = element.timings.Dhuhr
            asr.textContent = element.timings.Asr
            shom.textContent = element.timings.Maghrib
            xufton.textContent = element.timings.Isha
            tr.appendChild(kun)
            tr.appendChild(bomdod)
            tr.appendChild(tong)
            tr.appendChild(peshin)
            tr.appendChild(asr)
            tr.appendChild(shom)
            tr.appendChild(xufton)
            tbodyElement.appendChild(tr)
        })

    })
}
getData()