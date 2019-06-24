const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/key");

class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content = "") {
        super();
        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email("hoangminh160997@gmail.com");
        this.subject = subject;
        this.body = new helper.Content("text/html", content);

        //now becom aray of helper>email
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addReipients();
    }

    formatAddresses(recipients = [{}]) {
        return recipients.map(e => {
            return new helper.Email(e.email);
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addReipients() {
        const personlize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personlize.addTo(recipient);
        });
        this.addPersonalization(personlize);
    }
}

module.exports = Mailer;
