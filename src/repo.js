const output = document.getElementById("apresentacao-resultados");
const apresentarResultados = (resp) => {
   var items = resp.items;
   output.innerHTML = "";
   slideUpTempo = 0;
   if (items.length == 0) {
     output.innerHTML = "Nenhum resultado para pesquisa foi encontado!";
   } else {
     items.forEach(item => {
       resultItem = `
       <div class="list-group-item animated fadeInUp" style="animation-delay: ${slideUpTempo}s;">
       <div class="d-flex w-100 justify-content-between">
         <h5 class="mb-1">${(item.name && item.full_name) || "Nome nao disponível"}</h5>
       </div>
      <figure class="figure">
          <img src="${item.owner.avatar_url}"  width="50" height="50" class="figure-img img-fluid rounded" alt="Avatar">
          <figcaption class="figure-caption text-right">O Avatar do github</figcaption>
      </figure>
       <div class="d-flex w-100 justify-content-between">
         <h5 class="mb-1">Tipo licença: ${(item.license) || "licenca nao disponivel"}</h5>
       </div>
       <p class="mb-1">${(item.description) || "sem descrição "}</p>
       <div>Url Github: <a href="${item.url}" target="_blank">${item.url}</a></div>
       <div>SSH Url: <a href="${item.ssh_url}" target="_blank">${item.ssh_url}</a></div>
       <div> 
         <p class="badge badge-info badge-pill">Tamanho: ${item.size  || '0 bytes'}</p>
         <p class="badge badge-info badge-pill">Estrelas: ${item.stargazers_count || 'nenhuma'}</p> 
      </div>
     </div>
     <hr/>
       `;
       output.insertAdjacentHTML("beforeend", resultItem);
       slideUpTempo += 1; 
     });
   }
 }


 let campoPesquisa = document.getElementById("campo-pesquisa");
 Rx.Observable.fromEvent(campoPesquisa, 'input')
 .pluck('target', 'value')
 .filter(termoBusca => termoBusca.length > 1)
 .debounceTime(200)
 .distinctUntilChanged()
 .switchMap(termoStr => 
     Rx.Observable.ajax(`https://api.github.com/search/repositories?q=${termoStr}&sort=stars&order=asc`
  )
   .map(resp => ({
       "status" : resp["status"] == 200,
       "details" : resp["status"] == 200 ? resp["response"] : [],
       "result_hash": Date.now()
     })
   )
 )
 .filter(resp => resp.status !== false)
 .distinctUntilChanged((a, b) => a.result_hash === b.result_hash)
 .subscribe(resp => 
   apresentarResultados(resp.details)
  );
 
   