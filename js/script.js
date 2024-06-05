// Ini Javascript
//Sambut Pengunjung (Nama)
 function replaceName() {
     let name = prompt("Siapakah Nama Anda?", "");
     document.getElementById("name").innerHTML = name
 }
 replaceName();

// Untuk Setelah Submit dan Validasi Form
function showThanks() {
    document.getElementsByClassName('thanks-message')[0].style.display = 'flex';
}

//Memvalidasi Form Yang diisi dan menampilkan hasil
function formValidation() {
    let nameFormInput = document.getElementById('inputnama').value;
    let emailInput = document.getElementById('inputemail').value;
    let phoneInput = document.getElementById('inputnotelp').value;
    let dateInput = document.getElementById('inputtgllahir').value;
    let pesanInput = document.getElementById('inputpesan').value;
    let konfirmasi = false;
    if (nameFormInput == null || nameFormInput == '')  
        {
            alert('Mohon Masukkan Nama Lengkap');
            konfirmasi = false;
        }
        else
        {
            console.log(nameFormInput);

                if (emailInput == null || emailInput == '')  
                {
                    alert('Mohon Masukkan Email Anda');
                }
                else
                {
                    console.log(emailInput);
                    if (emailInput == null || emailInput == '')  
                        {
                            alert('Mohon Masukkan Email Anda');
                        }
                        else
                        {
                            console.log(emailInput);
                            if (phoneInput == null || phoneInput == '') 
                                {
                                    alert('Mohon Masukkan Nomor Telepon Anda');
                                }
                            else if (phoneInput.length < 11 || phoneInput.length > 13)
                                {
                                    alert('Mohon Masukkan Nomor Telepon dengan benar!');
                                }
                                else 
                                {
                                    console.log(phoneInput);
                                    if(dateInput == null || dateInput == '')
                                        {
                                            alert('Mohon Masukkan Tanggal Lahir Anda');
                                        }
                                        else 
                                        {
                                            console.log(dateInput);
                                            if (pesanInput == null || pesanInput == '')
                                                {
                                                    alert('Mohon Isi Kolom Pesan yang Telah Disediakan.');
                                                }
                                                else
                                                {
                                                    console.log(pesanInput);
                                                    konfirmasi = true;
                                                    if (konfirmasi = true)
                                                        {
                                                            showThanks();
                                                            resultForm();
                                                        }
                                                        else
                                                        {
                                                            alert('Mohon Cek Kembali Pengisian Form.')
                                                        }

                                                }
                                            
                                        }
                                }
                        }
                }
           
        }
        
}

//Banner di Section Home
var slideIndex = 1;
showDivs(slideIndex);

// pergantian gambar (auto slide)
function plusDivs(n) {
    showDivs(slideIndex += n);
}
//Looping banner
function showDivs(n) {
var i ;
var imgList = document.getElementsByClassName("img-slideshow");
if (n > imgList.length) slideIndex = 1;
else if (n < 1) slideIndex = imgList.length;
for(i = 0; i < imgList.length; i++) {
    imgList[i].style.display = 'none';
}
imgList[slideIndex - 1].style.display = 'block';
}

// interval autoslide
const intervalId = setInterval(() => {
    plusDivs(1);
  }, 5000);

  //function untuk menampilkan data setelah di submit
function resultForm() {
const currentTimeSpan = document.getElementById('current-time');
const now = new Date();
const nama = document.getElementById('inputnama').value;
const email = document.getElementById('inputemail').value;
const nomor = document.getElementById('inputnotelp').value;
const tanggalLahir = document.getElementById('inputtgllahir').value;
const jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
const pesan = document.getElementById('inputpesan').value;

currentTimeSpan.textContent = now.toLocaleString();
document.getElementById('display-nama').textContent = nama;
document.getElementById('display-email').textContent = email;
document.getElementById('display-notelp').textContent = nomor;
document.getElementById('display-tanggal').textContent = tanggalLahir;
document.getElementById('display-kelamin').textContent = jenisKelamin;
document.getElementById('display-pesan').textContent = pesan;

}