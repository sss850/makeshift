let people=[];
function addPerson(){
    const name=document.getElementById("name").value;
    const max=Number(document.getElementById("max").value);
    const checkboxes=document.querySelectorAll("input[type=checkbox]:checked");

    let days=[];
    checkboxes.forEach(cb=>days.push(cb.value));
    people.push({name:name,days:days,max:max,assigned:0});
    console.log(people);
}
function makeShift(){
    let schedule={月:null,火:null,水:null,木:null,金:null,土:null,日:null};
    people.forEach(p=>p.assigned=0);
    people.sort((a,b)=>{
        return a.assigned-b.assigned||Math.random()-0.5;
    });
    people.forEach(person=>{
        person.days.forEach(day=>{
            if (!schedule[day]&& person.assigned<person.max){
                schedule[day]=person.name;
                person.assigned++;
            }
        });
    });
    let result="<table border='1'>";
    result+="<tr><th>日</th><th>担当</th></tr>";

    for (let day in schedule){
        result+="<tr><td>"+day+"</td><td>"+schedule[day]+"</td></tr>";
    }
    result+="</table>";
    document.getElementById("result").innerHTML=result;
    
}

