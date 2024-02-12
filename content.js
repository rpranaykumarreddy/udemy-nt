console.log('Pranay Content3.js');
function cal(novid, start) {
    let par, arrayOfVideos, currentLecture;
     par = document.querySelectorAll(".ud-accordion-panel-toggler");
     arrayOfVideos=[];
    for (let i = 0; i < par.length; i++) {
        let lectureStatus = par[i].querySelectorAll('div[data-purpose="section-duration"]')[0].innerText;
        console.log(lectureStatus);
        arrayOfVideos.push(parseDuration(lectureStatus));
    }
    console.log(arrayOfVideos);
    console.log(novid);
    if(novid==0){
        let totalMins=0;
        arrayOfVideos.forEach((element,index) => {
            if(index<start) return;
            let avgMins= element[2]/element[1];
            totalMins+=(avgMins*(element[1]-element[0]));
        });
        return speedString(1, totalMins)+speedString(1.5, totalMins) + speedString(2, totalMins) + speedString(2.5, totalMins) + speedString(3, totalMins);
    }else{
        let totalMins=0;
        let currentLecture = start;
        while(novid>0 && currentLecture<arrayOfVideos.length){
            let avgMins= arrayOfVideos[currentLecture][2]/arrayOfVideos[currentLecture][1];
            let need= (arrayOfVideos[currentLecture][1]-arrayOfVideos[currentLecture][0]);
            need= need>novid?novid:need;
            totalMins+=(avgMins*need);
            novid-=need;
            currentLecture++;
        }
        console.log(totalMins,currentLecture);
        return speedString(1, totalMins)+speedString(1.5, totalMins) + speedString(2, totalMins) + speedString(2.5, totalMins) + speedString(3, totalMins);
    }
}

function speedString(speed, totalMins){
    let temp, hr, min;
    totalMins = totalMins/speed;
    hr = Math.floor(totalMins / 60);
    min = Math.floor(totalMins % 60);
    temp = speed + "x: " + hr + " : " + min+"\n";
    return temp;
}

function parseDuration(text){
    const regex = /(\d+) \/ (\d+) \| (\d+hr\s?)?(\d+min)?\n/;
    const matches = regex.exec(text);

    console.log([text,matches]);
    if (matches) {
        // Extracted information
        const doneVideos = Number(matches[1]);
        const totalVideos = Number(matches[2]);
        console.log(matches);
        const hrTotal = matches[3]?Number(matches[3].replace("hr", "")) : 0;
        const minTotal = matches[4]?Number(matches[4].replace("min", "")) :0;
        console.log("Done Videos:", doneVideos);
        console.log("Left Videos:", totalVideos);
        console.log("Total Duration:", hrTotal*60 + minTotal);
        return ([doneVideos, totalVideos, hrTotal*60 + minTotal]);
    } else {
        return ([null, null, null]);
    }
}

document.addEventListener('keydown', (event) => {
    var x = event.key; if (x == "`") {
        let start = prompt("section to start with (1-index)", 1);
        let inp = prompt("no of next videos", 0);
        alert("Hey Pranay\nTime to complete this Udemy Module is:\n" + cal(inp, start-1));
    }
}, false);