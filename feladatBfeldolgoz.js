function elkuld() {
   
    let nev=document.getElementById('nevecske')
    let email=document.getElementById('useremail')
    piroskeretLevesz(nev)
    piroskeretLevesz(email)

    if (nev.value=="") {
        alert('Nem adott meg nevet, kérem próbálkozzon újra!')
        nev.classList.add('piros-keret')
        return
    }
    if (email.value=="") {
        alert('Nem adott meg e-mailt, kérem próbálkozzon újra!')
        email.classList.add('piros-keret')
        return
    }
    else    {
        if (!(email.value.includes('@') && email.value.includes('.'))) {
            alert('Hibás e-mail, kérem adjon meg érvényes e-mail címet!')
            email.classList.add('piros-keret')
            return
        }
    }

    alert("Rögzítettük jelentkezését! Várjuk sok szeretettel! :)")
    
    
}

function piroskeretLevesz(element)
{
    if (element.classList.contains('piros-keret')) {
        element.classList.remove('piros-keret')
    }
}

function valtozas() {
    let checkbox=document.getElementById('elfogad')
    let elkuldBtn= document.getElementById('elkuldBtn')
    if (checkbox.checked) {
        elkuldBtn.disabled=false;
    }
    else{
        elkuldBtn.disabled=true;
    }
}