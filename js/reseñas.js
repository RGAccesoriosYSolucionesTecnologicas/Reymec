<script>
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: TULATITUD, lng: TULONGITUD },
      zoom: 15,
    });

    const service = new google.maps.places.PlacesService(map);
    service.getDetails(
      {
        placeId: TU_PLACE_ID, // Reemplaza con el ID de tu negocio en Google Places
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
