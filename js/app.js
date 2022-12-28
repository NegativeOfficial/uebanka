new WOW().init();

$('#server').on('show.bs.modal', function (event) {
    $.request('onRenderServer', {
        data: {
            server_id: $(event.relatedTarget).data('server-id')
        },
        update: {
            server: '.server-modal'
        }
    });
});

function copyToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    $.oc.flashMsg({
        'text': 'Скопировано',
        'class': 'info',
        'interval': 1.5
    })
}
