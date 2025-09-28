let data = [];

function addEntry() {
  const name = document.getElementById("name").value.trim();
  const amount = parseFloat(document.getElementById("amount").value.trim());

  if (!name || isNaN(amount)) {
    alert("Enter valid name and amount");
    return;
  }

  data.push({ name, amount });
  document.getElementById("entries").innerHTML += `<li>${name} paid ₹${amount}</li>`;
  document.getElementById("name").value = '';
  document.getElementById("amount").value = '';
}

function calculateSplit() {
  if (data.length === 0) {
    alert("Add at least one entry");
    return;
  }

  const total = data.reduce((sum, person) => sum + person.amount, 0);
  const perPerson = total / data.length;

  let balanceMap = new Map();
  data.forEach(person => {
    const net = person.amount - perPerson;
    balanceMap.set(person.name, parseFloat(net.toFixed(2)));
  });

  const transactions = [];

  let debtors = [...balanceMap.entries()].filter(([_, val]) => val < 0).sort((a, b) => a[1] - b[1]);
  let creditors = [...balanceMap.entries()].filter(([_, val]) => val > 0).sort((a, b) => b[1] - a[1]);

  while (debtors.length && creditors.length) {
    let [dName, dAmt] = debtors[0];
    let [cName, cAmt] = creditors[0];

    let minAmt = Math.min(-dAmt, cAmt);
    transactions.push(`${dName} pays ₹${minAmt.toFixed(2)} to ${cName}`);

    dAmt += minAmt;
    cAmt -= minAmt;

    if (Math.abs(dAmt) > 0.01) debtors[0][1] = dAmt;
    else debtors.shift();

    if (cAmt > 0.01) creditors[0][1] = cAmt;
    else creditors.shift();
  }

  document.getElementById("results").innerHTML = `
    <h3>Results</h3>
    ${transactions.length === 0 ? "All expenses are balanced!" : "<ul>" + transactions.map(t => `<li>${t}</li>`).join('') + "</ul>"}
  `;
}
