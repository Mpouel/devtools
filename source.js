import"../../../devtools-frontend/front_end/entrypoints/inspector/inspector.js";
import*as e from"../../../devtools-frontend/front_end/core/common/common.js";
import*as t from"../../../devtools-frontend/front_end/core/i18n/i18n.js";
import*as n from"../../../devtools-frontend/front_end/ui/legacy/legacy.js";
import*as a from"../../../devtools-frontend/front_end/services/tracing/tracing.js";

const o = {
    whatsNew:"What's new",
    showWhatsNew:"Show what's new",
    releaseNotes:"Release notes",
    reportADevtoolsIssue:"Report a DevTools issue",
    bug:"bug",
    showWhatsNewAfterEachUpdate:"Show what's new after each update",
    doNotShowWhatsNewAfterEachUpdate:"Don't show what's new after each update"
},i = t.i18n.registerUIStrings("panels/whats_new/whats_new-meta.ts",o),s=t.i18n.getLazilyComputedLocalizedString.bind(void 0,i);

let r;

async function l(){
    return r || (r = await import("../../panels/whats_new/whats_new.js")), r
}

n.ViewManager.maybeRemoveViewExtension("release-note"),n.ActionRegistration.maybeRemoveActionExtension("help.release-notes"),n.ActionRegistration.maybeRemoveActionExtension("help.report-issue"),e.Settings.maybeRemoveSettingExtension("help.show-release-note"),n.ContextMenu.maybeRemoveItem({location:"mainMenuHelp/default",actionId:"help.release-notes",order:void 0}),n.ContextMenu.maybeRemoveItem({location:"mainMenuHelp/default",actionId:"help.report-issue",order:void 0}),e.Runnable.maybeRemoveLateInitializationRunnable("whats-new"),n.ViewManager.registerViewExtension({location:"drawer-view",id:"release-note",title:s(o.whatsNew),commandPrompt:s(o.showWhatsNew),persistence:"closeable",order:1,loadView:async()=>(await l()).ReleaseNoteView.ReleaseNoteViewWrapper.instance()}),n.ActionRegistration.registerActionExtension({category:"HELP",actionId:"help.release-notes",title:s(o.releaseNotes),loadActionDelegate:async()=>(await l()).WhatsNew.ReleaseNotesActionDelegate.instance()}),n.ActionRegistration.registerActionExtension({category:"HELP",actionId:"help.report-issue",title:s(o.reportADevtoolsIssue),loadActionDelegate:async()=>(await l()).WhatsNew.ReportIssueActionDelegate.instance(),tags:[s(o.bug)]}),e.Settings.registerSettingExtension({category:"APPEARANCE",title:s(o.showWhatsNewAfterEachUpdate),settingName:"help.show-release-note",settingType:"boolean",defaultValue:!0,options:[{value:!0,title:s(o.showWhatsNewAfterEachUpdate)},{value:!1,title:s(o.doNotShowWhatsNewAfterEachUpdate)}]}),n.ContextMenu.registerItem({location:"mainMenuHelp/default",actionId:"help.release-notes",order:10}),n.ContextMenu.registerItem({location:"mainMenuHelp/default",actionId:"help.report-issue",order:11}),e.Runnable.registerLateInitializationRunnable({id:"whats-new",loadRunnable:async()=>(await l()).WhatsNew.HelpLateInitialization.instance()});

const c={commandPrompt:"Show Performance insights",title:"Performance insights"},w=t.i18n.registerUIStrings("panels/performance/devtools_integration/performance-meta.ts",c),d=t.i18n.getLazilyComputedLocalizedString.bind(void 0,w);
let p;
async function m(){return p||(p=await import("../../panels/performance/devtools_integration/devtools_integration.js")),p}e.Revealer.registerRevealer({contextTypes:()=>[a.PerformanceTracing.RawTraceEvents],loadRevealer:async()=>new((await m()).Revealer.Revealer)}),n.ViewManager.defaultOptionsForTabs["performance-insights"]=!0,n.ViewManager.registerViewExtension({location:"panel",id:"performance-insights",commandPrompt:d(c.commandPrompt),title:d(c.title),order:96,persistence:"closeable",hasToolbar:!1,isPreviewFeature:!0,loadView:async()=>(await m()).Wrapper.Wrapper.instance()});
