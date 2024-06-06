var jobs = [
    {
        id: 1,
        name: "Ana - Conservatoire d'espaces naturels Ariège",
        coords: [42.98579045144057, 1.4732308485006458],
        title: "Chargé de projet Système d'Information",
        dates: "Mars 2022 - Aujourd'hui",
        tasks: [
            "Gestion des bases de données",
            "Gestion du Système d'Information Géographique",
            "Outils de saisie, de gestion et d'administration des données",
            "Gestion du parc informatique",
            "Gestion du cloud",
            "Webmapping"
        ],
        start: '2022-03-01',
        end: new Date(),
        logo: "images/logo_ana.png",
        location: "Alzen, Occitanie, France"
    },
    {
        id: 2,
        name: "Office français de la biodiversité",
        coords: [43.58019463865511, 1.4435832232749437],
        title: "Géomaticien",
        dates: "Janvier 2022 - Février 2022",
        tasks: [
            "Développement d'une application sous PostgreSQL/PostGIS et GEO pour le suivi du Grand Hamster"
        ],
        start: '2022-01-01',
        end: '2022-02-27',
        logo: "images/logo-ofb.png",
        location: "Toulouse, Occitanie, France"
    },
    {
        id: 3,
        name: "Terres australes et antarctiques françaises (TAAF)",
        coords: [-22.370896356050693, 40.35961906833212],
        title: "Chargé de conservation du patrimoine naturel de l'île Europa",
        dates: "Septembre 2020 - Août 2021",
        tasks: [
            "Inventaires et suivis (oiseaux, reptiles, gastéropodes, orthoptères, rhopalocères, flore patrimoniale)",
            "Gestion (inventaire et lutte) des espèces exotiques envahissantes",
            "Formation et sensibilisation à l’environnement (visites de découverte de l’île aux différents visiteurs – militaires et civils)"
        ],
        start: '2020-09-01',
        end: '2021-08-31',
        logo: "images/logo_taaf.png",
        location: "Île Europa, Îles Eparses-TAAF, France"
    },
    {
        id: 4,
        name: "Conservatoire d'espaces naturels Provence-Alpes-Côte d’Azur",
        coords: [44.19775325683904, 5.9426909996337685],
        title: "Chargé de mission conservation de la biodiversité",
        dates: "Juillet 2012 - Février 2020",
        tasks: [
            "Gestion du Système d'Information Géographique et des bases de données (en lien avec un informaticien)",
            "Coordination régionale de programmes de connaissance et de conservation (Listes rouges, STOC-EPS, ZNIEFF, PNA Cistude d'Europe, PNA Sonneur à ventre jaune)",
            "Expertises ornithologiques, herpétologiques et malacologiques",
            "Validation scientifique des données ornithologiques, malacologiques et herpétologiques et de la base de données du CEN PACA et de SILENE-PACA"
        ],
        start: '2012-07-01',
        end: '2020-02-28',
        logo: "images/logo_cenpaca.png",
        location: "Sisteron, Provence-Alpes-Côte d'Azur, France"
    },
    {
        id: 5,
        name: "Bretagne Vivante - SEPNB",
        coords: [48.390633220796275, -4.487228816246881],
        title: "Ornithologue",
        dates: "Mars 2012 - Juin 2012",
        tasks: [
            "Suivi de la reproduction (en bateau, kayak), de l'étude sur l’alimentation des sternes pierregarin, naine, de Dougall et caugek, du gardiennage des colonies",
            "Gestion des espèces exotiques envahissantes"
        ],
        start: '2012-03-01',
        end: '2012-06-30',
        logo: "images/logo_bv.png",
        location: "Brest, Bretagne, France"
    },
    {
        id: 6,
        name: "Direction Départementale des Territoires d'Indre-et-Loire",
        coords: [47.3865693120961, 0.6915060229406611],
        title: "Technicien",
        dates: "Octobre 2011 - Décembre 2011",
        tasks: [
            "Récolte et analyse des données piézométriques du département"
        ],
        start: '2011-10-01',
        end: '2011-12-31',
        logo: "images/logo_ddt.jpg",
        location: "Tours, Centre-Val de Loire, France"
    },
    {
        id: 7,
        name: "Reneco International Wildlife Consultants LLC",
        coords: [46.70029132254102, 79.48151413604936],
        title: "Chargé de mission ornithologue",
        dates: "Mars 2011 - Juin 2011",
        tasks: [
            "Inventaires et du suivi de la reproduction de plusieurs populations d’Outarde de Macqueen",
            "Capture et baguage d’individus"
        ],
        start: '2011-03-01',
        end: '2011-06-30',
        logo: "images/logo_reneco.png",
        location: "Région du lac Balkash, Kazakhstan"
    },
    {
        id: 8,
        name: "Direction Régionale de l'Environnement, de l'Aménagement et du Logement Haute-Normandie",
        coords: [49.423768532027836, 1.0794453198264118],
        title: "Technicien écologue",
        dates: "Octobre 2010 - Décembre 2010",
        tasks: [
            "Suivi de l'actualisation des ZNIEFF de Normandie : cartographie, gestion de base de données et diffusion des données ZNIEFF."
        ],
        start: '2010-10-01',
        end: '2010-12-31',
        logo: "images/logo_dreal.png",
        location: "Région du lac Balkash, Kazakhstan"

    }
];

var education = [
    {
        id: 101,
        name: "ENGEES Ecole nationale du génie de l'eau et de l'environnement de Strasbourg",
        coords: [48.580757545073794, 7.7581963677500845],
        title: "Licence professionnelle",
        logo: "images/logo_engees.png",
        dates: "Septembre 2009 - Juin 2010",
        start: '2009-09-01',
        end: '2010-06-30'
    },{
        id: 102,
        name: "IDGEO",
        coords: [43.59710428186471, 1.3492011386158562],
        title: "Python pour QGIS",
        dates: "Mars 2024 - Juin 2024 (3 sessions)",
        tasks: [
            "Scripts via notebooks",
            "Scripts via processing",
            "Automatisation de processus"
        ],
        logo: "images/logo_idgeo.png",
        start: '2024-03-01',
        end: '2024-06-30',
        location: "Strasbourg, Alsace, France"

    },  
      {
        id: 103,
        name: "Libra Linux",
        coords: [42.965436449701215, 1.6068587893640003],
        title: "Linux : Administration Système et Réseaux, Programmation informatique",
        logo: "images/logo_libralinux.png",
        dates: "Mai 2022",
        start: '2022-05-01',
        end: '2022-05-07',
        location: "Téléformation, France"

    },{
        id: 104,
        name: "IDGEO",
        coords: [43.59710428186471, 1.3492011386158562],
        title: "Méthodes et Techniques des SIG",
        dates: "Septembre 2021 - Mars 2022",
        tasks: [
            "Appendre le métier de géomaticien",
            "Apporter la maîtrise des outils de travail utilisés dans le domaine des SIG",
            "Former par la pratique intensive des principaux logiciels S.I.G."
        ],
        logo: "images/logo_idgeo.png",
        start: '2021-09-01',
        end: '2022-03-01',
        location: "Coulomiers, Occitanie, France"

    },
    {
        id: 105,
        name: "Agence française de la Biodiversité",
        coords: [44.901581832020995, 6.6397433618103685],
        title: "Stage Sécurité hivernale en montagne, Santé et sécurité au travailStage Sécurité hivernale en montagne, Santé et sécurité au travail",
        dates: "Janvier 2019",
        tasks: [
            "Neige et avalanches",
            "DVA : utilisation et recherche",
            "Choix et préparation des itinéraires, cartographie élémentaire",
            "Utilisation du matériel de randonnée à ski",
            "Lecture de terrain et choix d'itinéraires",
            "Techniques de sécurité dans le déplacement à ski et à raquette",
            "Secourisme adapté, déclenchement des secours et procédure d'alerte",
            "Aspects médicaux du secourisme hivernal"
                ],
        logo: "images/logo_afb.png",
        start: '2019-01-15',
        end: '2019-01-22',
        location: "Briançon, Provence-Alpes-Côte d'Azur, France"

    },
    {
        id: 106,
        name: "Agence française de la Biodiversité",
        coords: [43.63068504003651, 3.861643240187076],
        title: "Stage Outils mobiles avec Open Data Kit (ODK)",
        dates: "Mai 2018",
        tasks: [
            "Mise en place d'outils de saisie informatisée et mobile :",
            "Création de formulaires ODK",
            "Utilisation d'ODK Collect",
            "Utilisation d'ODK Aggregate",
            "Lien ODK et QGIS"
                ],
        logo: "images/logo_afb.png",
        start: '2018-05-15',
        end: '2018-05-22',
        location: "Montpellier, Occitanie, France"

    },
    {
        id: 107,
        name: "Atelier Technique des Espaces Naturels",
        coords: [43.63068504003651, 3.861643240187076],
        title: "Stage Traitement et analyse des données de terrain",
        dates: "Mai 2013",
        tasks: [
            "Principes des grandes classes de méthodes d’analyses statistiques (paramétriques/non-paramétriques ; univariées/multivariées)",
"Méthode pour répondre aux objectifs et vérifier ses hypothèses",
"Prise en main du logiciel R",
"Modèles Linéaires Généralisés : Concepts théoriques et utilisation pratique sous R",
"Analyses multivariées. Concepts théoriques et analyse en pratique sous R"
                ],
        logo: "images/logo_aten.png",
        start: '2013-01-15',
        end: '2013-01-22',
        location: "Montpellier, Occitanie, France"

    },

    {
        id: 1000,
        name: "Géonat",
        coords: [45.99196938741247, 1.0444367353661008],
        title: "Brevet de technicien supérieur agricole (BTSA) Gestion et Protection de la Nature",
        dates: "Septembre 2006 - Juin 2008",
        tasks: [
            "spécialité Gestion des Espaces Naturels"
        ],
        logo: "images/logo_geonat.png",
        start: '2006-09-01',
        end: '2008-06-30',
        location: "Cieux, Nouvelle-Aquitaine, France"

    },
];


function generateEducationHTML(education) {
    let tasksHTML = education.tasks ? education.tasks.map(task => `<li>${task}</li>`).join('') : '';

    return `
        <div class="education">
            ${education.logo ? `<img src="${education.logo}" alt="Logo de ${education.name}">` : ''}
            <b>${education.title}</b>
            <br>${education.name}
            <br>${education.dates}
            ${education.location ? `<br>${education.location}` : ''}
            ${tasksHTML ? `<ul class="education-tasks">${tasksHTML}</ul>` : ''}
        </div>
    `;
}

function generateJobHTML(job) {
    let tasksHTML = job.tasks.map(task => `<li>${task}</li>`).join('');

    return `
        <div class="job">
            ${job.logo ? `<img src="${job.logo}" alt="Logo de ${job.name}">` : ''}
            <b>${job.title}</b>
            <br>${job.name}
            <br>${job.dates}
            ${job.location ? `<br>${job.location}` : ''}
            <ul class="job-tasks">
                ${tasksHTML}
            </ul>
        </div>
    `;
}

function highlightJobElement(element) {
    var jobElements = document.getElementsByClassName('job');
    for (var i = 0; i < jobElements.length; i++) {
        jobElements[i].style.backgroundColor = '';
    }
    element.style.backgroundColor = '#f0f0f0';
};

function highlightEducationElement(element) {
    var eduElements = document.getElementsByClassName('education');
    for (var i = 0; i < eduElements.length; i++) {
        eduElements[i].style.backgroundColor = '';
    }
    element.style.backgroundColor = '#f0f0f0';
};

function resetHighlighting() {
    var jobElements = document.getElementsByClassName('job');
    for (var i = 0; i < jobElements.length; i++) {
        jobElements[i].style.backgroundColor = '';
    }
    var eduElements = document.getElementsByClassName('education');
    for (var i = 0; i < eduElements.length; i++) {
        eduElements[i].style.backgroundColor = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var jobContainer = document.getElementById('job-container');
    var educationList = document.getElementById('education-list');

    // Generate HTML elements for jobs and education
    jobs.forEach(function(job) {
        jobContainer.innerHTML += generateJobHTML(job);
    });

    education.forEach(function(edu) {
        educationList.innerHTML += generateEducationHTML(edu);
    });

    // Initialize the map
    var map = L.map('map').setView([20.603354, 37.488334], 3);

    // Add a map layer
    L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>'
    }).addTo(map);

    var jobMarkers = [];
    var educationMarkers = [];

    // Add markers for jobs
    jobs.forEach(function(job, index) {
        var marker = L.marker(job.coords).addTo(map);
        marker.on('click', function() {
            var jobElement = document.getElementsByClassName('job')[index];
            jobElement.scrollIntoView({ behavior: 'smooth' });
            map.flyTo(marker.getLatLng(), 11, { animate: true, duration: 1.5 });
            highlightJobElement(jobElement);
            timeline.setSelection([job.id], { focus: false });
        });
        jobMarkers.push(marker);
    });

    // Add markers for education
    education.forEach(function(edu, index) {
        var marker = L.marker(edu.coords).addTo(map);
        marker.on('click', function() {
            var eduElement = document.getElementsByClassName('education')[index];
            eduElement.scrollIntoView({ behavior: 'smooth' });
            map.flyTo(marker.getLatLng(), 11, { animate: true, duration: 1.5 });
            highlightEducationElement(eduElement);
            timeline.setSelection([edu.id], { focus: false });
        });
        educationMarkers.push(marker);
    });

    // Center the map on all markers when the welcome section is hovered over
    document.getElementById('welcome').addEventListener('mouseover', function() {
        var allCoords = jobs.map(function(job) {
            return job.coords;
        });
        var bounds = L.latLngBounds(allCoords);
        var center = bounds.getCenter();
        
        // Adjust the center coordinates slightly north
        var offset = 7.5; // Adjust this value as needed
        var adjustedCenter = L.latLng(center.lat + offset, center.lng);
        
        map.flyTo(adjustedCenter, map.getBoundsZoom(bounds), { animate: true, duration: 1.5 });
    });

    // Highlight elements on mouseover in the sidebar
    document.querySelectorAll('.job').forEach(function(jobElement, index) {
        jobElement.addEventListener('mouseover', function() {
            var marker = jobMarkers[index];
            map.flyTo(marker.getLatLng(), 11, { animate: true, duration: 1.5 });
            timeline.setSelection([jobs[index].id], { focus: false });
        });
    });

    document.querySelectorAll('.education').forEach(function(eduElement, index) {
        eduElement.addEventListener('mouseover', function() {
            var marker = educationMarkers[index];
            map.flyTo(marker.getLatLng(), 11, { animate: true, duration: 1.5 });
            timeline.setSelection([education[index].id], { focus: false });
        });
    });

    // Create the timeline
    var container = document.getElementById('timeline');
    var items = new vis.DataSet(jobs.concat(education).map(function(item) {
        return {
            id: item.id,
            content: item.title,
            start: item.start,
            end: item.end
        };
    }));

    var options = {
        groupOrder: 'content',
        zoomMin: 1000 * 60 * 60 * 24 * 365,
        zoomMax: 1000 * 60 * 60 * 24 * 365 * 20,
        selectable: true,
        zoomable: false // Désactiver le zoom

    };

    var timeline = new vis.Timeline(container, items, options);

    timeline.on('itemover', function (event) {
        var selectedItem = items.get(event.item);
        var index = jobs.concat(education).findIndex(item => item.title === selectedItem.content);
        if (index !== -1) {
            var marker = index < jobs.length ? jobMarkers[index] : educationMarkers[index - jobs.length];
            map.flyTo(marker.getLatLng(), 11, { animate: true, duration: 1.5 });
            var element = index < jobs.length ? document.getElementsByClassName('job')[index] : document.getElementsByClassName('education')[index - jobs.length];
            element.scrollIntoView({ behavior: 'smooth' });
            resetHighlighting();
            if (index < jobs.length) {
                highlightJobElement(element);
            } else {
                highlightEducationElement(element);
            }
            timeline.setSelection([selectedItem.id], { focus: false });
            
        }
    });

    timeline.on('select', function (event) {
        if (event.items.length === 0) {
            resetHighlighting();
        }
    });

    function resetView() {
        timeline.setSelection([]);  // Deselect items in the timeline
        var sidebar = document.getElementById('sidebar');
        sidebar.scrollTop = 0;  // Scroll to the top of the sidebar
        resetHighlighting();  // Reset the highlight in the sidebar
    }

    // Add an event to reset the view when the welcome section is hovered over
    var welcomeSection = document.getElementById('welcome');
    welcomeSection.addEventListener('mouseover', resetView);
});
