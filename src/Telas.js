import React, {useState} from "react";
import './Telas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input } from 'reactstrap';

export default function Telas() {
    const [itemA, setItemA] = useState(0)
    const [itemB, setItemB] = useState(0)
    const [itemC, setItemC] = useState(0)
    const [itemD, setItemD] = useState(0)
    const [itemE, setItemE] = useState(0)
    const [itemF, setItemF] = useState(0)
    const [itemG, setItemG] = useState(0)
    const [itemH, setItemH] = useState(0)
    const [itemI, setItemI] = useState(0)
    const [itemJ, setItemJ] = useState(0)
    const [itemK, setItemK] = useState(0)
    const [itemL, setItemL] = useState(0)
    const [itemM, setItemM] = useState(0)
    const [itemN, setItemN] = useState(0)
    const [itemO, setItemO] = useState(0)
    const [itemP, setItemP] = useState(0)
    const [itemQ, setItemQ] = useState(0)
    const [itemR, setItemR] = useState(0)
    const [itemS, setItemS] = useState(0)
    const [itemT, setItemT] = useState(0)
    return (
        <div id="principal">
            <div id="alto">
                <img id="logo" src="https://media.discordapp.net/attachments/870417386245861396/901292860450693151/redondo-emPNG.png"/>
                <h2 id="compras"><i><b>Efetue sua Compra</b></i></h2>
                    <p className="total">
                    <i><b>R$ {itemA * 18.00}</b></i>
                    </p>
                    <p className="total1">
                    <i><b>R$ {itemB * 25.00}</b></i>
                    </p>
                    <p className="total2">
                    <i><b>R$ {itemC * 15.89}</b></i>
                    </p>
                    <p className="total3">
                    <i><b>R$ {itemD * 15.90}</b></i>
                    </p>
                    <p className="total4">
                    <i><b>R$ {itemE * 10.99}</b></i>
                    </p>
                    <p className="total5">
                    <i><b>R$ {itemF * 25.90}</b></i>
                    </p>
                    <p className="total6">
                    <i><b>R$ {itemG * 12.99}</b></i>
                    </p>
                    <p className="total7">
                    <i><b>R$ {itemH * 9.90}</b></i>
                    </p>
                    <p className="total8">
                    <i><b>R$ {itemI * 23.00}</b></i>
                    </p>
                    <p className="total9">
                    <i><b>R$ {itemJ * 10.50}</b></i>
                    </p>
                    <p className="total10">
                    <i><b>R$ {itemK * 2.90}</b></i>
                    </p>
                    <p className="total11">
                    <i><b>R$ {itemL * 15.50}</b></i>
                    </p>
                    <p className="total12">
                    <i><b>R$ {itemM * 15.99}</b></i>
                    </p>
                    <p className="total13">
                    <i><b>R$ {itemN * 4.50}</b></i>
                    </p>
                    <p className="total14">
                    <i><b>R$ {itemO * 7.00}</b></i>
                    </p>
                    <p className="total15">
                    <i><b>R$ {itemP * 17.00}</b></i>
                    </p>
                    <p className="total16">
                    <i><b>R$ {itemQ * 150.00}</b></i>
                    </p>
                    <p className="total17">
                    <i><b>R$ {itemR * 120.00}</b></i>
                    </p>
                    <p className="total18">
                    <i><b>R$ {itemS * 8.99}</b></i>
                    </p>
                    <p className="total19">
                    <i><b>R$ {itemT * 11.50}</b></i>
                    </p>
            </div>
            <div id="produtos">
                <p id="prod"><i><b>Produtos</b></i></p>
                <p id="quantidade"><i><b>Quantidade</b></i></p>
                <p id="total"><i><b>Total</b></i></p>
                <br/>
                <input type="number" id="quant1" min="1"value={itemA} onChange={(e) => setItemA(e.target.value)}/>
                <br/>
                <img id="base" src="https://media.discordapp.net/attachments/870417386245861396/906872208507404378/base.png?width=586&height=586"/>
                <br/>
                <p id="liq"><i><b>Base Líquida</b></i></p>
                <br/>
                <input type="number" id="quant2" min="1"value={itemB} onChange={(e) => setItemB(e.target.value)}/>
                <br/>
                <img id="corretivo" src="https://avongroup.vteximg.com.br/arquivos/ids/167502/1339389--1-.jpg?v=637408199797800000"/>
                <br/>
                <p id="corretivo1"><i><b>Corretivo Líquido</b></i></p>
                <br/>
                <input type="number" id="quant3" min="1"value={itemC} onChange={(e) => setItemC(e.target.value)}/>
                <br/>
                <img id="delineador" src="https://cdn.iset.io/assets/51734/produtos/1570/thumb_300-300-delineador-liquido-ruby-01liquido.jpg"/>
                <br/>
                <p id="delineador1"><i><b>Delineador Líquido</b></i></p>
                <br/>
                <input type="number" id="quant4" min="1"value={itemD} onChange={(e) => setItemD(e.target.value)}/>
                <br/>
                <img id="po" src="https://www.drogariaminasbrasil.com.br/media/product/bf5/po-compacto-matte-mineral-medio-payot-10g-980.jpg"/>
                <br/>
                <p id="po1"><i><b>Pó Compacto</b></i></p>
                <br/>
                <input type="number" id="quant5" min="1"value={itemE} onChange={(e) => setItemE(e.target.value)}/>
                <br/>
                <img id="batom" src="https://www.florenza.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/b/a/batom-ovo-vivai-capa.jpg"/>
                <br/>
                <p id="batom1"><i><b>Batom Matte</b></i></p>
                <br/>
                <input type="number" id="quant6" min="1"value={itemF} onChange={(e) => setItemF(e.target.value)}/>
                <br/>
                <img id="iluminador" src="https://www.florenza.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/p/a/paleta_4_glow_1.png"/>
                <br/>
                <p id="iluminador1"><i><b>Paleta de Iluminador</b></i></p>
                <br/>
                <input type="number" id="quant7" min="1"value={itemG} onChange={(e) => setItemG(e.target.value)}/>
                <br/>
                <img id="rimel" src="https://images.tcdn.com.br/img/img_prod/903923/mascara_rimel_maximo_alongamento_a_prova_dagua_8ml_13_1_cd3863e0c1c2ad98f7676c1812dbebd8_20210804115133.png"/>
                <br/>
                <p id="rimel1"><i><b>Rimel a Prova D'água</b></i></p>
                <br/>
                <input type="number" id="quant8" min="1"value={itemH} onChange={(e) => setItemH(e.target.value)}/>
                <br/>
                <img id="gel" src="https://epocacosmeticos.vteximg.com.br/arquivos/ids/330993-320-320/6270-2.jpg?v=636904132162770000"/>
                <br/>
                <p id="gel1"><i><b>Gel para Sobrancelhas</b></i></p>
                <br/>
                <input type="number" id="quant9" min="1"value={itemI} onChange={(e) => setItemI(e.target.value)}/>
                <br/>
                <img id="agua" src="https://a-static.mlcdn.com.br/618x463/agua-micelar-hidraderm-200ml-farmax/drogariaeperfumariafonseca/317p/2c619227740b0bd5a9fba4b07889651e.jpg"/>
                <br/>
                <p id="agua1"><i><b>Água Micelar 200ml</b></i></p>
                <br/>
                <input type="number" id="quant10" min="1"value={itemJ} onChange={(e) => setItemJ(e.target.value)}/>
                <br/>
                <img id="blush" src="https://lojamaurobijouterias.com.br/image/cache/catalog/blush-chandelle-perolado-mauro-bijouterias%20(1)-500x500.png"/>
                <br/>
                <p id="blush1"><i><b>Blush</b></i></p>
                <br/>
                <input type="number" id="quant11" min="1"value={itemK} onChange={(e) => setItemK(e.target.value)}/>
                <br/>
                <img id="olho" src="https://lojamaurobijouterias.com.br/image/cache/catalog/lapis-preto-esfumador-com-apontador-dapop1-maurobijouterias-900x900.jpg"/>
                <br/>
                <p id="olho1"><i><b>Lápis de Olho</b></i></p>
                <br/>
                <input type="number" id="quant12" min="1"value={itemL} onChange={(e) => setItemL(e.target.value)}/>
                <br/>
                <img id="sombra" src="https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1633021681"/>
                <br/>
                <p id="sombra1"><i><b>Paleta de Sombras</b></i></p>
                <br/>
                <input type="number" id="quant13" min="1"value={itemM} onChange={(e) => setItemM(e.target.value)}/>
                <br/>
                <img id="kit" src="https://www.revendadecosmeticos.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/c/_/c_lios-posti_os-macrilan-2.jpg"/>
                <br/>
                <p id="kit1"><i><b>Kit Cílios Postiços</b></i></p>
                <br/>
                <input type="number" id="quant14" min="1"value={itemN} onChange={(e) => setItemN(e.target.value)}/>
                <br/>
                <img id="esponja" src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/063/583/products/pl021-29bba27f28515c225515965741525885-640-0.png"/>
                <br/>
                <p id="esponja1"><i><b>Esponja de Maquiagem</b></i></p>
                <br/>
                <input type="number" id="quant15" min="1"value={itemO} onChange={(e) => setItemO(e.target.value)}/>
                <br/>
                <img id="curvex" src="https://d358a814b78lcf.cloudfront.net/Custom/Content/Products/10/07/1007118_curvex-para-cilios-hello-mini-8485_m2_637254915948634379.jpg"/>
                <br/>
                <p id="curvex1"><i><b>Curvex para Cílios</b></i></p>
                <br/>
                <input type="number" id="quant16" min="1"value={itemP} onChange={(e) => setItemP(e.target.value)}/>
                <br/>
                <img id="paleta" src="https://d16t0x76yczyds.cloudfront.net/Custom/Content/Products/10/03/1003283_paleta-de-contorno-powder-artist-3d-ruby-kisses_m6_636413381459149564.jpg"/>
                <br/>
                <p id="paleta1"><i><b>Paleta de Contorno</b></i></p>
                <br/>
                <input type="number" id="quant17" min="1"value={itemQ} onChange={(e) => setItemQ(e.target.value)}/>
                <br/>
                <img id="maleta" src="https://www.alboradainfo.com/image/cache/produto/1791/15d89da1e58f4e7699118e0b7d571266.jpg"/>
                <br/>
                <p id="maleta1"><i><b>Maleta de Sombras</b></i></p>
                <br/>
                <input type="number" id="quant18" min="1"value={itemR} onChange={(e) => setItemR(e.target.value)}/>
                <br/>
                <img id="colecao" src="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1114923417"/>
                <br/>
                <p id="colecao1"><i><b>Coleção de Pínceis</b></i></p>
                <br/>
                <input type="number" id="quant19" min="1"value={itemS} onChange={(e) => setItemS(e.target.value)}/>
                <br/>
                <img id="gloss" src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/456/9826f37e-79dd-4c37-aace-7ebb774ef98d-gloss18.jpg"/>
                <br/>
                <p id="gloss1"><i><b>Gloss Labial</b></i></p>
                <br/>
                <input type="number" id="quant20" min="1"value={itemT} onChange={(e) => setItemT(e.target.value)}/>
                <br/>
                <img id="primer" src="https://dozlxztiddv53.cloudfront.net/Custom/Content/Products/10/20/1020440_primer-fluido-vult_m1_636753705999586183.jpg"/>
                <br/>
                <p id="primer1"><i><b>Primer Fluido</b></i></p>
            </div>
            <div id="baixo">
                <form>
                    <label id="pessoal"><h4><i><b>Informações Pessoais</b></i></h4></label>
                    <br/><br/>
                    <label id="nome"><i><b>Nome Completo</b></i></label>
                    <input type="text" id="nome1"/>
                    <br/><br/>
                    <label id="endereco"><i><b>Endereço</b></i></label>
                    <input type="text" id="endereco1"/>
                    <br/><br/>
                    <label id="email"><i><b>E-mail</b></i></label>
                    <input type="email" id="email1"/>
                    <br/><br/>
                    <section className="botao">
                            <Button color="success" id="ok">Gerar Boleto</Button>
                            <Button color="danger" className="cancelar">Cancelar</Button>
                    </section>
                </form>
            </div>
            <section className="rodape">
                <img id="face" src="https://media.discordapp.net/attachments/870417386245861396/907441063554338866/facebook.png" />
                <p className="faceuser">
                    <b>
                        lojatomakeup
                    </b>
                </p>
                <img className="insta" src="https://media.discordapp.net/attachments/870417386245861396/907441155602518086/instagrameditado.png" />
                <p className="instauser">
                    <b>
                        @lojatomakeup
                    </b>
                </p>
                <img className="email" src="https://media.discordapp.net/attachments/870417386245861396/907441245914279936/mensagem.png" />
                <p className="gmail">
                    <b>
                        lojatomakeup@gmail.com
                    </b>
                </p>
                <img className="fone" src="https://media.discordapp.net/attachments/870417386245861396/907441376344547398/telefone.png" />
                <p className="telefone">
                    <b>
                        (81) 3092-1660
                    </b>
                </p>
                <p className="aviso">
                    <b>
                        <u>
                            Atendimento de Segunda à Sexta: 9h às 17h - Exceto feriados.
                        </u>
                    </b>
                </p>
                <footer>
                    <center>
                        <i>
                            © Criado em 2021 Victor A. Ferraz, Mariane B. Caldeira, Kayo Victor e Elimar Santos.
                        </i>
                    </center>
                </footer>
            </section>
        </div>
    )
}