const projects = [
    {
        id: 'Thesis',
        title: 'Undergraduate Thesis - Design of an Origami-Inspired Deployable Shelter',
        images: [
            { src: 'Thesis/ThesisOverview2.gif', caption: 'Shelter module folding into a deployed state from a flattened state using Rhino Grasshopper with the Crane extension as the primary design tool.' },
            { src: 'Thesis/Simulations.png', caption: 'A simplified finite element simulation of the full deployed shelter under gravity and wind loadings in Abaqus, as well as a simulation of the deployment torque using Solidworks Motion.' },
            { src: 'Thesis/Prototypes2.png', caption: 'Lasercut prototype of a shelter module in a flat and deployed state.' }
        ],
        shortDescription: `For my undergraduate thesis as a part of my mechanical engineering capstone, I created a design for a modular, origami-inspired, deployable shelter.
        <br> <br> The shelter is made up of four identical units that transition between a flat and deployed state. Each unit has only a single degree of freedom, allowing it to transition easily between its two states
        and ensuring that the structure becomes rigid when all four units are attached together.`,
        fullDescription: `My undergraduate thesis focused on the design of a modular, origami-inspired, deployable shelter for use in disaster areas.
        <br> <br> The concept for the shelter was to have 4 components, each having one degree of freedom, that could transition smoothly between a flat, transportable state, and an 
        upright, deployed state. To design such a module, <a href="https://dl.acm.org/doi/10.1145/3576856"> Crane</a>, an add-on for the Rhino Grasshopper CAD software, was used.
        Through several rounds of iteration, a folding pattern was found and optimized to meet the necessary requirements for the final shelter dimensions.

        <br> <br> The folding pattern and physical validation was done by laser-cutting scaled laminate prototypes that folded between each state and contained only one degree of freedom.

        <br> <br> Computational evaluation was also preformed using Abaqus CAE and Solidworks motion. In Abaqus, a simplified model of the assembled shelter was created and evaluated under self-weight and wind loadings.
        In Solidworks Motion, a model of a shelter module was made and the torque necessary to transition the shelter from its flat state into its deployed state was evaluated.

        <br> <br> The end result was a successful proof of concept for a modular shelter that met targeted durability and space requirements, but leaves further work in weight and cost optimization.

        <br> <br> See the poster <a href="https://drive.google.com/file/d/15119_e5PcX0O_XZSn6nYe-8LYKrLC0sx/view?usp=drive_link">here</a>
        <br> Read the full thesis <a href="https://drive.google.com/file/d/1BDeAtUcutDUiR1tXavdm_5k_S-QXtuK0/view?usp=drive_link">here</a>
        <br><br>
        `,
        detailsPage: 'project-details.html?id=Thesis'
    },
    {
        id: 'ES128',
        title: 'Computational Solid/Structural Mechanics Project - Simulated Living Hinges',
        images: [
            { src: 'ES128/FoldingSim.gif', caption: 'A simulation of a living hinge using material properties of Corning Gorrila Glass 3. The hinge geometries in this project were parameterized to allow the testing and comparison of multiple shapes.' },
            { src: 'ES128/BendingShapes.png', caption: 'An overview of the model used for the living hinge, as well as the different hinge shapes tested.'}
        ],  
        shortDescription: `For the final project in my finite element method course, "Computational Solid and Structural Mechanics", I worked in a team of two to investigate the effect of different geometries on the maximum stress in a living hinge.
        <br> <br> To investigate this, we utilized the FEA software Abaqus in conjunction with its python scripting module to create a parametrized model where we could prescribe different geometries and compare their outputs.`,
        fullDescription: `For the final project in the course "Computational Solid and Structural Mechanics" which primarily focused on the finite element method, I worked in a team of two to investigate the effect of different geometries on the maximum stress in a living hinge.
         <br> <br> To accomplish this, we utilized the python scripting module in Abaqus to generate a simple hinge model in which we could vary the geometry of the connecting hinge.
         We ultimately decided to implement 4 different shaping functions -- a simple radius, a quadratic curve, an exponential, and a cosine curve. The code allowed for the mixing and matching of the 
         shaping functions on the top and bottom of the hinge. With this code, different hinge geometries could be generated, simulated, and the results exported for post-processing in Matlab.

         <br><br> For determining the optimal configuration from our given options, we opted to perform a simple parameter sweep over our domain due to the restriction of our
          computing cluster preventing the use of non-preexisting external optimization libraries. 
          <br><br> Our results found that the configuration that exhibited the least stress when folded was two simple radii on the top and bottom. Our results also indicated that 
          generally simple radii performed best, while our exponential curves did the worse. However, we also noticed that the best results all occured in the parameter range that gave the thinnest thickness of the hinge, indicating that our parameter sweep range most likely should be expanded.
<br><br>

        `,
        detailsPage: 'project-details.html?id=ES128'
    },

    {
        id: 'IR',
        title: 'Informal Robotics - Final Project',
        images: [
            { src: 'Informal Robotics/viewsOfRobot.png', caption: 'Final robot design for the class. The main robot body is made from lasercut chipboard, and movement is achieved through attaching electronics with 3D printed mounts.' },
            { src: 'Informal Robotics/WalkingForward.gif', caption: 'The robot achieving forward motion. In order to move, the robot shifts its weight to cause one leg to act as a anchoring point while sliding the opposite leg forward. This process is then repeated across its gait.'},
            { src: 'Informal Robotics/CCWturn.gif', caption: 'The robot performing a counter-clockwise turn. This is accomplished similar to the forwards motion, but keeping the left leg fixed in place.' },
            { src: 'Informal Robotics/CWturn.gif', caption: 'The robot performing a clockwise turn. This is accomplished similar to the forwards motion, but keeping the right leg fixed in place.' },
            { src: 'Informal Robotics/axon.jpg', caption: 'Exploded view of the robot body and main components.' },
            { src: 'Informal Robotics/plans.jpg', caption: 'Overview of the different views of the robots.' }
        ],
        shortDescription: `My informal robotics class focused on making robots that differed from the general regime of rigid parts coupled with mechanical connectors.
        <br> <br> For my final project I worked with a partner to create a robot capable of locomotion made primarily of a lightweight lasercut laminate and electronics attached with 3D printed mounts.
        <br> <br> Our final design successfully achieved a robot capable of forward/backwards motion and turning using 3 servos, an arduino, and a 3.3V battery.`,
        fullDescription: ` For my final project in "Informal Robotics", I worked with a partner to create a robot capable of locomotion. We were inspired by the concept of <a href="https://www.youtube.com/watch?v=wMlDT17C_Vs"> passive walkers </a>
        and wanted to use those concepts to create an ambling robot.
        <br><br> After many concept iterations, we settled on a sliding robot that shifts its mass in order to move. The body of the robot consists of two legs (each of which a four-bar linkage), 
        along with a top 'fin' that tilts side to side to shift its mass. The main driving concept is that the leg over which the fin is placed acts as an 'anchor' which the other is then able to slide forward. Using this concept, 
        the robot is able to achieve both forwards locomotion and turning modes.

        <br><br> The construction of the robot body was done through laminating lasercut chipboard -- a fast and inexpensive process fitting the theme of informal robotics. The lasercut pattern and process we designed results in two parts, 
        one piece with two connected legs, and one piece for the fin, that were then connected with an adhesive. For attaching the electronics and servos, 3D printed mounts were designed and attached to the robot. Of particular note is the use 
        of the breadboard and arduino as the main weight on the top fin, eliminating the need for extraneous weighted components.
        <br><br>
        `,
        detailsPage: 'project-details.html?id=IR'
    },
    {
        id: 'BioRobotics-Lab',
        title: 'Harvard BioRobotics Lab',
        images: [
            { src: 'BioRobotics Lab/springmeshprototype.png', caption: 'A spring mesh mechanism for jamming groups of fibers. This proof of concept demonstrates how the central mesh can toggle between jamming and unjamming fibers.' },
            { src: 'BioRobotics Lab/smawithpennies.png', caption: 'Shape Memory Alloy (Nitinol) coil actuators, with a penny for scale.' },
            { src: 'BioRobotics Lab/bendingtest.png', caption: 'Three point bending test on a group of mechanically jammed nylon fibers.' }
        ],
        shortDescription: `My work in the Harvard Biorobotics Lab focused on a mesh-based non-vacuum mechanism to actuate mechanical jamming in bundles of fibers.<br> <br> Mechanical jamming is a structural phenomena in which a collection of loosely constrained materials exhibit vastly increased stiffnesses if an external pressure is applied. 
        Normally, this is achieved through putting the materials(sheets, fibers, beads, etc) in a bag and applying a vacuum.<br> <br> However, bags and atmospheric pressure limitations lead to a variety of design constraints, so my research was to create a way to actuate jamming without vacuum! `,
        fullDescription: `
            <ul>
                <li>My work in the Harvard BioRobotics lab revolved around designing a novel mechanism to actuate mechanical jamming in collections of fibers without the use of vacuum pressure.</li>
                <li>The motivation behind the project was to separate the desirable quality of variable stiffness from mechanically jamming fibers together from the design constraints that vacuum pressure (the usual mechanism by which mechanical jamming is achieved) imposes.</li>
                <li>I utilized analytical models to determine relationships between the design parameters of the system and the expected performance, and utilized MATLAB to visualize these relationships as well as parse experimental data to evaluate model accuracy.</li>
                <li>I used an Instron machine as well as sensors connected to an Arduino to collect experimental data to inform design.</li>
                <li>The final design was a mesh that radially contracts with axial extension pretensioned by a compression spring, with shape memory alloy coil actuators to counteract the spring tension as needed. 
                The final device works by switching between applying radial pressure to fibers in its passive, 'jammed' state where the mesh is tensioned by the spring, and no pressure in its actuated 'unjammed' state where the shape memory alloys relieve the compression spring tension.</li>
            </ul>
            <br><br>
        `,
        detailsPage: 'project-details.html?id=BioRobotics-Lab'
    },
    {
        id: 'CS286',
        title: 'Multi-agent Robotics Final Project - Malicious Agents in Cooperative Mapping',
        images: [
            { src: 'CS286/CoopMapping.png', caption: 'An example of sucessful cooperative mapping of an area by two robotic agents. The visualization is in Rviz of two robots simulated in Gazebo using ROS.' },
            { src: 'CS286/MaliciousMapping.png', caption: 'Spoofed sensor data from one agent breaking pathfinding for all agents. We see unreachable target locations (green points) due to the compromised pathfinding map.' },
        ],
        shortDescription: `For the final project in my Multi-agent robotics class, I worked in a team of 3 to explore the impact of including an unreliable agent and inaccurate mapping data on the ROS multirobot map merging package. In the project, I explored the impacts on both the final generated map and the pathfinding for the robotic agents in simulation.`,
        fullDescription: `
      For my final project in the class ‘Multi-Robot Systems’, I worked in a team of 3 to explore the effects that uncooperative agents had on a mapping/path-finding algorithm that assumed dependable, cooperative agents. For this project, I modified an <a href="https://github.com/hikashi/multi-robot-rrt-exploration-melodic"> existing codebase </a> for RRT pathfinding/multi-agent SLAM in ROS/gazebo to use ‘fake’ sensor data I sent from an external python script in its mapping and pathfinding.

    <br> <br> We tested various scenarios and initial positions of the robots and found that in each the existing algorithm was unable to successfully map/pathfind, as it had no way to account for unreliable data.

  <br> <br> Further work would include further testing the code on physical robot platforms, as well as incorporating security checks, such as using wifi profiles to ensure that agents are legitimate before utilizing their data as in <a href="https://link.springer.com/article/10.1007/s10514-017-9621-5">“Guaranteeing spoof-resilient multi-robot networks“ </a>.

<br> <br> Final report can be found <a href="https://drive.google.com/file/d/1mZZ5yl1_UA7ESPXWhGCTvawqZrDNHLNb/view">here. </a><br> <br>
        `,
        detailsPage: 'project-details.html?id=CS286'
    },
    {
        id: 'GPGPUFEA',
        title: '[In Progress] GPU Accelerated FEA Simulator',
        images: [
            { src: 'GPGPUFEA/BunnySim.gif', caption: 'A simulation of the Stanford bunny model under gravity using 1-D FEA bar elements' },
        ],  
        shortDescription: `To gain familiarity with GPU programming and 3-D graphics, I'm working on a finite element simulator that takes advantage of parallel computations on 
        a GPU. <br><br> Currently, the simulator takes in a .obj file, reconstructs it out of 1-D FEA bar elements, and simulates a gravity load. <br><br> Try it<a href="josephbilski.github.io/GPGPU_FEA_SIM"> here! </a> <br> <br>`,
        fullDescription: `To gain familiarity with GPU programming and 3-D graphics, I'm working on a finite element simulator that takes advantage of parallel computations on 
        a GPU. <br><br> Currently, the simulator takes in a .obj file, reconstructs it out of 1-D FEA bar elements, and simulates a gravity load.
        Try it<a href="josephbilski.github.io/GPGPU_FEA_SIM"> here! </a> <br> <br>`,
        detailsPage: 'project-details.html?id=GPGPUFEA'
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