// Ini Javascript

// function replaceName() {
//     let name = prompt("Siapakah Nama Anda?", "");
//     document.getElementById("name").innerHTML = name
// }
// replaceName();

let nameInput = document.getElementById('nama') 
document.getElementById("submit").addEventListener("click", function() {
    const nm = nameInput.value 
    if (nm == ""){
        document.getElementById("error-name").innerHTML = "Nama Tidak Boleh Kosong!"
    } else {
        document.getElementById('nama').innerHTML = nama
    }
})

// Get current time and display
const currentTimeSpan = document.getElementById('current-time');
const now = new Date();
currentTimeSpan.textContent = now.toLocaleString(); // Displays time in local format


// Handle form submission (you'll need to add actual submission logic here)
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const nama = document.getElementById('nama').value;
  const tanggalLahir = document.getElementById('tanggal_lahir').value;
  const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
  const pesan = document.getElementById('pesan').value;

  // Display values in the message area (update the spans)
  document.getElementById('display-nama').textContent = nama;
  // ... (and so on for other fields)
});