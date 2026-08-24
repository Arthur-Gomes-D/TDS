class CanalNotificacao{
    enviar(destinario:string, mensagem: string):void{
        console.log(`${mensagem} → ${destinario}`);
    }
}
class EmailNotificacao extends CanalNotificacao{
    override enviar(destinario:string, mensagem:string):void{
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log(`${mensagem} enviado por ${destinario}`);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        
    }
}
class SMSNotificacao extends CanalNotificacao{
    override enviar(destinario:string, mensagem:string):void{
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log(`nova mensagem`);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        
    }
}
class PushNotificacao extends CanalNotificacao{
    override enviar(destinario:string, mensagem:string):void{
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log(`${mensagem} → ${destinario}`);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        
    }
}
class CentralNotificacoes{
    dispararEmMassa(canais: CanalNotificacao[], destinario:string, msg:string):void{
        for (const canal of canais) {
            canal.enviar(destinario, msg)
        }
    }
}
const canais = [new EmailNotificacao(), new SMSNotificacao(), new PushNotificacao()]

let central = new CentralNotificacoes();

central.dispararEmMassa(canais, "aaaa@email.com", "a gfdgdios")