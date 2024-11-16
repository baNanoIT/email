require("dotenv").config(); // Carga variables de entorno
const mailjet = require("node-mailjet").apiConnect(
  process.env.MJ_APIKEY_PUBLIC,  // Tu clave pública
  process.env.MJ_APIKEY_PRIVATE  // Tu clave privada
);

const sendEmail = async () => {
  try {
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "jealsanchezto@ittepic.edu.mx",
            Name: "Jesus Alfredo",
          },
          To: [
            {
              Email: "joedgonzalezco@ittepic.edu.mx",
              Name: "Jorge Eduardo",
            },
          ],
          Subject: "Este es el asunto del correo",
          TextPart: "Este es el cuerpo del correo en texto plano",
          HTMLPart: "<h3>Este es el cuerpo del correo en HTML</h3>",
        },
      ],
    });
    console.log("Correo enviado:", request.body);
  } catch (error) {
    console.error("Error al enviar correo:", error);
  }
};

sendEmail();
