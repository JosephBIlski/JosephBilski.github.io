const projects = [
    {
        id: 'BioRobotics-Lab',
        title: 'Harvard BioRobotics Lab',
        images: [
            { src: 'BioRobotics Lab/springmeshprototype.png', caption: 'A spring mesh mechanism for jamming groups of fibers. This proof of concept demonstrates how the central mesh can toggle between jamming and unjamming fibers.' },
            { src: 'BioRobotics Lab/smawithpennies.png', caption: 'Shape Memory Alloy (Nitinol) coil actuators, with a penny for scale.' },
            { src: 'BioRobotics Lab/bendingtest.png', caption: 'Three point bending test on a group of mechanically jammed nylon fibers.' }
        ],
        shortDescription: `My work in the Harvard Biorobotics Lab focused on a mesh-based non-vacuum mechanism to actuate mechanical jamming in bundles of fibers. Mechanical jamming is a structural phenomena in which a collection of loosely constrained materials exhibit vastly increased stiffnesses if an external pressure is applied. 
        Normally, this is achieved through putting the materials(sheets, fibers, beads, etc) in a bag and applying a vacuum. However, bags and atmospheric pressure limitations lead to a variety of design constraints, so my research was to create a way to actuate jamming without vacuum! `,
        fullDescription: `
            <ul>
                <li>My work in the Harvard BioRobotics lab revolved around designing a novel mechanism to actuate mechanical jamming in collections of fibers without the use of vacuum pressure.</li>
                <li>The motivation behind the project was to separate the desirable quality of variable stiffness from mechanically jamming fibers together from the design constraints that vacuum pressure (the usual mechanism by which mechanical jamming is achieved) imposes.</li>
                <li>I utilized analytical models to determine relationships between the design parameters of the system and the expected performance, and utilized MATLAB to visualize these relationships as well as parse experimental data to evaluate model accuracy.</li>
                <li>I used an Instron machine as well as sensors connected to an Arduino to collect experimental data to inform design.</li>
                <li>The final design was a mesh that radially contracts with axial extension pretensioned by a compression spring, with shape memory alloy coil actuators to counteract the spring tension as needed. The final device works by switching between applying radial pressure to fibers in its passive, 'jammed' state where the mesh is tensioned by the spring, and no pressure in its actuated 'unjammed' state where the shape memory alloys relieve the compression spring tension.</li>
            </ul>
        `,
        detailsPage: 'project-details.html?id=BioRobotics-Lab'
    },
    {
        id: 'BioRobotics-Lab',
        title: 'Harvard BioRobotics Lab',
        images: [
            { src: 'BioRobotics Lab/springmeshprototype.png', caption: 'A spring mesh mechanism for jamming groups of fibers...' },
            { src: 'BioRobotics Lab/smawithpennies.png', caption: 'Shape Memory Alloy (Nitinol) coil actuators, with a penny for scale.' },
            { src: 'BioRobotics Lab/bendingtest.png', caption: 'Three point bending test on a group of mechanically jammed nylon fibers.' }
        ],
        shortDescription: `My work in the Harvard Biorobotics Lab focused on a mesh-based non-vacuum mechanism to actuate mechanical jamming in bundles of fibers...`,
        fullDescription: `
            <ul>
                <li>My work in the Harvard BioRobotics lab revolved around designing a novel mechanism to actuate mechanical jamming in collections of fibers without the use of vacuum pressure.</li>
                <li>The motivation behind the project was to separate the desirable quality of variable stiffness from mechanically jamming fibers together from the design constraints that vacuum pressure (the usual mechanism by which mechanical jamming is achieved) imposes.</li>
                <li>I utilized analytical models to determine relationships between the design parameters of the system and the expected performance, and utilized MATLAB to visualize these relationships as well as parse experimental data to evaluate model accuracy.</li>
                <li>I used an Instron machine as well as sensors connected to an Arduino to collect experimental data to inform design.</li>
                <li>The final design was a mesh that radially contracts with axial extension pretensioned by a compression spring, with shape memory alloy coil actuators to counteract the spring tension as needed. The final device works by switching between applying radial pressure to fibers in its passive, 'jammed' state where the mesh is tensioned by the spring, and no pressure in its actuated 'unjammed' state where the shape memory alloys relieve the compression spring tension.</li>
            </ul>
        `,
        detailsPage: 'project-details.html?id=BioRobotics-Lab'
    },
    // Add more projects here
];

function loadProjects() {
    const container = document.getElementById('projectContainer');
    projects.forEach((project, index) => {
        const projectElement = createProjectElement(project, index);
        container.appendChild(projectElement);
    });
}

function createProjectElement(project, index) {
    const projectDiv = document.createElement('div');
    projectDiv.className = `proj col${index % 2 + 1}`;
    projectDiv.innerHTML = `
        <div class="slideshow-container" id='${project.id}' data-slide="1">
            ${createSlides(project.images)}
            <span class="prev" onclick="plusSlides(-1, this)">&#10094;</span>
            <span class="next" onclick="plusSlides(1, this)">&#10095;</span>
        </div>
        <div class="desc">
            <h2>${project.title}</h2>
            <p>${project.shortDescription}
            <br><br>
            <a href="${project.detailsPage}">Read More</a></p>
        </div>
    `;
    return projectDiv;
}

function createSlides(images) {
    return images.map((image, index) => `
        <div class="mySlides fade">
            <div style="text-align:center" class="dots">
                ${images.map((_, i) => `<span class="dot" onclick="currentSlide(${i + 1}, this)"></span>`).join('')}
            </div>
            <div class="image">
                <img src="${image.src}">
            </div>
            <div class="text">${image.caption}</div>
        </div>
    `).join('');
}

function loadProjectDetails(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) {
        console.error('Project not found');
        return;
    }

    document.title = `${project.title} - Joseph Bilski's Portfolio`;
    document.querySelector('.titleText h2').textContent = project.title;

    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.id = project.id;
    slideshowContainer.innerHTML = createSlides(project.images) + `
        <span class="prev" onclick="plusSlides(-1, this)">&#10094;</span>
        <span class="next" onclick="plusSlides(1, this)">&#10095;</span>
    `;

    document.querySelector('.subdesc').innerHTML = project.fullDescription;

    initSlidesOnLoad();
}