# Trakto - Checkout

Olá! Aqui é o Pedro, e esse repositório contém o desenvolvimento de uma tela de checkout & confirmação de pagamento, proposta pelo processo seletivo da [Trakto!](https://www.trakto.io) Para evoluir com a demanda, utilizei os seguintes tópicos:

- **react** como framework para desenvolvimento;
- **styled components** para deixar os estilos mais organizados;
- **react hooks** como o useState, useEffect e useCallback;
- **context API** para tratar as informações de cursos, filtros e exibições
- **eslint & prettier** para manter o padrão de código consistente;

Se quiser visualizar o projeto em produção, ele está acessível [nesse link!](https://trakto-checkout.web.app/)

## Rodando o projeto

Pra poder clonar e rodar o projeto direitinho, é só mandar aqueles comandos padrão de sempre:

```bash
npm i && npm start
```

Caso você tenha problemas com as quebras de linha do Windows, o comando abaixo corrige automaticamente os arquivos usando o Eslint:

```bash
npm run lint
```

## Features

Entre features propostas de forma obrigatória & opcional pela especificação, o seguinte foi viabilizado:

- seleção de forma de pagamento;
- validação e formatação dos campos, conforme o tipo de dado sendo digitado;
- feedbacks visuais para os erros;
- preenchimento automático do endereço, quando o CEP era digitado;
- mudança de recorrência e validação em conjunto com a forma de pagamento;
- responsividade até a largura mínima de tela de 360px;
- tela de confirmação com responsividade e carrossel de imagens.

## Pendências

Devido ao prazo e escopo mais enxuto da demanda em questão, alguns pontos que eu normalmente viabilizaria não foram tocados:

- Nas informações do cartão de crédito, é possível viabilizar validações mais aprofundadas;
- No CPF/CNPJ, também seria possível validar se os números digitados são válidos;
- Os links dos termos e do botão "Precisa de ajuda?" estão inutilizados;
- Ao clicar em "Assinar", após as devidas validações, o redirecionamento para a tela de sucesso está sendo feita de forma direta, porém deveria ter uma requisição para o Gateway de pagamentos, tratando os devidos retornos e possibilidades;
- Na tela de sucesso, o nome "Pedro" está definido de forma fixa, uma vez que em uma aplicação real teríamos mais informações sobre o usuário logado.

## Trechos de códigos interessantes

Durante o desenvolvimento do teste, viabilizei algumas soluções a nível de código que vou explicar melhor abaixo:

### Formato do Estado Global da Aplicação

Para centralizar as informações importantes da aplicação, o objeto com o estado global da aplicação foi estruturado da seguinte forma:

```js
export const initialState = {
    user: {
        name: '',
        document: '',
        phone: '',
        postalCode: '',
        street: '',
        streetNumber: '',
        neighborhood: '',
        complement: '',
        city: '',
        state: 'UF',
        terms: false,
        errors: []
    },
    creditCard: {
        name: '',
        number: '',
        expiration: '',
        securityCode: '',
        errors: []
    },
    plan: {
        name: 'Plano Pro',
        value: {
            monthly: 25.5,
            anual: 150
        },
        recurrence: 'monthly',
        payment: 'creditCard',
        terms: false,
        errors: {
            paymentTicket: false,
            planTerms: false
        }
    },
    step: 'checkout'
}
```

### Biblioteca para o Carrossel

Para viabilizar o carrossel de imagens na página de confirmação de compras, utilizei o [Swiper](https://swiperjs.com/react), cuja formatação dentro do componente ficou da seguinte forma:

```js
return (
    <CarouselStyles>
        <Swiper
            tag="section"
            wrapperTag="ul"
            slidesPerView={1}
            pagination={{clickable: true}}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
            {
                slides.map((slide, key) => (
                    <SwiperSlide tag="li" key={key}>
                        <CarouselElement
                            img={slide.img}
                            text={slide.text}
                            keyEl={key}
                        />
                    </SwiperSlide>
                ))
            }

        </Swiper>
    </CarouselStyles>
)
```

### Validações dos Campos

Para organizar as funções que faziam as validações dos campos digitados, fiz uma função que retorna a função específica de validação conforme um tipo desejado. Isso ajudou a centralizar a obtenção dos "Validators", e também a retornar uma função "vazia" caso o campo desejado não precisasse de validação.

```js
/**
 * Retorna uma função de validação conforme
 * o tipo de campo passado
 *
 * @param {string} type Identificação do campo a ser validado
 * @returns {function} Função de validação
 */
export function getValidator(type = 'all'){
    const validators = {
        number:         (value, type = 'format') => cardNumberValidator(value, type),
        expiration:     (value, type = 'format') => expirationValidator(value, type),
        securityCode:   (value, type = 'format') => securityCodeValidator(value, type),
        document:       (value, type = 'format') => documentValidator(value, type),
        phone:          (value, type = 'format') => phoneValidator(value, type),
        postalCode:     (value, type = 'format') => postalCodeValidator(value, type),
        streetNumber:   (value, type = 'format') => numberValidator(value, type),
        default:        value => value
    }

    if(type === 'all') return validators

    return validators[type] || validators['default']
}
```

E, no ato de submissão do formulário, essa função é utilizada para fornecer as validações específicas:

```js
/**
 * Verifica os campos obrigatórios conforme
 * o método de pagamento e retorna um array
 * com os campos incorretos
 *
 * @param {array} fields Campos obrigatórios de determinado método de pagamento
 * @param {object} state Estado global da aplicação no nomento da validação
 * @returns {array}
 */
function getFieldErrors(fields, state){
    const key = state.plan.payment === 'paymentTicket' ? 'user' : 'creditCard'
    const validators = getValidator()

    return fields.filter(field => {
        const value = state[key][field]

        const validateFieldIntegrity =
            Object.prototype.hasOwnProperty.call(validators, field) &&
            !validators[field](value, 'validate')

        return value === '' || !value || validateFieldIntegrity
    })
}
```