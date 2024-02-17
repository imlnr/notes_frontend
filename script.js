const baseurl = "https://odd-jade-rhinoceros-sari.cyclic.app";

const handleDashboard = () => {
  fetch(`${baseurl}/notes`, {
    method:'GET',
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.notes.forEach((item) => {
        document.getElementById("title").innerHTML = item.title;
        document.getElementById("body").innerHTML = item.body;
      });
    })
    .catch((error) => console.log(error));
};

handleDashboard();

//patch
