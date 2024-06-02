      var jobs = [
    {
        id: 1,
        name: "Ana - Conservatoire d'espaces naturels Ariège",
        coords: [42.98579045144057, 1.4732308485006458], // Alzen, Occitanie, France
        title: "Chargé de projet Système d'Information",
        dates: "Mars 2022 - Aujourd'hui",
        tasks: [],
        start: '2022-03-01', // Date de début de l'emploi
        end: new Date() // Date de fin de l'emploi (actuelle)
    },
    {
        id: 2,
        name: "Office français de la biodiversité",
        coords: [43.58019463865511, 1.4435832232749437], // Toulouse, Occitanie, France
        title: "Géomaticien",
        dates: "Janvier 2022 - Février 2022",
        tasks: [],
        start: '2022-01-01',
        end: '2022-02-27'
    },
    {
        id: 3,
        name: "Terres australes et antarctiques françaises (TAAF)",
        coords: [-22.370896356050693, 40.35961906833212],
        title: "Chargé de conservation du patrimoine naturel de l'île Europa",
        dates: "Septembre 2020 - Août 2021",
        tasks: [],
        start: '2020-09-01',
        end: '2021-08-31'
    },
    {
        id: 4,
        name: "Conservatoire d'espaces naturels Provence-Alpes-Côte d’Azur",
        coords: [44.19775325683904, 5.9426909996337685],
        title: "Chargé de mission conservation de la biodiversité",
        dates: "Juillet 2012 - Février 2020",
        tasks: [],
        start: '2012-07-01',
        end: '2020-02-28'
    },
    {
        id: 5,
        name: "Bretagne Vivante - SEPNB",
        coords: [48.390633220796275, -4.487228816246881],
        title: "Ornithologue",
        dates: "Mars 2012 - Juin 2012",
        tasks: [],
        start: '2012-03-01',
        end: '2012-06-30'
    },
    {
        id: 6,
        name: "Direction Départementale des Territoires d'Indre-et-Loire",
        coords: [47.3865693120961, 0.6915060229406611],
        title: "Technicien",
        dates: "Octobre 2011 - Décembre 2011",
        tasks: [],
        start: '2011-10-01',
        end: '2011-12-31'
    },
    {
        id: 7,
        name: "Reneco International Wildlife Consultants LLC",
        coords: [46.70029132254102, 79.48151413604936],
        title: "Chargé de mission Ornithologue",
        dates: "Mars 2011 - Juin 2011",
        tasks: [],
        start: '2011-03-01',
        end: '2011-06-30'
    },
    {
        id: 8,
        name: "Direction Régionale de l'Environnement, de l'Aménagement et du Logement Haute-Normandie",
        coords: [49.423768532027836, 1.0794453198264118],
        title: "Technicien écologue",
        dates: "Octobre 2010 - Décembre 2010",
        tasks: [],
        start: '2010-10-01',
        end: '2010-12-31'
    },
    {
        id: 9,
        name: "IGDEO",
        coords: [43.59710428186471, 1.3492011386158562],
        title: "Méthodes et Techniques des SIG",
        dates: "Septembre 2021 - Mars 2022",
        tasks: [],
        start: '2021-09-01',
        end: '2022-03-01'
    },
    {
        id: 10,
        name: "ENGEES Ecole nationale du génie de l'eau et de l'environnement de Strasbourg",
        coords: [48.580757545073794, 7.7581963677500845],
        title: "Licence professionelle",
        dates: "Septembre 2009 - Juin 2010",
        tasks: [],
        start: '2009-09-01',
        end: '2010-06-30'
    }
];


        // Initialiser la carte
        var map = L.map('map').setView([20.603354, 37.488334], 3);

        // Ajouter un fond de carte
        L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        var jobMarkers = [];

        // Ajouter des marqueurs pour chaque emploi
        jobs.forEach(function(job, index) {
            var marker = L.marker(job.coords).addTo(map);
          //  marker.bindPopup("<b>" + job.title + "</b><br>" + job.name);

            // Ajouter l'événement de clic au marqueur pour faire défiler jusqu'au texte correspondant
            marker.on('click', function() {
                var jobElement = document.getElementsByClassName('job')[index];
                jobElement.scrollIntoView({ behavior: 'smooth' });
                highlightJobElement(jobElement);
                timeline.setSelection([index + 1]); // Mettre à jour la sélection de la timeline            
            });

            jobMarkers.push(marker);
        });
        // Ajouter un événement de survol sur chaque marqueur de la carte
jobMarkers.forEach(function(marker, index) {
    marker.on('click', function() {
        // Centrer la carte sur le marqueur avec un zoom
        map.flyTo(marker.getLatLng(), 11, { animate: true, duration: 0.5 });
        
        // Faire défiler la sidebar pour afficher l'élément correspondant
        var jobElement = document.getElementsByClassName('job')[index];
        jobElement.scrollIntoView({ behavior: 'smooth' });
        highlightJobElement(jobElement);
        
        // Sélectionner l'élément correspondant dans la timeline
        timeline.setSelection([index + 1]); // Mettre à jour la sélection de la timeline
    });
});


        function highlightJobElement(element) {
            // Réinitialiser les styles pour tous les éléments de la barre latérale
            var jobElements = document.getElementsByClassName('job');
            for (var i = 0; i < jobElements.length; i++) {
                jobElements[i].style.backgroundColor = '';
            }

            // Mettre en surbrillance l'élément sélectionné
            element.style.backgroundColor = '#f0f0f0';
        }

      // Centrer la carte sur tous les marqueurs au survol de la section de bienvenue
document.getElementById('welcome').addEventListener('mouseover', function() {
    var allCoords = jobs.map(function(job) {
        return job.coords;
    });
    var bounds = L.latLngBounds(allCoords);
    var center = bounds.getCenter();
    
    // Ajuster légèrement les coordonnées du centre vers le nord
    var offset = 7.5; // Ajustez cette valeur selon vos besoins
    var adjustedCenter = L.latLng(center.lat + offset, center.lng);
    
    map.flyTo(adjustedCenter, map.getBoundsZoom(bounds), { animate: true, duration: 0.5 });
});
        // Ajouter un événement pour centrer la carte sur le marqueur correspondant lorsque l'élément de la barre latérale est survolé
        document.querySelectorAll('.job').forEach(function(jobElement, index) {
            jobElement.addEventListener('mouseover', function() {
                var marker = jobMarkers[index];
                map.flyTo(marker.getLatLng(), 11, { animate: true, duration: 1 }); // Animation de transition fluide vers le marqueur
                timeline.setSelection([index + 1]); // Mettre à jour la sélection de la timeline
            });
        });


// Configuration de la timeline avec les données des emplois
var container = document.getElementById('timeline');
var items = new vis.DataSet(jobs.map(function(job) {
    return {
        id: job.id,
        content: job.title,
        start: job.start,
        end: job.end
    };
}));
 
        var options = {
    groupOrder: 'content',
    zoomMin: 1000 * 60 * 60 * 24 * 365, // Minimum zoom is 6 months
    zoomMax: 1000 * 60 * 60 * 24 * 365 * 20,
    selectable: true,
};

var timeline = new vis.Timeline(container, items,  options);

timeline.on('itemover', function (event) {
    var selectedItem = items.get(event.item);
    var index = jobs.findIndex(job => job.title === selectedItem.content);
    if (index !== -1) {
        var marker = jobMarkers[index];
        map.flyTo(marker.getLatLng(), 11, { animate: true, duration: 0.5 });
        var jobElement = document.getElementsByClassName('job')[index];
        jobElement.scrollIntoView({ behavior: 'smooth' });
        highlightJobElement(jobElement);
        timeline.setSelection([index + 1]); // Mettre à jour la sélection de la timeline
 }
});

        // Fonction pour désélectionner la timeline et remettre les expériences en haut du container
        function resetView() {
            timeline.setSelection([]);  // Deselect items in the timeline
            var sidebar = document.getElementById('sidebar');
            sidebar.scrollTop = 0;  // Scroll to the top of the sidebar
        }

        
        // Ajouter un événement pour désélectionner la timeline et remettre les expériences en haut lors du survol de "welcome"
        var welcomeSection = document.getElementById('welcome');
        welcomeSection.addEventListener('mouseover', resetView);
