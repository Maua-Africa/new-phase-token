const MPESA_URL = "https://api.tokenDELIQUENT.com/api/v1";

const mpesaBtn = document.querySelector("#mpesa-submit");

mpesaBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const phoneNumber = document.getElementById("phone").value;
  const amount = document.getElementById("amount").value;

  const payload = {
    fullname,
    phoneNumber,
    amount: parseInt(amount),
  };

  await axios
    .post(`${MPESA_URL}/mpesa/stk`, payload, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        swal({
          title: "M-Pesa Processed",
          text: "A push will show prompting you to enter your M-pesa pin to finish the payment",
          icon: "success",
        });
      }
    })
    .catch((e) => {
      const response = e.response;
      if (response.status !== 200) {
        swal({
          text: "An error accured. Pleas try again later",
          icon: "error",
        });
      }
    });
});
