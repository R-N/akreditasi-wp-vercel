(()=>{"use strict";const e=window.React,t=window.ReactDOM,r=window.wp.components,l=window.wp.primitives,a=(0,e.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(l.Path,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"})),o=window.wp.i18n,i={"file-upload":{label:(0,o.__)("File Upload","tablepress"),instruction:(0,o.__)("Select files","tablepress")},url:{label:(0,o.__)("URL","tablepress"),instruction:(0,o.__)("File URL","tablepress")},server:{label:(0,o.__)("File on server","tablepress"),instruction:(0,o.__)("Server Path to file","tablepress")},"form-field":{label:(0,o.__)("Manual Input","tablepress"),instruction:(0,o.__)("Import data","tablepress")}};tp.import.showImportSourceUrl||delete i.url,tp.import.showImportSourceServer||delete i.server;const p=Object.keys(tp.import.tables).length,m=Object.entries(tp.import.tables).map((([t,r])=>{""===r.trim()&&(r=(0,o.__)("(no name)","tablepress"));const l=(0,o.sprintf)((0,o.__)("ID %1$s: %2$s","tablepress"),t,r);return(0,e.createElement)("option",{key:t,value:t},l)}));((e,r)=>{const l=document.getElementById("tablepress-import-screen");l&&("function"==typeof t.createRoot?(0,t.createRoot)(l).render(r):(0,t.render)(r,l))})(0,(0,e.createElement)((()=>{const[t,l]=(0,e.useState)({importSource:tp.import.importSource,importType:tp.import.importType,importFileUpload:[],importUrl:tp.import.importUrl,importServer:tp.import.importServer,importFormField:tp.import.importFormField,importExistingTable:tp.import.importExistingTable,validationHighlighting:!1}),n=e=>{const r={...t,validationHighlighting:!1,...e};l(r)},s=(0,e.useRef)(null),c=(0,e.useRef)(null),d=(0,e.useRef)(null);(0,e.useEffect)((()=>{jSuites.dropdown(c.current,{autocomplete:!0,placeholder:(0,o.__)("— Select or type —","tablepress"),onchange:(e,t,r,a)=>{l((e=>({...e,validationHighlighting:!1,importExistingTable:a})))}})}),[]),(0,e.useEffect)((()=>{document.getElementById("tablepress_import-import-form").classList.toggle("no-validation-highlighting",!t.validationHighlighting),t.validationHighlighting||(s.current?.setCustomValidity(""),c.current.previousElementSibling.querySelector(".jdropdown-header")?.setCustomValidity(""))}),[t.validationHighlighting]);const u="file-upload"===t.importSource&&(1<t.importFileUpload.length||1===t.importFileUpload.length&&t.importFileUpload[0].name.endsWith(".zip")),b=0===p||"add"===t.importType||u;return(0,e.useEffect)((()=>{c.current.previousElementSibling.classList.toggle("disabled",b)}),[b]),(0,e.createElement)("table",{className:"tablepress-postbox-table fixed"},(0,e.createElement)("tbody",null,(0,e.createElement)("tr",null,(0,e.createElement)("th",{className:"column-1",scope:"row",id:"import-source-header"},(0,o.__)("Import Source","tablepress"),":"),(0,e.createElement)("td",{className:"column-2"},Object.entries(i).map((([r,l])=>(0,e.createElement)("label",{key:r,htmlFor:`tables-import-source-${r}`},(0,e.createElement)("input",{name:"import[source]",id:`tables-import-source-${r}`,type:"radio","aria-labelledby":"import-source-header",value:r,checked:r===t.importSource,onChange:e=>n({importSource:e.target.value})})," ",l.label))))),(0,e.createElement)("tr",{className:"top-border bottom-border"},(0,e.createElement)("th",{className:"column-1 top-align",scope:"row"},(0,e.createElement)("label",{htmlFor:`tables-import-${t.importSource}`},i[t.importSource].instruction,":")),(0,e.createElement)("td",{className:"column-2"},(0,e.createElement)("div",{className:"file-upload-area",style:{display:"file-upload"===t.importSource?"block":"none"}},(0,e.createElement)("input",{name:"import_file_upload[]",id:"tables-import-file-upload",type:"file",multiple:!0,required:"file-upload"===t.importSource,onChange:e=>e.target.files&&n({importFileUpload:e.target.files}),onDragEnter:()=>d.current.classList.add("dragover"),onDragLeave:()=>d.current.classList.remove("dragover")}),(0,e.createElement)("div",{ref:d,id:"tables-import-file-upload-dropzone",className:"dropzone"},(0,e.createElement)("span",null,0===t.importFileUpload.length&&(0,o.__)("Click to select files, or drag them here.","tablepress"),0<t.importFileUpload.length&&(0,o.sprintf)((0,o._n)("You have selected %1$d file:","You have selected %1$d files:",t.importFileUpload.length,"tablepress"),t.importFileUpload.length)),[...t.importFileUpload].map((t=>(0,e.createElement)("span",{key:t.name},t.name))))),tp.import.showImportSourceUrl&&"url"===t.importSource&&(0,e.createElement)("input",{type:"url",name:"import[url]",id:"tables-import-url",className:"large-text code",required:!0,value:t.importUrl,onChange:e=>n({importUrl:e.target.value})}),tp.import.showImportSourceServer&&"server"===t.importSource&&(0,e.createElement)("input",{ref:s,type:"text",name:"import[server]",id:"tables-import-server",className:"large-text code",required:!0,value:t.importServer,onChange:e=>n({importServer:e.target.value})}),"form-field"===t.importSource&&(0,e.createElement)("textarea",{name:"import[form-field]",id:"tables-import-form-field",rows:"15",cols:"40",className:"large-text code",required:!0,value:t.importFormField,onChange:e=>n({importFormField:e.target.value})}),"form-field"!==t.importSource&&(0,e.createElement)("p",{className:"info-text",style:{marginTop:"0.5em"}},(0,e.createElement)(r.Icon,{icon:a}),(0,e.createElement)("span",null,(0,o.__)("You can also import multiple tables by placing them in a ZIP file.","tablepress"))))),(0,e.createElement)("tr",{className:"top-border"},(0,e.createElement)("th",{className:"column-1",scope:"row",id:"import-type-header"},(0,o.__)("Add, Replace, or Append?","tablepress"),":"),(0,e.createElement)("td",{className:"column-2"},(0,e.createElement)("label",{htmlFor:"tables-import-type-add"},(0,e.createElement)("input",{name:"import[type]",id:"tables-import-type-add",type:"radio","aria-labelledby":"import-type-header",value:"add",checked:"add"===t.importType||0===p,onChange:e=>n({importType:e.target.value})})," ",(0,o.__)("Add as new table","tablepress")),(0,e.createElement)("label",{htmlFor:"tables-import-type-replace"},(0,e.createElement)("input",{name:"import[type]",id:"tables-import-type-replace",type:"radio","aria-labelledby":"import-type-header",value:"replace",disabled:0===p,checked:"replace"===t.importType,onChange:e=>n({importType:e.target.value})})," ",(0,o.__)("Replace existing table","tablepress")),(0,e.createElement)("label",{htmlFor:"tables-import-type-append"},(0,e.createElement)("input",{name:"import[type]",id:"tables-import-type-append",type:"radio","aria-labelledby":"import-type-header",value:"append",disabled:0===p,checked:"append"===t.importType,onChange:e=>n({importType:e.target.value})})," ",(0,o.__)("Append rows to existing table","tablepress")))),(0,e.createElement)("tr",{className:"top-border bottom-border"},(0,e.createElement)("th",{className:"column-1",scope:"row"},(0,e.createElement)("label",{htmlFor:"tables-import-existing-table"},(0,o.__)("Table to replace or append to","tablepress"),":")),(0,e.createElement)("td",{className:"column-2"},(0,e.createElement)("select",{ref:c,id:"tables-import-existing-table",name:"import[existing_table]",disabled:b,value:t.importExistingTable},(0,e.createElement)("option",{value:""}," "),m))),(0,e.createElement)("tr",{className:"top-border"},(0,e.createElement)("td",{className:"column-1"}),(0,e.createElement)("td",{className:"column-2"},(0,e.createElement)("input",{type:"hidden",name:"import[legacy_import]",value:tp.import.legacyImport}),(0,e.createElement)("input",{type:"submit",value:(0,o._x)("Import","button","tablepress"),className:"button button-primary button-large",id:"import-submit-button",onClick:()=>{n({validationHighlighting:!0}),"server"===t.importSource&&tp.import.importServer===t.importServer&&s.current.setCustomValidity((0,o.__)("You must specify a path to a file on the server.","tablepress")),b||""!==t.importExistingTable||c.current.previousElementSibling.querySelector(".jdropdown-header").setCustomValidity((0,o.__)("You must select a table.","tablepress"))}})))))}),null))})();