'use strict';

function suivi(msg){
	$('#retour').html(msg)
}

function peuple_script_list(ret){
  const menu = document.querySelector('#script_list')
  ret.scripts.forEach(script_name => {
    const opt = document.createElement('OPTION')
    opt.value     = script_name
    opt.innerHTML = script_name
    menu.appendChild(opt)
  })
}

function generateUrl(){
  const script_name = document.querySelector('#script_list').value
  let params = document.querySelector('#script_params').value.trim()
  let value = `http://localhost/TrelloAssistant?do=${script_name}`
  if (params != '') {
    value += '&with='+encodeURIComponent(params)
  }
  const url_field = document.querySelector('#url_field')
  url_field.value = value
  url_field.style.display = "block"
}

$(document).ready(function(){
  /**
		* On checke pour voir si un ordre est requis
		*
  	*/
  const url = new URL(window.location.href);
  const script = url.searchParams.get('do');
  const params = url.searchParams.get('with');

  if (script) {
    $('#message').html("Appel du script "+script+".rb avec les paramètres " + params + "…")
    suivi("Je joue le script. Merci de patienter…")
    Ajax.send(`${script}.rb`,{with:params})
    .then(ret => {
      // console.log(ret)
      suivi(ret.message)
    })
    .catch(err => console.error(err))
  } else {
    Ajax.send('system/get_scripts.rb').then(peuple_script_list)
  }


})
