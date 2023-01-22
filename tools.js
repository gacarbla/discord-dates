function previsualizacion(time, format) {
    var timestamp = new Date(time)
    if (format.toLowerCase()!="r"){
        switch (format) {
            case "t": return `${timestamp.getHours()}:${timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`}`;; break;
            case "T": return `${timestamp.getHours()}:${timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`}:${timestamp.getSeconds() > 9 ? timestamp.getSeconds() : `0${timestamp.getSeconds()}`}`; break;
            case "d": return `${timestamp.getDate() > 9 ? timestamp.getDate() : `0${timestamp.getDate()}`}/${Math.floor(timestamp.getMonth() + 1) > 9 ? Math.floor(timestamp.getMonth() + 1) : `0${Math.floor(timestamp.getMonth() + 1)}`}/${timestamp.getFullYear()}`; break;
            case "D": return `${timestamp.getDate()} de ${meses[timestamp.getMonth()]} de ${timestamp.getFullYear()}`; break;
            case "f": return `${timestamp.getDate()} de ${meses[timestamp.getMonth()]} de ${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`}`; break;
            case "F": return `${semana[timestamp.getDay()]}, ${timestamp.getDate()} de ${meses[timestamp.getMonth()]} de ${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`}`; break;
        }
    } else {
        const diferencia = Math.floor((Date.now() - timestamp.getTime()) / 1000)
        if (diferencia == 0) { vista = `ahora` }
        else {
            var num = 0
            var format = ""
            num = Math.abs(diferencia)
            if (num < 60) { format = `${num == 1 ? `segundo` : `segundos`}` }
            else { num = Math.floor(num / 60)
                if (num < 60) { format = `${num == 1 ? `minuto` : `minutos`}` }
                else {num = Math.floor(num / 60)
                    if (num < 24) { format = `${num == 1 ? `hora` : `horas`}`}
                    else { num = Math.floor(num / 24)
                        if (num < 30) { format = `${num == 1 ? `día` : `días`}` }
                        else {num = Math.floor(num / 30); if (num < 12) { format = `${num == 1 ? `mes` : `meses`}`} else {num = Math.floor(num / 12);format = `${num == 1 ? `año` : `años`}` } }
                    }
                }
            }
            if (diferencia < 0) { return `en %%time%%`.replace("%%time%%", `${num} ${format}`) }
            else { return `hace %%time%%`.replace("%%time%%", `${num} ${format}`) }
        }
    }
}