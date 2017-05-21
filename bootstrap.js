/* -------------------------------------------------------------------------- */

"use strict";

/* --- imports --- */

const {classes : Cc, interfaces : Ci, utils : Cu, results : Cr} = Components;

const {Services} = Cu.import(`resource://gre/modules/Services.jsm`, {});

const StyleSvc = Cc[`@mozilla.org/content/style-sheet-service;1`]
	.getService(Ci.nsIStyleSheetService);

//const Console = new (Cu.import(
//	`resource://gre/modules/Console.jsm`, {}).ConsoleAPI)
//		({prefix : `UserChrome`});

/* --- entrypoints --- */

let RegisteredUris;
const SrcUris = [
	`chrome://userchrome%40cauterite.co/content/userchrome-xul.css`,
	`chrome://userchrome%40cauterite.co/content/userchrome-html.css`,];

const startup = () => {
	/* prevent caching */
	RegisteredUris = SrcUris.map(X => `${X}?${Date.now()}`);

	for (let X of RegisteredUris) {
		StyleSvc.loadAndRegisterSheet(
			Services.io.newURI(X, null, null),
			StyleSvc.AUTHOR_SHEET);};};

const shutdown = () => {
	for (let X of RegisteredUris) {
		StyleSvc.unregisterSheet(
			Services.io.newURI(X, null, null),
			StyleSvc.AUTHOR_SHEET);};};

const install = () => {};

const uninstall = () => {};

/* -------------------------------------------------------------------------- */

/*

















































*/

/* -------------------------------------------------------------------------- */