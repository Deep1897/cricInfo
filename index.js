let currentPosition = 0;

let scrollAmmount = 320;

const scont = document.getElementById("story_conatiner");
const hscroll = document.getElementsByClassName("horizent_scroll");

left_btn.style.opacity = "0";
let maxscroll = -scont.offsetWidth + hscroll.offsetWidth;

function scrollfun(val) {
    currentPosition += (val * scrollAmmount);

    if (currentPosition >= 0) {
        currentPosition = 0;
        left_btn.style.opacity = "0";

    } else {
        left_btn.style.opacity = "1";

    }

    if (currentPosition <= maxscroll) {
        currentPosition = maxscroll;
        right_btn.style.opacity = "0";
    } else {
        right_btn.style.opacity = "1";
    }
    scont.style.left = currentPosition + "px";


}










let data = [{
        time: "3:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
        des: "Day 1:Session 1:Sri Lanka choose bat.",
        run: "96/2",
        over: "20 over",
        match: "SRI Lanka vs PAk",
        name1: "S L",
        name2: "PAK"

    }, {
        time: "1:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
        des: "Match start in 3 hrs 10 mins.",
        run: "97/2",
        over: "20 over",
        match: "ENG VS SOUTH",
        name1: "ENGLAND",
        name2: "SOUTH AFRICA"

    }, {
        time: "12:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
        des: "Match yet to begin.",
        run: "121/2",
        over: "25 over",
        match: "WEST INDIS VS INDIA",
        name1: "WEST INDIS",
        name2: "INDIA"

    }, {
        time: "4:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
        des: "Day 1:Session 1:Sri Lanka choose bat.",
        run: "96/2",
        over: "20 over",
        match: "SRI Lanka vs PAk",
        name1: "S L",
        name2: "PAK"

    }, {
        time: "4:30 AM",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
        des: "Match start in 3 hrs 10 mins.",
        run: "97/2",
        over: "20 over",
        match: "ENG VS SOUTH",
        name1: "ENGLAND",
        name2: "SOUTH AFRICA"

    }, {
        time: "3:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
        des: "Match yet to begin.",
        run: "121/2",
        over: "25 over",
        match: "WEST INDIS VS INDIA",
        name1: "WEST INDIS",
        name2: "INDIA"

    }, {
        time: "1:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
        des: "Day 1:Session 1:Sri Lanka choose bat.",
        run: "96/2",
        over: "20 over",
        match: "SRI Lanka vs PAk",
        name1: "S L",
        name2: "PAK"

    }, {
        time: "1:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
        des: "Match start in 3 hrs 10 mins.",
        run: "97/2",
        over: "20 over",
        match: "ENG VS SOUTH",
        name1: "ENGLAND",
        name2: "SOUTH AFRICA"

    }, {
        time: "8:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
        des: "Match yet to begin.",
        run: "121/2",
        over: "25 over",
        match: "WEST INDIS VS INDIA",
        name1: "WEST INDIS",
        name2: "INDIA"

    }, {
        time: "6:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
        des: "Day 1:Session 1:Sri Lanka choose bat.",
        run: "96/2",
        over: "20 over",
        match: "SRI Lanka vs PAk",
        name1: "S L",
        name2: "PAK"

    }, {
        time: "2:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
        des: "Match start in 3 hrs 10 mins.",
        run: "97/2",
        over: "20 over",
        match: "ENG VS SOUTH",
        name1: "ENGLAND",
        name2: "SOUTH AFRICA"

    }, {
        time: "12:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
        des: "Match yet to begin.",
        run: "121/2",
        over: "25 over",
        match: "WEST INDIS VS INDIA",
        name1: "WEST INDIS",
        name2: "INDIA"

    }, {
        time: "3:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
        des: "Day 1:Session 1:Sri Lanka choose bat.",
        run: "96/2",
        over: "20 over",
        match: "SRI Lanka vs PAk",
        name1: "S L",
        name2: "PAK"

    }, {
        time: "1:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
        des: "Match start in 3 hrs 10 mins.",
        run: "97/2",
        over: "20 over",
        match: "ENG VS SOUTH",
        name1: "ENGLAND",
        name2: "SOUTH AFRICA"

    }, {
        time: "12:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
        des: "Match yet to begin.",
        run: "121/2",
        over: "25 over",
        match: "WEST INDIS VS INDIA",
        name1: "WEST INDIS",
        name2: "INDIA"

    }, {
        time: "4:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
        des: "Day 1:Session 1:Sri Lanka choose bat.",
        run: "96/2",
        over: "20 over",
        match: "SRI Lanka vs PAk",
        name1: "S L",
        name2: "PAK"

    }, {
        time: "4:30 AM",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
        des: "Match start in 3 hrs 10 mins.",
        run: "97/2",
        over: "20 over",
        match: "ENG VS SOUTH",
        name1: "ENGLAND",
        name2: "SOUTH AFRICA"

    }, {
        time: "3:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
        des: "Match yet to begin.",
        run: "121/2",
        over: "25 over",
        match: "WEST INDIS VS INDIA",
        name1: "WEST INDIS",
        name2: "INDIA"

    }, {
        time: "1:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
        des: "Day 1:Session 1:Sri Lanka choose bat.",
        run: "96/2",
        over: "20 over",
        match: "SRI Lanka vs PAk",
        name1: "S L",
        name2: "PAK"

    }, {
        time: "1:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
        des: "Match start in 3 hrs 10 mins.",
        run: "97/2",
        over: "20 over",
        match: "ENG VS SOUTH",
        name1: "ENGLAND",
        name2: "SOUTH AFRICA"

    }, {
        time: "8:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
        des: "Match yet to begin.",
        run: "121/2",
        over: "25 over",
        match: "WEST INDIS VS INDIA",
        name1: "WEST INDIS",
        name2: "INDIA"

    }, {
        time: "6:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
        des: "Day 1:Session 1:Sri Lanka choose bat.",
        run: "96/2",
        over: "20 over",
        match: "SRI Lanka vs PAk",
        name1: "S L",
        name2: "PAK"

    }, {
        time: "2:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
        des: "Match start in 3 hrs 10 mins.",
        run: "97/2",
        over: "20 over",
        match: "ENG VS SOUTH",
        name1: "ENGLAND",
        name2: "SOUTH AFRICA"

    }, {
        time: "12:30 pm",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
        des: "Match yet to begin.",
        run: "121/2",
        over: "25 over",
        match: "WEST INDIS VS INDIA",
        name1: "WEST INDIS",
        name2: "INDIA"

    },


]



function Append(data) {
    data.forEach(function(el) {
        var div = document.createElement("div");
        div.setAttribute("class", "appendbox");
        var time = document.createElement("p");
        time.innerText = el.time;
        var flagdiv1 = document.createElement("div");
        div.setAttribute("class", "flagdiv1");

        var img1 = document.createElement("img");
        img1.src = el.flag1
        var name1 = document.createElement("h5");
        name1.innerText = el.name1;

        flagdiv1.append(img1, name1);

        var flagdiv2 = document.createElement("div");
        div.setAttribute("class", "flagdiv2");

        var img2 = document.createElement("img");
        img2.src = el.flag2
        var name2 = document.createElement("h5");
        name2.innerText = el.name2;

        flagdiv2.append(img2, name2);

        var run = document.createElement("h5");
        run.innerText = el.run;

        var des = document.createElement("p");
        des.innerText = el.des;
        var br = document.createElement("br");

        div.append(time, flagdiv1, flagdiv2, run, des, br);
        document.getElementById("story_conatiner").append(div);


    })
}

Append(data);


var srilanka = data.filter(function(el) {
    return el.match == "SRI Lanka vs PAk";
})


document.getElementById("id1").addEventListener("click", function(event) {
    var story = document.getElementById("story_conatiner");
    story.innerHTML = null;

    Append(srilanka)
})

var west = data.filter(function(el) {
    return el.match == "ENG VS SOUTH";
})

document.getElementById("id2").addEventListener("click", function(event) {
    var story = document.getElementById("story_conatiner");
    story.innerHTML = null;

    Append(west)
})

var india = data.filter(function(el) {
    return el.match == "WEST INDIS VS INDIA";
})

document.getElementById("id3").addEventListener("click", function(event) {
    var story = document.getElementById("story_conatiner");
    story.innerHTML = null;

    Append(india)
});