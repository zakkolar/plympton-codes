var PLtranslation=function(){
    var messages = [
        "Translate | Traducir | Traduzir | Tradwi | 翻译"
        // "Selecciona tu idioma para traducir esta página.",
        // "Selecione seu idioma para traduzir esta página",
        // "Chwazi lang ou an pou tradwi paj sa a",
        // "选择您的语言以翻译此页面",
    ]
    var currentMessage = 0;

    var updateMessage = function(){
        if(currentMessage === messages.length - 1 ){
            currentMessage = 0;
        }
        else{
            currentMessage++;
        }
    }

    var showMessage=function(){
        var div = document.getElementById('google_translate_element');
        var select = div.getElementsByTagName('select')[0]
        if(select.length>0 && (document.activeElement !== select)){
            var option = select.getElementsByTagName('option')[0]
            option.innerHTML = messages[currentMessage]
        }

    }

    var run =function(){
        showMessage();
        updateMessage();
        setTimeout(function(){

            run();
        }, 4000)
    }

    run();
}
