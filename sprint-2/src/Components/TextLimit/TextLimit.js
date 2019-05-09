
const textLimit = (text) =>{
        if (window.innerWidth < 768) {
            if (text.length >= 32) {
                text = text.substring(0,(32 + 1))+"...";
            }
        }
        
        return text
}
export default textLimit;