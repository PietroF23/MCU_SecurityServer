let isSafeOpen = false;
  let isAlarmOn = false;
  const statusText = document.getElementById('statusText');
  const alarmButton = document.getElementById('alarmToggleButton');
  const alarmIcon = document.getElementById('alarmIcon');
  const logTable = document.getElementById('logTable').getElementsByTagName('tbody')[0];

  function updateStatus() {
    const statusElement = document.getElementById('status');
    statusText.textContent = isSafeOpen ? 'Aperta' : 'Chiusa';
    statusText.className = isSafeOpen ? 'open' : 'closed';
    statusElement.className = isSafeOpen ? 'status open' : 'status closed';
  }

  function addToLog(action) {
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    const newRow = logTable.insertRow(0);
    const dateCell = newRow.insertCell(0);
    const timeCell = newRow.insertCell(1);
    const alarmStatusCell = newRow.insertCell(2); // Cell per stato allarme
    const actionCell = newRow.insertCell(3);

    dateCell.textContent = date;
    timeCell.textContent = time;
    alarmStatusCell.textContent = isAlarmOn ? 'Attivo' : 'Non Attivo'; // Mostra lo stato attuale dell'allarme
    alarmStatusCell.classList.add(isAlarmOn ? 'alarm-active' : 'alarm-inactive'); // Colore testo in base allo stato allarme
    alarmStatusCell.classList.add('alarm-log-cell'); // Aggiungi classe per lo stile
    actionCell.textContent = action;
    actionCell.classList.add(isSafeOpen ? 'open-log-action' : 'closed-log-action'); // Aggiunta della classe per il colore del testo
  }

  function toggleSafe() {
    isSafeOpen = !isSafeOpen;
    updateStatus();
    const action = isSafeOpen ? 'Aperta' : 'Chiusa';
    addToLog(action);
    if (isAlarmOn && isSafeOpen) {
      triggerAlarm();
    }
  }

  function toggleAlarm() {
    isAlarmOn = !isAlarmOn;

    if (isAlarmOn) {
      alarmButton.textContent = 'Disattiva Allarme Cassaforte';
      alarmButton.classList.remove('alarm-off');
      alarmButton.classList.add('alarm-on');
      alarmIcon.classList.remove('shield-icon', 'active-shield');
      alarmIcon.classList.add('inactive-shield');
      
    } else {
      alarmButton.textContent = 'Allarma Cassaforte';
      alarmButton.classList.remove('alarm-on');
      alarmButton.classList.add('alarm-off');
	  alarmIcon.classList.remove('shield-icon', 'alarm-off', 'inactive-shield');
      alarmIcon.classList.add('active-shield');
    }
  }

  function triggerAlarm() {
    // Simulazione di un allarme quando la cassaforte è aperta e l'allarme è attivo
    alert('Cassaforte aperta mentre l\'allarme è attivo!');
  }

  // Simulazione di un evento di apertura/chiusura (puoi rimuovere questo blocco nella versione finale)
  setInterval(() => {
    toggleSafe();
  }, 5000); // Simula l'apertura/chiusura della cassaforte ogni 5 secondi</script>
