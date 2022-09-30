let kodeHauzStaffs = [
    {
        name: 'Mkpafrang Lee', gender: 'Male', role: 'Web development', complexion: 'Light-skin'
    },
    {
        name: 'Sun Lee', gender: 'Male', role: 'Embedded Systems', complexion: 'Light-skin'
    },
    {
        name: 'Cynthia Orung', gender: 'Female', role: 'Cleaner', complexion: 'dark'
    },
    {
        name: 'St. James Patrick', gender: 'Male', role: 'Android', complexion: 'Chocolate'
    },
    {
        name: 'Okoye Chiamaka', gender: 'Female', role: 'Web development', complexion: 'Light-skin'
    },
    {
        name: 'Aniebiet Peters', gender: 'Female', role: 'Robotics', complexion: 'Light-skin'
    },
    {
        name: 'Hyecent Theophilus', gender: 'Male', role: 'Microsoft Excel', complexion: 'dark'
    },
]


let staffString = ""

kodeHauzStaffs.forEach((instructors) => {
    const {name, gender, role, complexion} = instructors;
    staffString += `
    <div class="staff-card">
         <h3>${name}</h3>
         <h3>${gender}</h3>
         <h3>${role}</h3>
         <h3>${complexion}</h3>
         </div>`;
         
    
});
document.querySelector('.card').innerHTML = staffString  // Design at the end






// Get Random numbers

let count = document.querySelector('#count')
function getRand(min, max) {
    let result = Math.floor(Math.random() * (max - min)) + min
    count.innerHTML = result
}



// Answer on Math Object

console.log(Math.pow(8, 3))





//Function to find the area of a circle

function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
}
let c = new circle(3);
console.log('Area =', c.area().toFixed(2));


//Function to solve quadratic equation

function solve(a,b,c){
    let result = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    let result2 = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    
    return result + "<br>" + result2;
}

// document.write( solve(1,1,-1) );
console.log(solve(1, 1, -1))


































































































