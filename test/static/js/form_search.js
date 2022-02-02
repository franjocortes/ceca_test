document.addEventListener("DOMContentLoaded", ev => {
    const form = document.getElementById("search_form");
    const responseDOM = document.getElementById("response");

    form.addEventListener("submit", ev => {
        ev.preventDefault();
        responseDOM.innerHTML = "";
        console.log(form.car_plate.value);
        console.log(location.href);

        let requestBody = {
            'car_plate': form.car_plate.value
        };

        const construct = (type, text = "") => {
            if (type === "ERROR") {
                responseDOM.innerHTML = "ERRORRRR";
            }

            if (type === "EMPTY") {
                responseDOM.innerHTML = text;
            }

            if (type === "OK") {
                text.forEach(item => responseDOM.innerHTML += item.car_name);
                // responseDOM.innerHTML = text.car_name;
            }
        }

        sendHttpAsync(location.href, "POST", requestBody)
            .then(response => {
                console.log(response['body']);
                if (!response['body'].hasOwnProperty("error")) {
                    if (response['body'].length === 0) {
                        construct("EMPTY", "No record has been found with licence plate number " + form.car_plate.value);
                    } else {
                        construct("OK", response["body"]);
                    }
                    return false;
                }
                responseDOM.innerHTML = response['body'].error;
            }).catch(error => {
                responseDOM.innerHTML = error;
            }
        );
    });
});