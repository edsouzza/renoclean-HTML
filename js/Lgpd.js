//Aqui seria colocado a url do seu site ao inves do exemplo abaixo
let lgpdURL = 'https://jsonplaceholder.typicode.com/posts'

let lgpdHtml = `
<div class="cookie-container " id="cookieContainer">
    <div class="areaMsgLgpd">
        <p class='msgLgpd'>Nós usamos cookies para garantir a melhor experiência em nosso site. Ao continuar navegando, você concorda com a nossa <a href="/assets/pdf/Politica-de-Cookies.pdf" target="_blank" rel="noreferrer noopener">Política de Cookies</a>.</p>            
        <button class="btnBlue btnAceitarCookiesLgpd"><i class="bi bi-check-lg iconHome"></i>Aceitar</button>                                        
    </div>
   
</div>
    <script src="js/Lgpd.js" defer></script> 
`

let lsContent = localStorage.getItem('lgpd')
if (!lsContent) {
    document.body.innerHTML += lgpdHtml

    let lgpdArea = document.querySelector('.cookie-container')
    let lgpdButton = lgpdArea.querySelector('button')

    lgpdButton.addEventListener('click', async () => {
        lgpdArea.remove()

        //Salvar os dados do visitante / dia / hora / ip ... 
        let result = await fetch(lgpdURL)
        let json = await result.json()
        if (json.error != '') {
            let id = '123'  //na pratica aqui ao inves do id manual seria json.id vindo da api
            localStorage.setItem('lgpd', id)
        }

        localStorage.setItem('lgpd', '123')
    })

}
