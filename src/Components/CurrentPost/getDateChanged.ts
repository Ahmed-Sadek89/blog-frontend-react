export const getDateChanged = (thisDate: string | undefined): string | undefined => {
    const currentDate = new Date();
    const postDate = new Date(thisDate || '')

    const isYearEqual = currentDate.getFullYear() === postDate.getFullYear()
    const isMonthEqual = currentDate.getMonth() === postDate.getMonth()
    const isDayEqual = currentDate.getDay() === postDate.getDay()
    const isHourEqual = currentDate.getHours() === postDate.getHours()
    const isMinEqual = currentDate.getMinutes() === postDate.getMinutes()
    const isSecEqual = currentDate.getSeconds() === postDate.getSeconds();
    const changeDateArray = [
        { 
            name: "years", 
            isEqual: isYearEqual, 
            posted: currentDate.getFullYear(), 
            now: postDate.getFullYear() 
        },
        { 
            name: "month", 
            isEqual: isMonthEqual, 
            posted: currentDate.getMonth() + 1, 
            now: postDate.getMonth() + 1 
        },
        { 
            name: "days", 
            isEqual: isDayEqual, 
            posted: currentDate.getDay() + 1, 
            now: postDate.getDay() + 1,
        },
        { 
            name: "hours", 
            isEqual: isHourEqual, 
            posted: currentDate.getHours() - 1, 
            now: postDate.getHours() - 1 
        },
        { 
            name: "minutes", 
            isEqual: isMinEqual, 
            posted: currentDate.getMinutes(), 
            now: postDate.getMinutes() 
        },
        { 
            name: "seconds", 
            isEqual: isSecEqual, 
            posted: currentDate.getSeconds(), 
            now: postDate.getSeconds() 
        },
    ]
    let payload = '';
    let timeName: string;
    let timeDiff: number
    for (let i = 0; i < changeDateArray.length; i++) {
        timeDiff = Math.abs(changeDateArray[i].now - changeDateArray[i].posted)
        timeName = timeDiff === 1 ? changeDateArray[i].name.slice(0, -1) :changeDateArray[i].name
        if (changeDateArray[i].isEqual === false) {
            payload = `posted from ${timeDiff} ${timeName} ago`;
            break;
        }
    }
    return payload
}