exports = {
    onAppInstallCallback: function (payload: any) {
        console.log("ovnAppallCallback", payload);
    },
    onApplicantUpdateCallback: async function (payload: any) {
        console.log("onApplicantUpdateCallback", payload);
    },
    onExternalEventHandler: async function (payload: any) {
        console.log("onExternalEventHandler", payload);

    },
    getMettlAssessmentInfo: async function (payload: any) {

    }
}