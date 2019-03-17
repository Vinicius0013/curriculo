function mudarEstilo()
{
	var objBody = document.getElementById("corpo-da-pagina");
	objBody.style.color = "#ffffff";
	objBody.style.background = "#000000";
	var objDiv = document.getElementById("curriculo");
	objDiv.style.border = "10px solid #ffffff";
	var objButton = document.getElementById("btnMudarEstilo");
	objButton.style.display = "none";
	var objButton2 = document.getElementById("btnVoltarEstilo");
	objButton2.style.display = "block";
}

function estiloAnterior()
{
	var objBody = document.getElementById("corpo-da-pagina");
	objBody.style.color = "#000000";
	objBody.style.background = "#ffffff";
	var objDiv = document.getElementById("curriculo");
	objDiv.style.border = "10px solid #000000";
	var objButton = document.getElementById("btnVoltarEstilo");
	objButton.style.display = "none";
	var objButton2 = document.getElementById("btnMudarEstilo");
	objButton2.style.display = "block";
}

/*Json*/

var json = {
	experiencia: 
	[
		{
			"experiencia": "Soldado de segunda categoria do Exército Brasileiro durante o ano de 2012."
		},
		{
			"experiencia": "Sonoplasta - 2009 a 2011 - Paróquia São Geraldo Majela - Bandeirantes - PR."
		},
		{
			"experiencia": "Diarista - 2011 a 2014 - VIQL - Vicentino's Industrial Química Ltda - Bandeirantes - PR."
		},
		{
			"experiencia": "Vendedor de Produtos de Limpeza - 2014 - VIQL - Vicentino's Industrial Química Ltda - Bandeirantes - PR."
		},
		{
			"experiencia": "Entregador de Encomendas Autônomo - 2014 a 2015 - VIALOG."
		},
		{
			"experiencia": "Desenvolvedor Front-End - 2015 a 2018 - S4W Marketing Digital."
		},
		{
			"experiencia": "Desenvolvedor Back-End - 2015 a 2018 - S4W Marketing Digital."
		},
		{
			"experiencia": "Programador ASP.Net C# - 2015 a 2018 - S4W Marketing Digital."
		},
		{
			"experiencia": "Desenvolvimento de Sistemas utilizando o padrão MVC (Model-View-Controller) - 2015 a 2018 - S4W Marketing Digital."
		},
		{
			"experiencia": "Desenvolvedor PHP - 2015 a 2018 - S4W Marketing Digital."
		},
		{
			"experiencia": "Com a ferramenta Wordpress - 2015 a 2018 - S4W Marketing Digital."
		},
		{
			"experiencia": "Framework Web Bootstrap - 2015 a 2018 - S4W Marketing Digital."
		},
		{
			"experiencia": "Banco de dados - SQL Server - 2015 a 2018 - S4W Marketing Digital."
		},
		{
			"experiencia": "Banco de dados - Postgresql - 2015 a 2018 - S4W Marketing Digital/UTFPR Cornélio Procópio."
		},
		{
			"experiencia": "Banco de dados - MySQL - 2015 a 2018 - S4W Marketing Digital/ UTFPR - Cornélio Procópio."
		},
		{
			"experiencia": "PhpMyAdmin - 2015 a 2018 - S4W Marketing Digital."
		},
		{
			"experiencia": "Linguagem de Programação C# - 2015 a 2018 - S4W Marketing Digital."
		},
		{
			"experiencia": "Linguagem de Programação Orientada a Objetos Java - UTFPR Cornélio Procópio."
		},
		{
			"experiencia": "Linguagem de Programação Interpretada JavaScript - S4W Marketing Digital/ UTFPR Cornélio Procópio."
		},
		{
			"experiencia": "Desenvolvedor Front-End – 2018 e atualmente – Timo GF - Soluções Web e Mobile."
		},
		{
			"experiencia": "Desenvolvedor Back-End – 2018 e atualmente – Timo GF - Soluções Web e Mobile."
		},
		{
			"experiencia": "Programador ASP.Net C# - 2018 e atualmente – Timo GF - Soluções Web e Mobile."
		},
		{
			"experiencia": "Framework PHP Yii – 2018 e atualmente – Timo GF - Soluções Web e Mobile."
		},
		{
			"experiencia": "Framework Angular – 2018 e atualmente – Timo GF- Soluções Web e Mobile."
		}
	]
};


var jsonHabilidades = {
	habilidades:
	[
		{
			"habilidades": "Desenvolvedor Front-End - Intermediário"
		},
		{
			"habilidades": "Desenvolvedor Back-End - Intermediário"
		},
		{
			"habilidades": "PHP - Intermediário"
		},
		{
			"habilidades": "ASP.NET C# - Intermediário"
		},
		{
			"habilidades": "Wordpress - Intermediário"
		},
		{
			"habilidades": "CSS - Intermediário"
		},
		{
			"habilidades": "JS - Intermediário"
		},
		{
			"habilidades": "Framework Bootstrap - Intermediário"
		},
		{
			"habilidades": "Padrão MVC - Intermediário"
		},
		{
			"habilidades": "Framework PHP Yii - Básico"
		},
		{
			"habilidades": "Framework Angular - Básico"
		}
	]
};

console.log(json);
console.log(jsonHabilidades);
/*var objUl = document.getElementById('teste');
//console.log(json);
/*for(var i=0; i < json.experiencia.length; i++){
	var tag = "<li>"+json.experiencia[i].experiencia+"</li>";
	objUl.append(tag);
}*/