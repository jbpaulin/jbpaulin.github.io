document.addEventListener("DOMContentLoaded", function () {

    const signupBtn = document.getElementById("signup");
    const users = [];

    signupBtn.addEventListener("click", function () {
        const firstName = document.getElementById("firstname").value.trim();
        const middleName = document.getElementById("middlename").value.trim();
        const lastName = document.getElementById("lastname").value.trim();
        const gender = document.getElementById("gender").value;
        const birthday = document.getElementById("birthday").value;
        const idNumberRaw = document.getElementById("idnumber").value.trim();
        const idNumber = idNumberRaw.replace(/-/g, "");

        document.querySelectorAll(".error").forEach(e => e.textContent = "");

        let isValid = true;

        if (!firstName) {
            document.getElementById("firstnameError").textContent = "First name is required.";
            isValid = false;
        }
        if (!middleName) {
            document.getElementById("middlenameError").textContent = "Middle name is required.";
            isValid = false;
        }
        if (!lastName) {
            document.getElementById("lastnameError").textContent = "Last name is required.";
            isValid = false;
        }
        if (!gender) {
            document.getElementById("genderError").textContent = "Please select a gender.";
            isValid = false;
        }
        if (!birthday) {
            document.getElementById("birthdayError").textContent = "Please select your birthday.";
            isValid = false;
        }

        if (!/^\d+$/.test(idNumber)) {
            document.getElementById("idnumberError").textContent = "National ID must contain numbers only.";
            isValid = false;
        } else if (idNumber.length !== 12) {
            document.getElementById("idnumberError").textContent = "National ID must be exactly 12 digits.";
            isValid = false;
        }

        if (isValid) {
            const user = {
                fullName: `${firstName} ${middleName} ${lastName}`,
                gender: gender,
                birthday: birthday,
                idNumber: idNumber.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3")
            };

            users.push(user);

            document.getElementById("savedname").textContent = user.fullName;
            document.getElementById("savedgender").textContent = user.gender;
            document.getElementById("savedbirthday").textContent = user.birthday;
            document.getElementById("savedidnumber").textContent = user.idNumber;

            document.querySelector(".fillupform").style.display = "none";
            document.querySelector(".saved").style.display = "block";
        }
            console.log(users);
    });

    const button = document.querySelector(".fillupform button");
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "white";
        button.style.color = "#f0af25";
        button.style.border = "1px solid #f0af25";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#f0af25";
        button.style.color = "white";
        button.style.border = "none";
    });

    const footerItems = document.querySelectorAll("footer li");
    footerItems.forEach(item => {
        if (!item.querySelector("i")) {
            item.addEventListener("mouseover", () => {
                item.style.color = "#f0af25";
                item.style.cursor = "pointer";
            });
            item.addEventListener("mouseout", () => {
                item.style.color = "white";
            });
        }
    });

    document.querySelector(".saved").style.display = "none";

    const idInput = document.getElementById("idnumber");
    idInput.addEventListener("input", function () {
        let digits = idInput.value.replace(/\D/g, "");
        if (digits.length > 12) digits = digits.slice(0, 12);
        const formatted = digits.replace(/(\d{4})(\d{0,4})(\d{0,4})/, function (_, g1, g2, g3) {
            return [g1, g2, g3].filter(Boolean).join("-");
        });
        idInput.value = formatted;
    });
});
