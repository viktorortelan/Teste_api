
import express from 'express';

const servidor = express();

servidor.get('/helloworld', (req, resp) => {
    //codigo do endpoint
    resp.send('hello world')
});

servidor.get('/mensagem/boasvindas', (req, resp) => {
    resp.send('ola, sejam bem-vindos')
})

servidor.get('/v2/mensagem/boasvindas', (req, resp) => {
    resp.send('ola, sejam bem-vindos usuarios de iphone')
})

servidor.listen(5001, () => console.log('api subida com sucesso'));