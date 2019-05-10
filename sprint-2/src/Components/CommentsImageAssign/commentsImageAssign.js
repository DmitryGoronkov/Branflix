
const commentsImageAssign = (name) =>{
        let url = 'Mohan-muruge.jpg';
        if (name === "Micheal Lyons"){
            url = "Michael.jpg"
        }
        if (name === "Gary Wong"){
            url = "Gary.jpg"
        }
        if (name === "Theodore Duncan"){
            url = "Teo.jpg"
        }
        return url;
}
export default commentsImageAssign;