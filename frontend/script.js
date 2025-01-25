

const greetForm = document.getElementById("greetForm");
const messageDiv = document.getElementById("message");

greetForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  try {
    // Make a POST request to the backend API
    const response = await fetch("http://localhost:3000/api/greet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch greeting");
    }

    const data = await response.json();

    // Display the greeting message
    messageDiv.textContent = data.message;
  } catch (error) {
    console.error(error);
    messageDiv.textContent = "An error occurred. Please try again.";
  }
});


const fetchUsersButton = document.getElementById("fetchUsers");

fetchUsersButton.addEventListener("click", async () => {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();
  data.map((user) => {
    messageDiv.innerHTML = "";
    messageDiv.innerHTML += `<p>Name: ${user.name}</br> Email: ${user.email}</p>`;
  });
});

