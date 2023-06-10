const clickDis = document.querySelector('.click_dis');
const pos = document.querySelector('.set');
const date_d = document.querySelector('.date');
const daMoYe = document.querySelector('.daMoYe');
setInterval(Time, 10);

function Time(){
    let time = new Date();
    //Time show
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    hours = hours == 0 ? hours - 12 : hours > 12 ? hours = hours - 12 : hours; 
    let p = (hours >= 12) ? 'PM' : 'AM';

    //Dates show
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    
    //Calculating hours minutes second date 
    let h = hours < 10 ? '0' + hours : hours; 
    let m = minutes < 10 ? '0' + minutes : minutes; 
    let s = seconds < 10 ? '0' + seconds : seconds; 
    let d = date < 10 ? '0' + date : date; 
    let dA = `${days[day]} - ${months[month]} - ${year}`;
    //displaying 
    clickDis.innerHTML = `${h} : ${m} : ${s}`;
    pos.innerHTML = p;
    date_d.innerHTML = d;
    daMoYe.innerHTML = dA; 
}