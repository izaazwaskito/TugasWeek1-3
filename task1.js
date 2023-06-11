const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
        let cek = dataDay.find((item) => {
          return item.toLowerCase() === day.toLowerCase();
        });
  
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error("Hari ini bukan hari kerja"));
        }
      }, 3000);
    });
  };
  
   cekHariKerja("kamis")
   .then((result)=> console.log("Berhasil Memasukkan Data " + result)) //Apabila data sesuai maka akan mencetak Berhasil
   .catch((error)=> console.log(error.message)) //Apabila data tidak sesuai makan akan mencetak Tidak Berhasil
  
  const cekHari = async (day) => {
    try {
        await cekHariKerja(day);
    } catch (error) {
      console.log(error.message);
    }
  }
  cekHari("senin");