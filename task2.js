const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let months = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];

        if (! error) {
            callback(null, months);
        } else {
            callback(new Error("Sorry Data Not Found"), []);
        }
    }, 4000);
};

  const semuaBulan = async (error, months) => {
    return new Promise ((resolve,reject) => {
      if(months){
      resolve(months.map((month) => console.log(month)))
      }else{
        reject(error.message);
      }
    })
  }

  getMonth(semuaBulan)
  
