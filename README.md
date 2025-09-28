# SplitSavr – Expense Splitter with Greedy Reconciliation Engine

**SplitSavr** is a simple yet smart expense-splitting web application that minimizes the number of transactions between friends using a **greedy algorithm**. It showcases how algorithmic logic (like debt graph reduction) can be applied in a real-world, user-friendly full-stack project.

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Algorithm**: Greedy Algorithm for transaction minimization  
- **Database**: None (in-memory logic, can be extended)

---

## 🚀 Features

- ✅ Input multiple names and total expense  
- ✅ Greedy logic simplifies transactions among users  
- ✅ Clean and lightweight UI  
- ✅ No database required — logic runs entirely on backend memory  
- ✅ One-click result output for "who owes whom"

---

## 📁 File Structure
├── index.html # Frontend form
├── styles.css # Styling
├── script.js # Frontend logic (form + fetch)
├── package.json # Dependencies


---

## 📦 How to Run Locally

1. **Install dependencies**
   ```bash
   npm install
   node server.js


Open in browser
http://localhost:3000

🔮 Future Enhancements

Add support for custom paid amounts per person

Save and fetch split history

Add transaction summary PDF export

User authentication and group splitting

Also add backend(Node.js)


