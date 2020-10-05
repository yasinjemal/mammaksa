// Get Quotes from API
async function getQuote(){
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{

    } catch(error){
        console.log('whoops mammaaksi hin jiru', error);
    }




}
// on load
getQuote();
const tl = gsap.timeline({defaults: {duration: 3, ease: "none"}, repeat: -1, repeatDelay: 1})
.to(".scrollbar", {yPercent: 384})
.to(".content", {y: -200}, 0)
.to(".focus", {y: -400}, 0)