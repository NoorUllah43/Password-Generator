let G_pw = document.getElementById('G-pw');
let pw_input = document.getElementById('pw-input');
let Pw_range = document.getElementById('Pw-range');
let copy = document.getElementById('pw-con');


G_pw.addEventListener('click', generate_pw)
copy.addEventListener('click', copy_pw);

function generate_pw(){
    let range = Pw_range.value;
    let text = "abcdefghijklmnopqrstuvwxyz1234567890@#$%&*"
    let pa = Math.random() * text.length;
    let password = ''
    for (let i = 0; i < range; i++) {
        let pa = Math.random() * text.length;
        password += text.charAt(pa)
    }
    pw_input.value = password;
}

function copy_pw(){
    pw_input.select();
    pw_input.execCommand("cut");
    
}
