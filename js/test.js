function getValues() {
    var personalValues = {
        name: nameUs.value,
        email: emailIn.value,
        pass: passIn.value,
        confPass: confirmPass.value
    };

    var inputs = [nameUs, emailIn, passIn, confirmPass];

    // التحقق من الحقول الفارغة
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            inputs[i].classList.add('is-invalid');
            ofName.innerHTML = "You should not leave any Empty Input";
            return;
        } else {
            inputs[i].classList.remove('is-invalid');
        }
    }

    // التحقق من طول الاسم وكلمة المرور
    if (nameUs.value.length <= 3) {
        nameUs.classList.add('is-invalid');
        ofName.innerHTML = "Name must be longer than 3 characters";
        return;
    }
    if (passIn.value.length < 8) {
        passIn.classList.add('is-invalid');
        confirmPass.classList.add('is-invalid');
        ofName.innerHTML = "Password must be at least 8 characters long";
        return;
    }

    // التحقق من صحة كلمة المرور
    if (!myRegex.test(passIn.value)) {
        passIn.classList.add('is-invalid');
        confirmPass.classList.add('is-invalid');
        ofName.innerHTML = "The Password Must Include at least one Small and Captal Letter, and one of these [#@$%^&*] at least";
        return;
    }

    // التحقق من صحة البريد الإلكتروني
    if (!emailRegex.test(emailIn.value)) {
        emailIn.classList.add('is-invalid');
        ofName.innerHTML = "Email is not valid";
        return;
    }

    // التحقق من وجود البريد الإلكتروني
    if (excite(arrEmails, personalValues.email)) {
        emailIn.classList.add('is-invalid');
        ofName.innerHTML = "Email Already Exists";
        return;
    }

    // التحقق من تطابق كلمات المرور
    if (confirmPass.value !== passIn.value) {
        confirmPass.classList.add('is-invalid');
        ofName.innerHTML = "Passwords Do Not Match";
        return;
    }

    // إذا كانت جميع التحققيات صحيحة، إضافة القيم إلى التخزين المحلي
    arrEmails.push(personalValues);
    localStorage.setItem('arrEmails', JSON.stringify(arrEmails));
    ofName.style.display = "none";
    clearsignup();
    location.href = "http://127.0.0.1:5500/login.html";
}
