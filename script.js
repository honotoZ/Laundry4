const addbtns = document.querySelectorAll(".add-btn");
const removebtns = document.querySelectorAll(".remove-btn");
const tableBody = document.querySelector(".itemTable tbody");
const noAdded=document.querySelector("#addItem2");
const total=document.querySelector("#total");
let totalamount=0;
total.innerHTML=totalamount

document.querySelectorAll(".services").forEach((service) => {
  const addDiv = service.querySelector(".addDiv");
  const removeDiv = service.querySelector(".removeDiv");
  removeDiv.style.display = "none"; // start with remove hidden

  const serviceName = service.querySelector("span:nth-of-type(1)").innerText;
  const price = service.querySelector(".price").innerText;

  // ✅ Add click
  addDiv.addEventListener("click", () => {
    addDiv.style.display = "none";
    removeDiv.style.display = "flex";
    noAdded.style.display="none";
    totalamount=totalamount+parseInt(price);
    total.innerHTML=totalamount

    const rowNumber = tableBody.rows.length + 1;
    const row = tableBody.insertRow();
    row.dataset.service = serviceName;

    row.innerHTML = `
      <td>${rowNumber}</td>
      <td>${serviceName}</td>
      <td>${price}</td>
    `;
  });

  // ✅ Remove click
  removeDiv.addEventListener("click", () => {
    removeDiv.style.display = "none";
    addDiv.style.display = "flex";
    totalamount=totalamount-parseInt(price);
    total.innerHTML=totalamount

    // remove row with same serviceName
    for (let row of tableBody.rows) {
      if (row.dataset.service === serviceName) {
        row.remove();
        break;
      }
    }

    // re-number rows after removal
    [...tableBody.rows].forEach((row, index) => {
      row.cells[0].innerText = index + 1;
    });
  });
});

// ✅ Add Button for form
function btnclick() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message");

  if (!name || !email || !mobile) {
    message.style.color = "red";
    message.innerText = "Please fill in all fields.";
    return;
  }

  // Show success message
  message.style.color = "green";
  message.innerHTML = '<i class="fa-solid fa-circle-info"></i> Email has been sent successfully!';

  // Optional: clear input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
}

