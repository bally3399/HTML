const form = document.forms["form"];
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    console.log(username);
    const password = document.querySelector(".password").value;

    const obj = {
        username: username,
        password: password
    }


    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:8090/api/User/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            const data1 = document.createElement('p');
            data1.classList = "success";
            form.appendChild(data1);
            if(result.successful) {
                document.querySelector('.success').textContent = result.data.message;
            }else{
                document.querySelector('.success').textContent = result.data;

            }

        } catch (error) {
            console.error("Error:", error);
            alert(error.message);
        }
    }
    postJSON(obj);

})