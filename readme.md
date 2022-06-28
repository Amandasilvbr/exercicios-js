<h1>Olá! Esse projeto contém exercícios JavaScript!</h1>
✔️São 42 exercícios que serão completados ao longo do tempo;

✔️Os exercícios trabalham tipos de dados, loops, funções entre outros;

✔️Toda a parte lógica foi desenvolvida com JavaScript;

🌱 Esse projeto está sujeito a melhorias. Sugestões e opiniões sobre o código são sempre bem-vindas!

<h2>Enunciados</h2>
<p align="justify">
1-Crie uma função que dado dois valores (passados ​​como parâmetros) mostre no console a soma, subtração, multiplicação e divisão valores.

2-Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se-se abstrair como condições matemáticas de existência de um triângulo).

3-Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

4-Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deve imprimir o resultado e o resto da divisão destes dois valores.

5-Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando sem console: console.log (0.1 + 0.2); O resultado será: 0,30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice-versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0,30000000000000004 e retorne R $ 0,30 (observe a vírgula e o ponto).

6-Elabore duas funções que seguem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. UMA primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda Retornará o valor da aplicação sob o regime de juros compostos.

7-Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver uma fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, o retorno, ao evitar do vetor, um string com uma frase: “Delta é negativo”.

8-Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc. ”, escrever uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo). Obs .: O primeiro jogo não conta como novo recorde do melhor. Exemplo: String: “10 20 20 8 25 3 0 30 1” Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e o pior pontuação aconteceu no sétimo jogo.)

9-Construa um sistema de notas para uma instituição que possui a seguinte política de classificação:
-Todo aluno recebe uma nota de 0 a 100.
-As notas possuem a seguinte regra de arredondamento:
Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo. Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada.

10-Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne verdadeiro ou falso.

11-As regras para o cálculo dos anos bissextos são as seguintes: De 4 em 4 anos é ano bissexto; De 100 em 100 anos não é ano bissexto; De 400 em 400 anos é ano bissexto; Prevalecem as últimas regras sobre as primeiras. Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retorno verdadeiro ou falso.

12-Faça um algoritmo que calcule o fatorial de um número.

13-Crie um programa que exibe se um dia é dia útil (qual o dia) ou se é fim de semana. Utilize um switch estrutural.

14-Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorno no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis ”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um padrão, que retornará uma mensagem de erro no console.

15-Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando um switch de estrutura, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorno: “Tem certeza que não prefere este modelo? ”. Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.

16-Utilizando uma estrutura do Switch, faça um programa que simule uma calculadora básicaO programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realizar com os valores numéricos na ordem que foram inseridos. Por exemplo: Calculadora (2, '+', 3). A função efetuará a soma de 2 e

17-Dica: Os sinais das operações são: '+'. '-', '\*' e '/'. Crie um caso padrão para operações imediatas.
Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo: Plano Aumento 10% B 15% C 20% Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e cálculo e imprime o seu novo salário. Use uma estrutura switch e faça um caso default que indique que o plano é inválido.

18-Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando interruptor. Crie um caso default que escreva 'Número fora do intervalo.'

19-O cardápio de uma lanchonete é o seguinte: Código Descrição do Produto Preço 100 Cachorro Quente R $ 3,00 200 Hambúrguer Simples R $ 4,00 300 Cheeseburguer R $ 5,50 400 Bauru R $ 7,50 500 Refrigerante R $ 3,50 600 Suco R $ 2,80 Pedido uma função implemente que receba como parâmetros o código do item, a quantidade e cálculo do valor um ser pago por aquele lanche. Considere que cada execução somente será excluída um item. Use o comando switch. Crie um caso default para produto não existente.

20-Crie um programa para informar quais e as notas necessárias são para entregar o mínimo de cédulas para um determinado valor rede pelo usuário considerando notas de R $ 100, R $ 50, R $ 10 e R $ 5 e R $ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao pedido R $ 18, o programa deve informar apenas a seguinte informação (observe que não foram divulgadas informações sobre as demais cédulas): 1 nota (s) de R $ 10. 1 nota (s) de R $ 5. 3 nota (s) de R $ 1.

21-Criar um programa para identificar o valor de um ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R $ 100 mais um adicional conforme a tabela a seguir: 1) crianças com menos de 10 anos pagam R $ 80; 2) conveniados com idade entre 10 e 30 anos pagam R $ 50; 3) conveniados com idade acima de 30 e até 60 anos pagam R $ 95; e 4) conveniados acima de 60 anos pagam R $ 130

22-Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. UMA anuidade deve ser paga no mês de janeiro. Por mês, é cobrança 5% de Juros (sob o regime de juros composto). O retorno deve ser o valor a ser pago para o mês escolhido.

23-Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calcula e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" é a média para o menor que 5. Repita uma operação até que o código lido seja negativo.

24-Crie um programa que imprima 11 vezes a frase "Hello World!" utilizando uma estrutura de repetição while.

25-Escrever um programa para exibir os números de 1 até 50 na tela.

26-Fazer um programa para encontrar todos os pares entre 1 e 100.

27-Construa uma função que receba como parâmetros como alturas e taxas de crescimento anual de duas crianças e cálculo se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilizar unidades de medida.

28-Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

29-Utilizando uma estrutura de repetição para, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos eles estão fora do intervalo, escrevendo estas informações.

30-Escreva um algoritmo que percorre um vetor de inteiros e define o maior e menor valor dentro do vetor.

31-Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

32-Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

33-Crie três vetores, chamados vetoresInteiro, vetorString e vetorDouble. Cada um destes vetores deve conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.

34-Declarados os vetores, utilizam uma função de união concat () de duas maneiras diferentes para unir os vetores, e mostre o resultado sem console. Todos os elementos do vetor resultado devem aparecer no console.

35-Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) removidos contidos em ambas as palavras.

36-Crie dois vetores vetoresPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deve adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los sem console. É importante lembrar que o método Push retorna somente ao tamanho do Vetor. Ao final das operações imprima os vetores no console.

37-Crie duas funções que agrupam dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número anterior como parâmetro. A segunda função fará o mesmo da primeira vez e somente se o valor do elemento para maior que 5.

38-Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) er (a razão) e escrever os n termos, bem como a soma dos elementos.

39-Escreva uma função que receba dois parâmetros e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

40-Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passa a ser o primeiro elemento do vetorB e vice-versa e assim sucessivamente. Faça a troca sem usar uma variável auxiliar.

41-Faça uma função que receba como parâmetro de um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído ao conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

42-Um novo modelo de carro, super econômico foi lançado. Ele faz 20 km com 1 litro de combustível. Cada litro de combustível custa R$ 5,00. Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível. </p>
