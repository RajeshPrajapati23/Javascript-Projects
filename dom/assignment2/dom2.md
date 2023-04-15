# select lists using querySelectorAll and it returns node list so we have to store node lists into array

let slt = document.querySelectorAll(".as-imagegrid-item span")

function items(){ return Array.prototype.map.call(slt, (list) => list.innerText)}

items() 
(7) ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']