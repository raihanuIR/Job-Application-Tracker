let currentTab="all";
const tabActive = ["bg-[#3B82F6]","text-white"];
const tabInactive = ["bg-transparent", "text-[#64748B]", "border-[#F1F2F4]", "bg-white"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");
const emptyState = document.getElementById("empty-state");
const availableStat = document.getElementById("available");

function switchTab(tab){

    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;

    for(const t of tabs){
        const tabName = document.getElementById("tab-"+t);
        
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

    emptyState.classList.add("hidden");

    if(tab === "all"){
        allContainer.classList.remove("hidden");
        if(allContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    else if(tab === "interview"){
        interviewContainer.classList.remove("hidden");
        if(interviewContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }else{
        rejectContainer.classList.remove("hidden");
        if(rejectContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    updateStat();
}

const totalstat = document.getElementById("stat-total");
const interviewstat = document.getElementById("stat-interview");
const rejectstat = document.getElementById("stat-reject");

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

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected:rejectContainer.children.length,
    };

    totalstat.innerText = counts.all;
    interviewstat.innerText = counts.interview;
    rejectstat.innerText = counts.rejected;

    availableStat.innerText = counts[currentTab];
    if(counts[currentTab] < 1){
        emptyState.classList.remove("hidden");
    }else{
        emptyState.classList.add("hidden");
    }
}

updateStat();









