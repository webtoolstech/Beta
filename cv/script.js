function create(){
    const template = document.getElementById("cv");
    template.style.visibility = "visible";
    const form = document.getElementById("form");
    form.parentNode.removeChild(form);
    const name_in = document.getElementById("nameINPUT");
    const tel_in = document.getElementById("telINPUT");
    const mail_in = document.getElementById("mailINPUT");
    const web_in = document.getElementById("webINPUT");
    const img_in = document.getElementById("imgINPUT");
    const input_experience = document.getElementById("input_experience");
    const input_education = document.getElementById("input_education");
    const input_Communication = document.getElementById("input_Communication");
    const input_Leadership = document.getElementById("input_Leadership");
    const input_References = document.getElementById("input_References");
    const name = document.getElementById("name");
    const phone = document.getElementById("Phone");
    const Email = document.getElementById("Email");
    const web = document.getElementById("web");
    const img = document.getElementById("img");
    const Experience = document.getElementById("Experience");
    const Education = document.getElementById("Education");
    const Communication = document.getElementById("Cummunication");
    const Leadership = document.getElementById("Leadership");
    const References = document.getElementById("References");

    //console
    console.log(name)
    console.log(tel)
    console.log(mail)
    console.log(web)
    console.log(img)
    console.log(input_experience)
    console.log(input_education)
    console.log(input_Communication)
    console.log(input_Leadership)
    console.log(input_References)
    //create
    let elementName = document.createElement('h1')
    elementName.value = "none"
    document.appendChild(elementName)

}