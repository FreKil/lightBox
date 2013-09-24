<h1>Dokumentation för lightBox-plugin</h1>
	
<h3>Om pluginet</h3>
<p>
	Detta är ett plugin till JQuery som skapar en lightBox.
	Man hakar bara på det till en selector som har en href / src adress till en bild. Default-aktionet för den selectorn kommer då att hindras och en lightbox med bilden kommer istället att dyka upp. För att få den att försvinna igen klickar man bara på bilden.
</p>
	
<h3>Installera.</h3>
<p>
	Ladda ner plugin-filen lightBox.js och inkludera den efter JQuery på din webbplats.
	Välj därefter ut de selectorer som ska beröras av lightboxen och haka på aktionet .lightBox() efter dessa. Exempel $('.minaBilder').lightBox();	
</p>

<h3>Konfigurera</h3>
<p>
	Pluginet tillåter att man ändrar vissa av default-inställningarna. 
	För att göra det skickar man helt enkelt med ett objekt med dom inställningar som ska skrivas över. <br />
	Nedanför finns en lista med de default-inställningar som kan ändras.
	<ul>
		<li>overLaySpeed: 300   //Styr hur snabbt bakrunden ska animeras fram.</li>
		<li>overLayOpacity: 0.5   //Styr hur stark opacity bakgrundsfärgen ska ha. 0 - 1.</li>
		<li>overLayColor: 'black'   //Styr vilken färg bakgrunden ska vara i.</li>
	</ul>
</p>
