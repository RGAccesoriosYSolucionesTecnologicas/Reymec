<script>
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -37.32773264484421 , lng: -71.67973589358799 },
      zoom: 15,
    });

    const service = new google.maps.places.PlacesService(map);
    service.getDetails(
      {
        placeId: ChIJ77WAZOEbbJYRtUClgr266yw, // Reemplaza con el ID de tu negocio en Google Places
      },
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const reviews = place.reviews;
          if (reviews) {
            reviews.forEach((review) => {
              const reviewElement = document.createElement("div");
              reviewElement.className = "review";
              reviewElement.innerHTML = `
                <h3>${review.author_name}</h3>
                <p>${review.text}</p>
              `;
              document.getElementById("reviews").appendChild(reviewElement);
            });
          }
        }
      }
    );
  }
</script>
