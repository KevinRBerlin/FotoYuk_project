var pg = [
    {
        "nama":"Bintang",
        "alamat":"jl. Kucing Lucu",
        "tarif":"Rp. 100k-500k",
        "wo":"Sabtu & Minggu"
    },
    {
        "nama":"Bima",
        "alamat":"jl. Pohon Kelapa",
        "tarif":"Rp. 100k-300k",
        "wo":"Senin - Sabtu"
    },
    {
        "nama":"Sakti",
        "alamat":"jl. Bunga Melati",
        "tarif":"Rp. 400k-700k",
        "wo":"Senin - Rabu"
    },
    {
        "nama":"Fahmi",
        "alamat":"jl. Buah Manggis",
        "tarif":"Rp. 250k-400k",
        "wo":"Hari kerja"
    }

]


for (let i = 0; i < 4; i++) {
    document.writeln('<div class="col">')
    document.writeln('<div class="card mb-4">')
    document.writeln('<img src="img/def.jpg" class="card-img-top" alt="...">')
    document.writeln('<div class="card-body">')
    document.writeln('<h5 class="card-title">' + pg[i]["nama"] + '</h5>')
    document.writeln('<p class="card-text">Alamat: ' + pg[i]["alamat"] +' <br>Tarif: ' + pg[i]["tarif"] + '<br>Available: ' + pg[i]["wo"] +'</p>')
    document.writeln('<a href="https://api.whatsapp.com/send?phone=6282155534039&text=Hai%2C+Saya+ingin+menyewa+photograper+' + pg[i]["nama"] + '" class="btn btn-primary text-center mx-auto">Hubungi sekarang</a>')
    document.writeln('</div>')
    document.writeln('</div>')
    document.writeln('</div>')
}
