"use strict";
exports = {
    onAppInstallCallback: function (payload) {
        console.log("ovnAppallCallback", payload);
    },
    onApplicantUpdateCallback: async function (payload) {
        console.log("onApplicantUpdateCallback", payload);
    },
    onExternalEventHandler: async function (payload) {
        console.log("onExternalEventHandler", payload);
    },
    getMettlAssessmentInfo: async function (payload) {
    }
};
