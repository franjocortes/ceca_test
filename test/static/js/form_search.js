document.addEventListener("DOMContentLoaded", ev => {
    const form = document.getElementById("search_form");
    const responseDOM = document.getElementById("response");

    form.addEventListener("submit", ev => {
        ev.preventDefault();
        responseDOM.innerHTML = "";
        console.log(form.car_plate.value);
        console.log(location.href);

        let requestBody = {
            'car_plate': form.car_plate.value.toUpperCase()
        };

        // Method that completes the DOM according to the response
        const construct = (type, text = "") => {
            if (type === "ERROR") {
                responseDOM.innerHTML = `<div class="alert alert-danger" role="alert">
                                            <h4 class="alert-heading">Error</h4>
                                            <p>${text}</p>
                                         </div>`;
            }

            if (type === "EMPTY") {
                responseDOM.innerHTML = text;
                responseDOM.innerHTML = `<div class="card">
                                            <h5 class="card-header">Result of ${form.car_plate.value.toUpperCase()}</h5>
                                            <div class="card-body">
                                                <p>${text}</p>
                                            </div>
                                        </div>`;
            }

            if (type === "OK") {
                let cars = "";
                text.forEach(item => {
                    cars += `<li>${item.car_plate} - ${item.car_name}</li>`;
                });
                responseDOM.innerHTML = `<div class="card">
                                            <h5 class="card-header">Result of ${form.car_plate.value.toUpperCase()}</h5>
                                            <div class="card-body">
                                                <ul>
                                                    ${cars}
                                                </ul>
                                            </div>
                                        </div>`;
            }
        }

        // Ajax request
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
                construct("ERROR", response['body'].error);
            }).catch(error => {
                construct("ERROR", error);
            }
        );
    });
});