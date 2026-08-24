"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CanalNotificacao {
    enviar(destinario, mensagem) {
        console.log(`${mensagem} → ${destinario}`);
    }
}
class EmailNotificacao extends CanalNotificacao {
    enviar(destinario, mensagem) {
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log(`${mensagem} enviado por ${destinario}`);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }
}
class SMSNotificacao extends CanalNotificacao {
    enviar(destinario, mensagem) {
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log(`nova mensagem`);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }
}
class PushNotificacao extends CanalNotificacao {
    enviar(destinario, mensagem) {
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log(`${mensagem} → ${destinario}`);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }
}
class CentralNotificacoes {
    dispararEmMassa(canais, destinario, msg) {
        for (const canal of canais) {
            canal.enviar(destinario, msg);
        }
    }
}
const canais = [new EmailNotificacao(), new SMSNotificacao(), new PushNotificacao()];
let central = new CentralNotificacoes();
central.dispararEmMassa(canais, "aaaa@email.com", "a gfdgdios");
