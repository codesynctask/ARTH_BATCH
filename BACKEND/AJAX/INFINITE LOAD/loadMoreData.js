const loadBtn = document.querySelector("button")
const table = document.querySelector("table")

let URL = "http://localhost/PHP-MVC%20-%20API/PUBLIC/account"
let offset = 0
let limit = 5


loadBtn.addEventListener('click', loadAccountRow)

async function loadAccountRow() {
    try {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ offset,limit })
        });

        const accountRowData = await res.json();
        let rowsHTML = "";

        accountRowData.forEach(row => {
            rowsHTML += `
                    <tr>
                        <td>${row.id}</td>
                        <td>${row.user_id}</td>
                        <td>${row.account_number}</td>
                        <td>${row.account_type}</td>
                        <td>${row.balance}</td>
                        <td>${row.status}</td>
                        <td>${row.created_at}</td>
                    </tr>`;
        });

        table.insertAdjacentHTML("beforeend", rowsHTML);
        offset += 5;

    } catch (error) {
        console.error(error);
    }
}



loadAccountRow()