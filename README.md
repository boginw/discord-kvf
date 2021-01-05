<center>
<h1 align="center">
  <br>
  <a href="https://discord.com/api/oauth2/authorize?client_id=789912679010795581&permissions=3155968&scope=bot"><img src="https://raw.githubusercontent.com/boginw/discord-kvf/main/assets/kvf-bot-discord.png" alt="DISCORD-KVF" width="200"></a>
  <br>
  DISCORD-KVF
  <br>
</h1>

<p align="center">Fá Útvarpið á tín Discord ambætara! <a href="https://discord.com/api/oauth2/authorize?client_id=789912679010795581&permissions=3155968&scope=bot">Trýst her! 👍</a></p>

<p align="center">
  <a href="#Nýtsla">Nýtsla</a> •
  <a href="#Sjálvhýsan">Sjálvhýsan</a>
</p>
</center>

## Nýtsla

* `kvf!play`: Fá bottin at byrja at spæla útvarið
* `kvf!stop`: Fá bottin at steðga við at spæla útvarið

## Sjálvhýsan

Í hesum parti verður greitt frá hvussu ein setur upp hendan bot til sjálvhýsan.

### Fortreytir

Áðrenn vit byrja við uppsetanini, mást tú tryggja tær, at fylgjandi tól eru innløgd:

* [Node](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/get-npm)
* [FFMPEG](https://ffmpeg.org/download.html)

Vit kunnu halda á framm við uppsetanini eftir innlegging av niðanfyristandandi tólum.

### Discord Bot

Vitja [Developer Portal](https://discordapp.com/developers/applications/) hjá Discord. Á hesari síðuni velur tú "New Application". Vel eitt navn, og trýst á "Create".

Far nú inn á síðuna hjá tínum bottið. Undir **OAuth2** vel valmøguleikan "*bot*". Hareftir, undir "*Bot Permissions*", vel "*Send Messages*", "*Manage Messages*", "*Connect*", og "*Speak*". Eftir at tú hevur valt hesar valmøguleikarnar, legg so í geyma ta leinki, ið stendur undir kassanum við heitinum "Scopes". Vitjar tú hesa leinku, og trýstur á "Authorize", so kemur bottur tín á tín ambætara.

Far nú undir **Bot**, og hareftir undir "Build-A-Bot", har sært tú ein teig ið eitur "Token". Trýst á leinkuna við tekstinum "Click to Reveal Token". Fram kemur eitt teknmerkið. Legg hetta teknmerkið í geyma, vit skulu brúka tað seinni. 

### Niðurtøka av Verkætlaninið

Nú er klárt at seta bottin upp á telduni. Vit byrja við at heinta verkætlanina niður á telduna. Hetta kann gerast á tveir ymiskar háttir. Hevur tú tólið `git`, so kanst tú koyra fylgjandi í stýristøð tínari:

```bash
git clone git@github.com:boginw/discord-kvf.git
```

Um ikki, so kanst tú trýsta á "⬇️ Code" og síðan á "Download ZIP" á hesari síðuni. Um tú ikki finnur hetta, so ber eisini til at trýsta á [her](https://github.com/boginw/discord-kvf/archive/main.zip). Pakka síðan hendan fílin út.

### Teknmerkið

Í mappuni, ið hýsur verkætlanini, skalt tú stovna ein nýggjan fíl. Kalla hendan fílin fyri `token`. Á stýristøð tínari ber til at koyra `touch token` fyri at gera hetta. Opna síðan fílin í tínum yndis ritli, og skriva í hann teknmerkið, ið tú legði í geyma. 

### Byrja Bottin

Byrja nú stýristøð tína og vitja mappuna ið hýsur verkætlanina. Fyri at innleggja øll tey tól, ið verkætlanin krevur, koyr so fylgjandi:

```bash
npm install
```

Síðst, men ikki minnst, koyr so fylgjandi fyri at byrja bottin:

```bash
npm start
```
