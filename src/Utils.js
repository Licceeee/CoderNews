
    const convertDate = (date) => {
        const year = date.substring(0, 4);
        const month = date.substring(5, 7);
        const day = date.substring(8, 10);
        return `${day}.${month}.${year}`

    }
    
    const convertTime = (date) => {
        return date.substring(11, 16)
    }


export {convertDate, convertTime};