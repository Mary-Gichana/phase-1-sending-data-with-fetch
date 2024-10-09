function submitData(username, useremail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: username,
      email: useremail,
    }),
  })
    .then((response) => response.json())
    .then((Object) => {
      const p = document.createElement("p");
      p.textContent = `User ID: ${Object.id}`;
      document.body.appendChild(p);
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.textContent = `Error: ${error.message}`;
      document.body.appendChild(p);
    });
}
