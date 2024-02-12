
text1 = "11 / 10 | 41min\n10 of 10 lectures completed41min";
text2= "12 / 25 | 1hr 42min\n25 of 25 lectures completed1hr 42min"
text3= "13 / 25 | 1hr\n25 of 25 lectures completed1hr 42min"
const regex = /(\d+) \/ (\d+) \| (\d+hr\s?)?(\d+min)?\n/;
    const matches = regex.exec(text3);
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
        console.log([doneVideos, totalVideos, hrTotal*60 + minTotal]);
    } else {
        console.log([null, null, null]);
    }