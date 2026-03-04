let currentTab="all";
const tabActive = ["bg-orange-500","border-orange-200" ,"text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-200"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");
const emptyState = document.getElementById("empty-state");

function switchTab(tab){

    const tabs = ["all", "interview", "rejected"];

    for(const t of tabs){
        const tabName = document.getElementById("tab-"+t);
        //console.log(tabName);
        if(t === tab){
            //currentTab = t;
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }

    const pages = [allContainer,interviewContainer,rejectContainer];

    for (const section of pages) {
        section.classList.add("hidden");
    }

    if(tab === "all"){
        allContainer.classList.remove("hidden");
    }
    else if(tab === "interview"){
        interviewContainer.classList.remove("hidden");
    }else{
        rejectContainer.classList.remove("hidden");
    }
}

const totalstat = document.getElementById("stat-total");
const interviewstat = document.getElementById("stat-interview");
const rejectstat = document.getElementById("stat-reject");

//totalstat.innerText = allContainer.children.length;

switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function(event){
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector(".status");
    const parent = card.parentNode;

    if(clickedElement.classList.contains("interview")){
        interviewContainer.appendChild(card);
        status.innerText = "Interviewed";
        updateStat();
    }
    if(clickedElement.classList.contains("rejected")){
        rejectContainer.appendChild(card);
        status.innerText = "Rejected";
        updateStat();
    }
    if(clickedElement.classList.contains("delete")){
        parent.removeChild(card);
        updateStat();
    }
});

function updateStat(){
    totalstat.innerText = allContainer.children.length;
    interviewstat.innerText = interviewContainer.children.length;
    rejectstat.innerText = rejectContainer.children.length;
}

updateStat();









