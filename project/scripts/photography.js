const membersFiles = "/wdd131/project/data/members.json";
async function getMembersFile() {
    const response = await fetch(membersFiles);
    const data = await response.json();
    selectMember(data.members);
    displayMembersWork(data.members);
}
const section = document.querySelector("#populate-image");
const displayMembersWork = (data) => {
    document.querySelector("#populate-image").innerHTML = "";
    const memberArray = document.querySelectorAll("div a");
    memberArray.forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            if (event.type === "click") {
                document.querySelector("#populate-image").innerHTML = "";
                const studentId = anchor.id;
                data.forEach(member => {
                    if (studentId === member.memberId) {
                        const photos = member.gallery;
                        photos.forEach(photo => {
                            const p = document.createElement("p");
                            const h3 = document.createElement("h3");
                            const image = document.createElement("img");
                            const div = document.createElement("div");

                            h3.textContent = `${photo.title}`;
                            p.textContent = `${photo.description}`;
                            image.setAttribute("src", `${photo.image}`);
                            image.setAttribute("alt", `${photo.description}`);
                            image.setAttribute("loading", "lazy");
                            image.setAttribute("width", "250px");
                            image.setAttribute("class", "focused");
                            image.setAttribute("height", "250px");
                            div.appendChild(h3);
                            div.appendChild(p);
                            div.appendChild(image);
                            section.appendChild(div);
                        });
                    }
                });
            }
        });
    });
}
const personal = document.getElementById("personal-gallery");
const selectMember = (memberList) => {
    memberList.forEach(member => {
        const name = `${member.fname} ${member.lname}`;
        const identity = `${member.memberId}`;
        const anchor = document.createElement("a");
        anchor.setAttribute("href", "#");
        anchor.setAttribute("class", "anchor");
        anchor.setAttribute("id", identity);
        anchor.innerHTML = name;
        personal.appendChild(anchor);
    });
}
const footDiv = () => {
    const division = document.querySelector(".socials");
    const anchorage = document.createElement("a");
    anchorage.textContent = "➤Media";
    anchorage.classList.add("anchorage");
    anchorage.setAttribute("href", "../homepage-links/social-media.html");
    division.append(anchorage);
}
const learningSections = function (){
    const navLinks = document.querySelectorAll("#nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const ident = `${link.id}`;
            console.log(ident);
            const targetedId = link.dataset.erection;
            const elementId = document.querySelector(targetedId);
            if (elementId) {
            elementId.scrollIntoView({ behavior: "smooth" });
            } else {
            console.error("Section not found:", elementId);
            }
        });
    })
}
const rulesAndRegulations = function (){
    const navAnchor = document.querySelectorAll("#links-div a");
    navAnchor.forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            const ident = `${anchor.id}`;
            console.log(ident);
            const targetIdentity = anchor.dataset.watch;
            console.log(targetIdentity);
            const elementId = document.querySelector(targetIdentity);
            if (elementId) {
                elementId.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error("Section not found:", elementId);
            }
        })
    })
}

learningSections();
rulesAndRegulations();
footDiv();
getMembersFile();