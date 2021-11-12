submitForm = () => {
    username = document.getElementById("username").value.toLowerCase()
    email = document.getElementById("email").value.toLowerCase()
    password = document.getElementById("password").value
    cPassword = document.getElementById("cPassword").value
    emailRegex = function( email ) {
        return email.length < 256 && /^[^@]+@[^@]{2,}\.[^@]{2,}$/.test(email);
    };
    login = null

    formData = [username,email,password,cPassword]

    for(var i = 0; i < formData.length; i++) {
        // console.log(formData[i].value



        
            
        if(formData[i] == "") {
            swal({
                title: "",
                text: "Empty fields found",
                icon: "error"
            })
            break;
        }

        else if(formData[0].includes(" ")) {
                swal({
                    title:"invalid username",
                    icon: "warning"
                })
            }

        else if(formData[1] == "") {
            swal( {
                text:"no input form email",
                icon : "warning"
            })
        }
        else if(! /(.+)@(.+){2,}\.(.+){2,}/.test(formData[1]) ){
            swal({
                title : "Invalid email",
                icon:"warning"
            })
        }

        else if(formData[2] == ""){
            swal({
                text:"no input for password",
                icon: "warning"
            })
        }

        else if(formData[2].length < 6){
            swal({
                text:"Password is too short",
                icon: "warning"
            })
        }
        else if(formData[2] != formData[3]){
            swal({
                title : "Passwords didnt match",
                icon: "warning"
            })
        }

        else{

            $(document).ready(function() {
                setTimeout(function() {
                    swal({
                        title: "Success",
                        text:"You have successfully registered",
                        icon:"success",
                        button : `login now `
                    }).then(()=> {
                        $("form").trigger("reset")
                        window.location = "https://www.linkme.com.ng"
                    })
                },500)
                });


            
            
            
        }
    }

}