$(document).ready(function () {
  $('#submit').click(() => {
    const input = $('#input').val()
    let output = input.replaceAll('dev/', '').replaceAll('_', ' ')
    const start = output.search('/')
    if (start > -1){
      output = output.slice(start + 1, output.length)
    }
    $('#output').val(output)
    $('#output').select();
    document.execCommand("copy");
  })

  $('#submit2').click(() => {
    let input = $('#input2').val()
    const regex = new RegExp('[A-Z]')
    while(input.match(regex)) {
      input = input.replace(regex, (match) => '_' + match.toLowerCase())
    }
    let output = input
    $('#output2').val(output)
    $('#output2').select();
    document.execCommand("copy");
  })
})

