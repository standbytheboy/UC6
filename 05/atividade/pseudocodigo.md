INICIO
	vaga[x]
	SE vaga[x] ESTÁ DISPONÍVEL
	ESCREVA INFORME HORA DE ENTRADA
	GUARDE A HORA 

	SE vaga[x] NÃO ESTÁ DISPONÍVEL
	ESCREVA INFORME A HORA DE SAÍDA
	GUARDE A HORA DE SAÍDA
	
	SE horaDeSaida < horaDeEntrada
	ESCREVA HORA INVÁLIDA

	SENÃO, PEGUE A HORA DE SAÍDA E SUBTRAIA PELA DE ENTRADA

	SUBTRAÇÃO += horasAcumuladas
	
	REPETIR

FIM


============================================== Professor ==============================================
INICIO

	vagas[]

	totalHoras[]

	escolha vaga X

	ESCREVA "Informe a Hora"

	LEIA hora

	SE vaga[x] == NÃO OCUPADA

	  vaga[x] = hora

	SE NAO

	  intervalo = hora - vaga[x]

	  totalHoras[x] = intervalo

	  vaga[x] = NÃO OCUPADA 

FIM
 