(()=>{"use strict";const e=window.wp.i18n;postboxes.add_postbox_toggles(pagenow),jQuery(".postbox .hndle").off("click.postboxes",postboxes.handle_click),document.getElementById("tablepress-page").addEventListener("click",(t=>{if(t.target)return t.target.matches(".delete-link")?confirm((0,e._n)("Do you really want to delete this table?","Do you really want to delete these tables?",1,"tablepress"))?void window?.tp?.helpers?.unsaved_changes?.unset?.():void t.preventDefault():void 0}))})();