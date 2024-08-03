
import express from 'express';

const servidor = express();
servidor.use(express.json());

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

//parâmetro  de rota.
servidor.get('/calculadora/soma/:n1/:n2', (req, resp) => {

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;
    resp.send('a soma é ' + soma)
})

//parâmetro  de query.
servidor.get('/mensagem/ola', (req, resp) => {

    let nome = req.query.nome ?? 'não definiu o parametro';
    resp.send('ola ' + nome)
})

//parâmetro  de corpo com objeto.
servidor.post('/media', (req, resp) => {
    let n1 = req.body.nota1;
    let n2 = req.body.nota2;
    let n3 = req.body.nota3;

    let media = (n1 + n2 + n3) / 3;
    resp.send('a media é ' + media.toFixed(2));
})

//parâmetro  de corpo com Vetor.
servidor.post('/dobro', (req, resp) =>{
    let nums = req.body.numero1;

    let nums2 = [];
    for(let i = 0; i < nums.length; i++) {
        nums2[i] = nums[i] * 2;
    }

    resp.send("o dobro dos numeros são " + nums2);
})


servidor.listen(5001, () => console.log('api subida com sucesso'));