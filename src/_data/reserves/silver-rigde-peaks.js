// const status = {
//   resting: "Resting",
//   feeding: "Feeding",
//   drinking: "Drinking",
// };

export default {
  name: "Silver Ridge Peaks",
  // animals: ["001", "002", "003", "004", "005", "006", "007", "008", "009"],
  needZones: [
    {
      name: "Turkey",
      times: [
        "00:00-05:00;Resting",
        "05:00-15:00;Feeding",
        "15:00-16:00;Drinking",
        "16:00-21:00;Feeding",
        "21:00-00:00;Resting",
      ],
    },
    {
      name: "Plains Bison",
      times: [
        "00:00-03:00;Resting",
        "03:00-10:00;Feeding",
        "10:00-11:00;Drinking",
        "11:00-16:00;Resting",
        "16:00-17:00;Drinking",
        "17:00-00:00;Feeding",
      ],
    },
  ],
};

/* 
Turkey	
  00:00 - 05:00 Resting
	05:00 - 15:00 Feeding
	15:00 - 16:00 Drinking
	16:00 - 21:00 Feeding
  21:00 - 00:00 Resting
  
Pronghorn	
  00:00 - 05:00	Resting
  05:00 - 08:00 Feeding
  08:00 - 10:00	Drinking
	10:00 - 19:00	Feeding
  19:00 - 21:00	Drinking
  21:00 - 00:00 Resting
				
Mountain Goat	
  00:00 - 03:00	Feeding
	03:00 - 05:00	Resting
	05:00 - 09:00	Feeding
	09:00 - 11:00	Drinking
	11:00 - 14:00	Feeding
  13:00 - 16:00	Resting
  16:00 - 21:30 Feeding
  21:00 - 22:30 Drinking
  22:00 - 00:00 Resting

Bighorn Sheep	
  00:00 - 04:00 Resting
	04:00 - 06:00	Feeding
	06:00 - 08:00	Drinking
	08:00 - 21:00	Feeding
  21:00 - 00:00	Resting

Mountain Lion	
  00:00 - 06:00	Feeding
	06:00 - 08:00	Drinking
	08:00 - 17:00	Resting
  17:00 - 18:00 Drinking
  18:00 - 00:00	Feeding

Mule Deer	
  00:00 - 05:00	Feeding
	05:00 - 09:00	Resting
	09:00 - 10:00	Drinking
	10:00 - 14:00	Feeding
  14:00 - 18:00	Resting
  18:00 - 23:00 Feeding
  23:00 - 0:00 Drinking
		
Black Bear	
  00:00 - 05:00	Resting
	05:00 - 11:00	Feeding
	11:00 - 12:00	Drinking
	12:00 - 15:00	Resting
	15:00 - 20:00	Drinking
  20:00 - 21:00	Drinking
  21:00 - 00:00 Resting

Rocky Mountain Elk	
  00:00 - 04:00	Resting
	04:00 - 05:00	Drinking
	05:00 - 17:00	Feeding
	17:00 - 18:00	Drinking
  18:00 - 00:00	Feeding
  
Plains Bison
  00:00 - 03:00 Resting
  03:00 - 10:00 Feeding
  10:00 - 11:00 Drinking
  11:00 - 16:00 Resting
  16:00 - 17:00 Drinking
  17:00 - 00:00 Feeding

  */
