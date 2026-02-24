const QRLogo = require('qr-with-logo');


async function generateQRWithLogo() {
    const data = JSON.stringify({name: "Zacharie Happel",
                job:  "Student/Intern", 
                grade: "Senior"
    })
    
    await QRLogo.generateQRWithLogo(data, "images.png", {}, "PNG", "qrlogo.png") 
}

generateQRWithLogo()