var fvl = document.getElementsByClassName("form-validation-log")[0],
    formInputs = document.querySelectorAll("input, textarea"),
    i =0, curInput;

function logInvalidInput(e){
    fvl.innerHTML = "Invalid Data! :< :<br/>" + 
                    "Field: " + e.target.id + "<br/>" +
                    "patternMismatch: " + e.target.validity.patternMismatch + "<br/>" +
                    "rangeOverflow: " + e.target.validity.rangeOverflow + "<br/>" +
                    "rangeUnderflow: " + e.target.validity.rangeUnderflow + "<br/>" +
                    "typeMismatch: " + e.target.validity.typeMismatch + "<br/>" +
                    "stepMismatch: " + e.target.validity.stepMismatch + "<br/>" +
                    "tooLong: " + e.target.validity.tooLong + "<br/>" +
                    "valueMissing: " + e.target.validity.valueMissing + "<br/>" +
                    "customError: " + e.target.validity.customError + "<br/>" +
                    "validationMessage : " + e.target.validationMessage + "<br/>"
                    ;
}

function logChangeInput(e){
    if (e.target.validity.valid) {
        //Field contains valid data.
        flv.innerHTML = "Valid Data!!!";
    } else {
        //Field contains invalid data.
        logInvalidInput(e);
    }
}

for(i = 0; i < formInputs.length - 1; i++){

    curInput = formInputs[i];

    curInput.addEventListener("invalid", logInvalidInput, false);
    curInput.addEventListener("change", logChangeInput, false);

}

function checkFeeling(input) {
                if (input.value == "good" ||
                  input.value == "fine" ||
                  input.value == "tired") {
                    input.setCustomValidity('"' + input.value + '" is not a feeling.');
                    input.checkValidity();
                    input.oninvalid();
                } else {
                    // input is fine -- reset the error message
                    input.setCustomValidity('');
                }
            }


            document.getElementById("yourmood").addEventListener("change", function (e) {

                checkFeeling(e.target);

            }, false);