
const timeConversion = (timestamp) =>{
        const timeToConvert = new Date(timestamp);
        const year = timeToConvert.getFullYear();
        let month = timeToConvert.getMonth() + 1;
        if (month < 10) {
            month = `0${month}`;
        }
        let day = timeToConvert.getDate();
        if (day < 10) {
            day = `0${day}`;
        }
        const convertedTime = `${month}/${day}/${year}`;
        return convertedTime;
}
export default timeConversion;