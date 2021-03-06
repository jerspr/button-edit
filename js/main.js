var code = {
    init: function(){
        if($(".block-control-btn").length){
            code.colorsPicker();
        }
        if($(".block-control-bar").length){
            code.colorBarra();
        }
    },
    colorsPicker: function(){
        /*Click para la seccion color texto y texto del boton*/
        var pickrText = Pickr.create({
            el: "#color_input_text",
            theme: "nano",
            comparison: false,
            default: $("#default-color-text").data('text'),
            components:{
                preview: true,
                opacity: true,
                hue: true,
                // Input / output Options
                interaction:{
                    hex: true,
                    rgba: true,
                    input: true
                }
            }
        });
  
        pickrText.on("change", function (e) {
            $("#btn-generate button").css('color', e.toRGBA());
            eventPushCode();
        });

        $(".form-control-reset").on('keydown', function(){
            var textValue = $(this).val();
            $("#btn-generate button").html(textValue);
            eventPushCode();
        });
        $(".form-control-reset").on('keyup', function(){
            var textValue = $(this).val();
            $("#btn-generate button").html(textValue);
            eventPushCode();
        });

        /*Click para la seccion fondo del boton y tamaño*/
        var pickrBg = Pickr.create({
            el: "#color_bg_btn",
            theme: "nano",
            comparison: false,
            default: $("#default-bg-btn").data('bg'),
            components:{
                preview: true,
                opacity: true,
                hue: true,
                // Input / output Options
                interaction:{
                    hex: true,
                    rgba: true,
                    input: true
                }
            }
        });
  
        pickrBg.on("change", function (e) {
            $("#btn-generate button").css("background", e.toRGBA());
            eventPushCode();
        });

        $("#event-size label span").on('click', function(){
            var numSize = $(this).data('size');
            var numPadding = $(this).data('padding');
            $("#event-size label").removeClass('active');
            $(this).parent().addClass('active');
            $("#btn-generate button").css('fontSize', numSize);
            $("#btn-generate button").css('padding', numPadding);
            eventPushCode();
        });

        /*Click para la seccion Border y color de border*/
        var pickrBorder = Pickr.create({
            el: "#color_border_btn",
            theme: "nano",
            comparison: false,
            default: $("#default-border-btn").data('border'),
            components:{
                preview: true,
                opacity: true,
                hue: true,
                // Input / output Options
                interaction:{
                    hex: true,
                    rgba: true,
                    input: true
                }
            }
        });
  
        pickrBorder.on("change", function (e) {
            $("#btn-generate button").css('borderColor', e.toRGBA());
            eventPushCode();
        });

        $("#event-border label span").on('click', function(){
            var numWidth = $(this).data('width');
            $("#event-border label").removeClass('active');
            $(this).parent().addClass('active');
            $("#btn-generate button").css('borderWidth', numWidth);
            eventPushCode();
        });

        /*Click para la seccion sombra*/
        $("#event-shadow label span").on('click', function(){
            var numShadow = $(this).data('shadow');
            $("#event-shadow label").removeClass('active');
            $(this).parent().addClass('active');
            $("#btn-generate button").css('boxShadow', numShadow);
            eventPushCode();
        });

        /*Click para la seccion border radius*/
        $("#event-radius label span").on('click', function(){
            var numRadius = $(this).data('radius');
            $("#event-radius label").removeClass('active');
            $(this).parent().addClass('active');
            $("#btn-generate button").css('borderRadius', numRadius);
            eventPushCode();
        });

        function eventPushCode(){
            var htmlGenerate = $("#btn-generate").html();
            $("#code-generate textarea").html(htmlGenerate);
        }
    },
    colorBarra: function(){

        $(".form-control_blank").on('keydown', function(){
            var textValue = $(this).val();
            $("#btnBar").html(textValue);
            //eventPushCode();
        });
        $(".form-control_blank").on('keyup', function(){
            var textValue = $(this).val();
            $("#btnBar").html(textValue);
            //eventPushCode();
        });

        /*Color para el fondo del boton*/
        var pickrText = Pickr.create({
            el: "#color-bg-btn-bar",
            theme: "nano",
            comparison: false,
            default: $("#default-bg-btn-bar").data('bgbtnbar'),
            components:{
                preview: true,
                opacity: true,
                hue: true,
                // Input / output Options
                interaction:{
                    hex: true,
                    rgba: true,
                    input: true
                }
            }
        });
  
        pickrText.on("change", function (e) {
            $("#btnBar").css("background", e.toRGBA());
            //eventPushCode();
        });

        /*Color para el color del boton*/
         var pickrText = Pickr.create({
            el: "#color-btn-bar",
            theme: "nano",
            comparison: false,
            default: $("#default-color-btn-bar").data('colorbard'),
            components:{
                preview: true,
                opacity: true,
                hue: true,
                // Input / output Options
                interaction:{
                    hex: true,
                    rgba: true,
                    input: true
                }
            }
        });
  
        pickrText.on("change", function (e) {
            $("#btnBar").css("color", e.toRGBA());
            //eventPushCode();
        });

        /*Background para el fondo de la barra*/
        var pickrText = Pickr.create({
            el: "#bg-bar-w",
            theme: "nano",
            comparison: false,
            default: $("#default-bg-bar-w").data('bgbar'),
            components:{
                preview: true,
                opacity: true,
                hue: true,
                // Input / output Options
                interaction:{
                    hex: true,
                    rgba: true,
                    input: true
                }
            }
        });
  
        pickrText.on("change", function (e) {
            $("#bgBarra").css("background", e.toRGBA());
            //eventPushCode();
        });
    }
}