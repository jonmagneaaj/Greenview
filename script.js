window.addEventListener('DOMContentLoaded', function () {
    var contentData = [
      { title: "Energi per dag", url: "https://app.powerbi.com/view?r=eyJrIjoiZTVlYzY2ODAtYTlhYy00Y2ZkLTk5MjctYThlNmM5OTk5ZTMzIiwidCI6IjdhZWU3ZTdhLTI4OTQtNDZhMy1iNmJmLTk2NjMxZjg3OGUyOCJ9", loaded: false },
      { title: "Vi sparer CO2", url: "https://app.powerbi.com/view?r=eyJrIjoiOGE2ZGU0NTUtZGU5ZC00YmIyLWFmOTAtMjY5NTBkMGI5YzI5IiwidCI6IjdhZWU3ZTdhLTI4OTQtNDZhMy1iNmJmLTk2NjMxZjg3OGUyOCJ9", loaded: false },
      { title: "Varme og kjøling året rundt", url: "https://app.powerbi.com/view?r=eyJrIjoiMWE4MmU3Y2EtYjk3YS00NDU2LWJjNmUtM2E0NjBlNWYwOGFkIiwidCI6IjdhZWU3ZTdhLTI4OTQtNDZhMy1iNmJmLTk2NjMxZjg3OGUyOCJ9", loaded: false },
      { title: "Hvordan vi gjør det", url: "https://app.powerbi.com/view?r=eyJrIjoiZTZlNjc3MDItMmI5OC00YmIwLTkwYjQtNjQ2NjdhMmY0YTVkIiwidCI6IjdhZWU3ZTdhLTI4OTQtNDZhMy1iNmJmLTk2NjMxZjg3OGUyOCJ9", loaded: false },
      { title: "Hvordan vi gjør det", url: "https://app.powerbi.com/view?r=eyJrIjoiZTZlNjc3MDItMmI5OC00YmIwLTkwYjQtNjQ2NjdhMmY0YTVkIiwidCI6IjdhZWU3ZTdhLTI4OTQtNDZhMy1iNmJmLTk2NjMxZjg3OGUyOCJ9", loaded: false }
    ];
  
    var titleElement = document.querySelector('.title');
    var iframeElement = document.querySelector('.iframe-container iframe');
    var contentElement = document.querySelector('.content');
    var headerElement = document.querySelector('header');
    var currentIndex = 0;
    var updateInterval;
  
    function updateContent() {
      var currentContent = contentData[currentIndex];
  
      // Hvis nettsiden ikke er lastet ned tidligere, last den ned nå
      if (!currentContent.loaded) {
        iframeElement.src = currentContent.url;
        currentContent.loaded = true;
      }
  
      // Sjekk om currentIndex har nådd slutten av arrayen
      if (currentIndex === contentData.length - 1) {
        // Fjern eksisterende innhold i classen "content"
        contentElement.innerHTML = '';
  
        // Opprett et nytt bildeelement og legg til Logo.png
        var imageElement = document.createElement('img');
        imageElement.src = 'Logo.png';
        imageElement.alt = 'Logo';
        imageElement.classList.add('logo');
        imageElement.style.height = '10rem'; // Endret størrelsen til 10 rem
  
        // Opprett et nytt tittel-element
        var newTitleElement = document.createElement('h1');
        newTitleElement.classList.add('title');
        newTitleElement.textContent = 'Fornybar energi året rundt';
  
        // Legg til bildeelementet og tittel-elementet i classen "content"
        contentElement.appendChild(imageElement);
        contentElement.appendChild(newTitleElement);
  
        // Skjul logoen i header
        headerElement.style.display = 'none';
  
        // Stopp oppdateringen
        clearInterval(updateInterval);
      } else {
        // Oppdater tittel
        titleElement.textContent = currentContent.title;
  
        // Sett ny kilde for iframe
        iframeElement.src = currentContent.url;
      }
  
      currentIndex = (currentIndex + 1) % contentData.length;
    }
  
    // Sett opp en intervalfunksjon for oppdatering
    updateInterval = setInterval(updateContent, 7000);
  });
  