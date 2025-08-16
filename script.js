document.addEventListener("DOMContentLoaded", () => {

  const seeBtn = document.getElementById("seeResult");
  const saveBtn = document.getElementById("saveResult");
  const printBtn = document.getElementById("printResult");
  const resultArea = document.getElementById("resultArea");

  if(seeBtn){
    seeBtn.addEventListener("click", () => {
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const gender = document.getElementById("gender").value;
      const address = document.getElementById("address").value;
      const date = document.getElementById("date").value;
      const note = document.getElementById("note").value;

      let bloodViscosity = document.querySelector('input[name="blood_viscosity"]:checked');
      let bloodViscosityNote = document.querySelector('input[name="blood_viscosity_note"]').value;
      let bloodFat = document.querySelector('input[name="blood_fat"]:checked');
      let bloodFatNote = document.querySelector('input[name="blood_fat_note"]').value;

      let resultText = `Name: ${name}\nAge: ${age}\nGender: ${gender}\nAddress: ${address}\nDate: ${date}\nNote: ${note}\n`;
      resultText += `Blood Viscosity: ${bloodViscosity ? bloodViscosity.value : 'Not selected'}\n  Note: ${bloodViscosityNote}\n`;
      resultText += `Blood Fat: ${bloodFat ? bloodFat.value : 'Not selected'}\n  Note: ${bloodFatNote}\n`;

      resultArea.textContent = resultText;
    });
  }

  if(saveBtn){
    saveBtn.addEventListener("click", () => {
      const name = document.getElementById("name").value;
      if(!name) return alert("Name required to save");
      localStorage.setItem(`client_${name}`, resultArea.textContent);
      alert("Result saved!");
    });
  }

  if(printBtn){
    printBtn.addEventListener("click", () => {
      let printWindow = window.open('', '', 'height=600,width=800');
      printWindow.document.write('<pre>' + resultArea.textContent + '</pre>');
      printWindow.document.close();
      printWindow.print();
    });
  }

  // --- History Page ---
  const historyList = document.getElementById("historyList");
  const historyDetail = document.getElementById("historyDetail");

  if(historyList){
    historyList.innerHTML = '';
    for(let i=0; i<localStorage.length; i++){
      const key = localStorage.key(i);
      if(key.startsWith("client_")){
        const name = key.replace("client_","");
        const item = document.createElement("div");
        const btn = document.createElement("button");
        btn.textContent = "View";
        btn.addEventListener("click", ()=>{
          historyDetail.textContent = localStorage.getItem(key);
        });
        item.textContent = name + " ";
        item.appendChild(btn);
        historyList.appendChild(item);
      }
    }
  }

});

