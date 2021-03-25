const cafe = {
    name: "Progate Cafe",
    businessHours: {
      // Tetapkan object yang sudah disediakan untuk businessHours
      opening: "10:00",
      closing: "20:00"
      
    },

    menu :["Kopi","Teh","Kue Cokelat"]
  };
  
  // Print "Nama: ____"
  console.log(`Nama: ${cafe.name}`);
  
  // Print "Jam: Dari jam ____ sampai jam ____"
  console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);

  for (let i = 0; i < cafe.menu.length; i++){
      console.log(cafe.menu[i]);
  }