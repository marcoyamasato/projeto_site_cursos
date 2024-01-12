 $('#telefone').mask('(00) 00000-0000')

 $('#formulario_dados').validate({
    rules:{
        nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        telefone:{
            required: false
        },
        msg:{
            required: true
        }
    },
    messages:{ /*Aqui estamos personalizando as mensagens do msg_ptBr (arquivo que colamos na pasta)*/
        nome: 'Por favor insira seu nome'
    }
}
)


$('.tab-content button').click(function(){
    destino = $('#fale-conosco')

    const texto = $(this).parent().find('h4').text()

    $('#msg').val('Olá, boa tarde!\nGostaria de mais informações sobre o curso de ' + texto + '.')

    $('html').animate({
        scrollTop: destino.offset().top
    }, 500)
})