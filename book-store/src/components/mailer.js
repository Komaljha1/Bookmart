import emailjs from 'emailjs-com';
const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_kz94zs9' ,
        'template_09xlclm' , 
        e.target,
        'YJNZ7oQvssK7IfFhe'
        ).then(res=>{
            console.log(res);
            //for redirecting to another pages
            // location.replace("")
        }).catch(err=> console.log(err))
        //to clear input form after submitting
        window.location.reload();
    }
    return (
        <div className="container border"
        style={{width:'100%', 
        backgroundImage: `url('https://image.shutterstock.com/image-illustration/gold-brown-abstract-background-design-260nw-529782700.jpg')` ,
        backgroundPosition:"center",
        backgroundSize: "cover",
         }}>

            <h1 style={{marginTop:'25px'}}>Contact Form</h1>
            <form className="row" 
                  style={{margin:"25px 85px 75px 100px"}} 
                  onSubmit={sendEmail} 
            >
                <label>Name</label>
                <input type="text" name="name" className="form-control"/>

                <label>Email</label>
                <input type="email" name="user_email" className="form-control"/>

                <label>Message</label>
                <textarea name='message' rows='4' className="form-control"/>
                <input type='submit' 
                       values='send' 
                       className="form-control btn btn-Dark"
                       style={{marginTop : "30px"}}
                
                />
            </form>
        </div>
    );
};

export default Mailer;