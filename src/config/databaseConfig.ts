import path from "path";
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const options = {
    //File System
    filesystem:{
        fileProductos:"productos.txt",
        fileCarritos:"carrito.txt"
    },
    //bd de productos
    mariaDB:{
        client:"mysql",
        connection:{
            host:"127.0.0.1",
            user:"root",
            password:"",
            database:"ecommerce"
        }
    },
    //bd de mensajes
    sqliteDB:{
        client:"sqlite",
        connection:{
            filename:path.join(__dirname,"../DB/ecommerce.sqlite")
        },
        useNullAsDefault:true
    },
    firebase:{
        urlDB:"https://ecommerce-35cdc.firebase.io",
        key:{
            type: "service_account",
            project_id: "ecommerce-35cdc",
            private_key_id: "b93b8b87e08b88329af22b2c51aa96e901b32b9f",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpF8hwBJW55l6e\nliGbqG4XA0yGINdmEQ5/ZbMaxA5TekaabUZfGf1/34yM6hVvNFzPltfd/TpdPCy2\nBl6PVnvnSyr0WqXiOqj9Q9enIt4QiDfLMYZ/ixg0KVcnXYLPQuVXxhb97nVKJV7B\nE14rvPxz647UqCSg086I7EMTKsbuJl4uBYu/QUgUQk0zmunnpUJqugRhbTrz/0CJ\n5NcQUDIdXfRB8c9XO64oepDeAXmJ0ByahybAkiX59IQjwevw9S41Z+ET1By00J0x\nrQjFkpnYB5RObR8e6Oi3TTGnKBymJ7B0fDbvzOZXP6kf2tLWU71ew3HQsun1Jtkf\nMpqTGwdbAgMBAAECggEASGFCzhhYUvP2aqHPDwdA4J7r4borGaiRcR0CVqG3lCoS\nEMZXyhug9FynmCYXOLvMQpvKGV7s3b4FUYFWdrrJXM9DOseWnEkJzyd8JzH4plD4\nuQShEvViTemoQdR4SunSrAjCDL5G/I8UiUcWF1jVI3WgdQzoaONhVCD18T1tW8Dj\nuF/xUi9MZqBRo5A8AyPq0lXBcmVIsi1XqCPVGAncE91MZv4r50tIlv+FifYiKulb\nRJEbPs1UBRFy1bG66XrzMbiplaxx9Y/M4MbW3BnzRfoDS4ITUolBrNt0NwaqK91N\n5RRyMYtI4SxcXoldPAw/GFlRcNeGndfRQRVZvk71YQKBgQDlPWswKbpclnvqozqo\nIRjUm65G9+N9NuZc+Mf8QwifCT4HqHfUoRGQCG/P8A0sy3KSbkKgXrGMiQD2ZBag\nbqo4+yYuWQTtpcHTtpIYEfGXZmKhNGS1nvdDNDZb5DroMdHh6lRkWE7T2k/rGzzF\n//m8TnlQLCUi0AW+FRPYoLZWSwKBgQC81O/wtD9Jr69w3WWnbmC3vfByf7viqmqz\niNTTBy6NFetEZOO+7PZCDyPxyJHcZeyw7hLKzooggV+HS62EHO+rJinU++3gYxjy\n7IxGMNDATWdue+RpyUWXQcIKF59J8xEjk9WuRaQH4ULOuAKyw5gX4/HQ4UHr//mg\noT5QwZepMQKBgFfTFAG7ut5F+OuH5a0MIQszKa2ewtTx94ee+F84/1COpekhLeeU\nXbokwVGU0jdbKmXXQEdYgAUrZ+b9qX2FaEm0TohrKmwxmPSXeZknJruuShMgk4TR\nhkGE+15xLfBPRe2bbQGUo36eoQedw8bHrtHp7qg8gW247LpKMPRJfhHJAoGBAJAa\nPAVHuGhmLw+FlVbhj+OIip8GRX6jqIvb5vYoK+k1CfaGu5pvQTqGTVrtQgqcqbUX\n6bVlStmlgR5BrWf9oRTOKexEWXL8jQSNajsCc7vdFgqld1kXZQkaAJctEb0gRjsN\nTWsR8CynRhF1MXH0e/P3WwmZbXJJRNnFU0XThwZxAoGASqCy3bOSuqFxVUtAwY7+\nDYFu7XYXV7LROiD9047W1+xcBBf3ixl4D2bwzyfX/ypv1K4BIbSNkOKJ6ZCC5U1r\n+CZz6iRyJhGwFLe82xwKcDocqGX7quTnhsahkp2UhTaNuPGBBo5TLzMekZ04nYJV\nTtpBNaNdCMrSBR3Wiq7nw4E=\n-----END PRIVATE KEY-----\n",
            client_email: "firebase-adminsdk-t21rt@ecommerce-35cdc.iam.gserviceaccount.com",
            client_id: "114154306922494275226",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-t21rt%40ecommerce-35cdc.iam.gserviceaccount.com"
          }
          
    },
    atlas:{
        urlDB:"mongodb+srv://pabfloresrojas:peZguh-komze4-fywvek@coder32175.04krs0z.mongodb.net/ecommerce?retryWrites=true&w=majority"
    }
};
